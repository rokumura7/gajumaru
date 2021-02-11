import { Book, BookBuilder } from '../../lib/model/Book';
import { GajumaruPage } from '../../lib/puppeteer';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';

export default class KinokuniyaCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new KinokuniyaCrawler();

  protected crawl = async (page: GajumaruPage): Promise<Book[]> => {
    await page.goto(
      'https://www.kinokuniya.co.jp/disp/CKnRankingPageCList.jsp?dispNo=107002002001250&vTp=w'
    );

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 1; i <= list.length && i <= 10; i++) {
      await page
        .click(Selectors.DETAIL_LINK, i)
        .then(() => this.crawlDetail(page))
        .then((book) => {
          if (book) books.push(book);
        })
        .finally(() => page.goBack());
    }
    return new Promise((resolve) => resolve(books));
  };

  private crawlDetail = async (page: GajumaruPage): Promise<Book | void> => {
    const title = await page.val(Selectors.TITLE);
    const isStopped = await page
      .val(Selectors.STOPPED)
      .then(
        (val) =>
          val === 'ただいまウェブストアではご注文を受け付けておりません。'
      );
    if (isStopped) {
      console.log('Not available now: ' + title);
      return;
    }
    const author = await page.val(Selectors.AUTHOR);
    const publisher = await page.val(Selectors.PUBLISHER);
    const price = await page.val(Selectors.PRICE);
    const isbn = await page.val(Selectors.ISBN);

    return BookBuilder.prepare()
      .title(title)
      .author(author)
      .publisher(publisher)
      .price(price)
      .isbn(isbn)
      .build();
  };
}
KinokuniyaCrawler.build().run();
