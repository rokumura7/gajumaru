import { GajumaruPage } from '../../lib/puppeteer';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';
import { Book, BookBuilder } from '../../lib/model/Book';

class YurindoCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new YurindoCrawler();

  protected crawl = async (page: GajumaruPage): Promise<Book[]> => {
    await page.goto('https://www.yurindo.co.jp/ranking/week-biz');

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 1; i <= list.length; i++) {
      await this.crawlDetail(page, i).then((book) => books.push(book));
    }
    return new Promise((resolve) => resolve(books));
  };

  private crawlDetail = async (
    page: GajumaruPage,
    i: number
  ): Promise<Book> => {
    const builder = BookBuilder.prepare();
    await page.val(Selectors.TITLE, i).then((title) => builder.title(title));
    await page
      .val(Selectors.AUTHOR, i)
      .then((author) => builder.author(author));
    await page.val(Selectors.PRICE, i).then((price) => builder.price(price));
    await page
      .val(Selectors.PUBLISHER, i)
      .then((publisher) => builder.publisher(publisher));
    await page.val(Selectors.ISBN, i).then((isbn) => builder.isbn(isbn));
    return builder.build();
  };
}

YurindoCrawler.build().run();
