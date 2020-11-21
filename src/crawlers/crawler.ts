import { Book } from '../lib/model/Book';
import { GajumaruBrowser, GajumaruPage } from '../lib/puppeteer';
import { notify } from '../lib/notify/Slack';
import { args } from '../lib/util/Args';
import { using } from '../lib/util/Closable';

export interface Crawler {
  run(): Promise<void>;
}

export abstract class BaseCrawler implements Crawler {
  willNotify: boolean;

  protected constructor() {
    this.willNotify = args().notify;
  }

  run = async (): Promise<void> => {
    const books = await GajumaruBrowser.build().then((browser) =>
      using(
        browser,
        async (browser) =>
          await browser.newPage().then((page) => this.crawl(browser, page))
      )
    );
    await this.notify(books);
  };

  private notify = async (books: Book[] | void): Promise<void> => {
    const message = books
      ? books
          .map((b) => `[${b.title}] by ${b.author}`)
          .reduce((b1, b2) => b1 + '\n' + b2)
      : 'no books.';
    if (this.willNotify) {
      await notify(message);
    } else {
      console.log(message);
    }
  };

  protected abstract crawl(
    browser: GajumaruBrowser,
    page: GajumaruPage
  ): Promise<Book[]>;
}
