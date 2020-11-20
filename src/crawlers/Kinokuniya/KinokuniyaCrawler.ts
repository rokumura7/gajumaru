import { Book, BookBuilder } from '../../lib/model/Book';
import * as vo from '../../lib/model/vo/Book';
import { GajumaruBrowser, GajumaruPage } from '../../lib/puppeteer';
import { BaseCrawler, Crawler } from '../Crawler';
import Selectors from './Selectors';

class KinokuniyaCrawler extends BaseCrawler {
  private constructor() {
    super();
  }

  static build = (): Crawler => new KinokuniyaCrawler();

  protected crawl = async (
    _: GajumaruBrowser,
    page: GajumaruPage
  ): Promise<Book[]> => {
    await page.goto(
      'https://www.kinokuniya.co.jp/disp/CKnRankingPageCList.jsp?dispNo=107002002001250&vTp=w'
    );

    const list = await page.$$(Selectors.RANK_LIST);
    const books: Book[] = [];
    for (let i = 1; i <= list.length && i <= 10; i++) {
      await this.crawlDetail(page, i).then((book) => {
        if (book) books.push(book);
      });
    }
    return new Promise((resolve) => resolve(books));
  };

  private crawlDetail = async (
    page: GajumaruPage,
    index: number
  ): Promise<Book | void> => {
    try {
      await page.click(Selectors.DETAIL_LINK, index);

      const title = await page.elm<vo.Title>(Selectors.TITLE);
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
      const author = await page.elm<vo.Author>(Selectors.AUTHOR);
      const publisher = await page.elm<vo.Publisher>(Selectors.PUBLISHER);
      const price = await page.elm<vo.Price>(Selectors.PRICE);
      const isbn = await page.elm<vo.ISBN>(Selectors.ISBN);

      return BookBuilder.prepare()
        .title(title)
        .author(author)
        .publisher(publisher)
        .price(price)
        .isbn(isbn)
        .build();
    } finally {
      await page.goBack();
    }
  };
}
KinokuniyaCrawler.build().run();
