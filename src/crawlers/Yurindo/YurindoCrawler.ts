import { GajumaruBrowser, GajumaruPage } from '../../lib/puppeteer';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';
import { Book, BookBuilder } from '../../lib/model/Book';
import * as vo from '../../lib/model/vo/Book';

class YurindoCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new YurindoCrawler();

  protected crawl = async (
    _: GajumaruBrowser,
    page: GajumaruPage
  ): Promise<Book[]> => {
    await page.goto('https://www.yurindo.co.jp/ranking/week-all');

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 1; i <= list.length; i++) {
      const title = await page.elm<vo.Title>(Selectors.TITLE, i);
      const author = await page.elm<vo.Author>(Selectors.AUTHOR, i);
      const price = await page.elm<vo.Price>(Selectors.PRICE, i);
      const publisher = await page.elm<vo.Publisher>(Selectors.PUBLISHER, i);
      const isbn = await page.elm<vo.ISBN>(Selectors.ISBN, i);

      const book: Book = BookBuilder.prepare()
        .title(title)
        .author(author)
        .price(price)
        .publisher(publisher)
        .isbn(isbn)
        .build();
      books.push(book);
    }
    return new Promise((resolve) => resolve(books));
  };
}

YurindoCrawler.build().run();
