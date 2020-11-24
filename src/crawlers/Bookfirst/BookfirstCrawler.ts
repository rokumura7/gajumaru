import { Book, BookBuilder } from '../../lib/model/Book';
import { GajumaruPage } from '../../lib/puppeteer';
import { using } from '../../lib/helpers/Closable';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';

class BookfirstCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new BookfirstCrawler();

  protected crawl = async (page: GajumaruPage): Promise<Book[]> => {
    await page.goto('http://www.book1st.net/ranking/0001/0003/page1.html');

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 3; i < list.length * 2 + 3 || i <= 21; i += 2) {
      await page
        .clickTargetBlank(Selectors.DETAIL_LINK, i)
        .then((detailPage) =>
          using(detailPage, (detailPage) => this.crawlDetail(detailPage))
        )
        .then((book) => books.push(book));
    }
    return new Promise((resolve) => resolve(books));
  };

  private crawlDetail = async (page: GajumaruPage): Promise<Book> => {
    const title = await page.val(Selectors.TITLE);
    const author = await page.val(Selectors.AUTHOR);
    const price = await page.val(Selectors.PRICE);
    const publisher = await page.val(Selectors.PUBLISHER);
    const isbn = await page.val(Selectors.ISBN);
    return BookBuilder.prepare()
      .title(title)
      .author(author)
      .price(price)
      .publisher(publisher)
      .isbn(isbn)
      .build();
  };
}

BookfirstCrawler.build().run();
