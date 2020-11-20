import GajumaruBrowser from '../../lib/puppeteer/GajumaruBrowser';
import GajumaruPage from '../../lib/puppeteer/GajumaruPage';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';
import { replaceIndex as r } from '../../lib/util/Utils';
import { Book, BookBuilder } from '../../lib/model/Book';
import * as VOBook from '../../lib/model/vo/Book';

class YurindoCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new YurindoCrawler();

  protected async crawl(
    _: GajumaruBrowser,
    page: GajumaruPage
  ): Promise<Book[]> {
    await page.goto('https://www.yurindo.co.jp/ranking/week-all');

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 1; i <= list.length; i++) {
      const title = await page.elm<VOBook.Title>(r(Selectors.TITLE, i));
      const author = await page.elm<VOBook.Author>(r(Selectors.AUTHOR, i));
      const price = await page.elm<VOBook.Price>(r(Selectors.PRICE, i));
      const publisher = await page.elm<VOBook.Publisher>(
        r(Selectors.PUBLISHER, i)
      );
      const isbn = await page.elm<VOBook.ISBN>(r(Selectors.ISBN, i));

      const builder = new BookBuilder();
      const book: Book = builder
        .title(title)
        .author(author)
        .price(price)
        .publisher(publisher)
        .isbn(isbn)
        .build();
      books.push(book);
    }
    return new Promise((resolve) => resolve(books));
  }
}

YurindoCrawler.build().run();
