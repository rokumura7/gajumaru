import { Book } from '../lib/model/Book';
import { GajumaruBrowser, GajumaruPage } from '../lib/puppeteer';
import { notify } from '../lib/notify/Slack';
import { args } from '../lib/launchOption/Args';
import { using } from '../lib/helpers/Closable';

export interface Crawler {
  run(): Promise<Book[]>;
}

export abstract class BaseCrawler implements Crawler {
  willNotify: boolean;

  protected constructor() {
    this.willNotify = args().notify;
  }

  run = async (): Promise<Book[]> => {
    const books = await GajumaruBrowser.build().then((browser) =>
      using(
        browser,
        async (browser) =>
          await browser.newPage().then((page) => this.crawl(page))
      )
    );
    await this.notify(books);
    return books;
  };

  private notify = async (books: Book[] | void): Promise<void> => {
    const message = books
      ? books
          .map((b) => `[${b.title.get()}] by ${b.author.get()}`)
          .reduce((b1, b2) => b1 + '\n' + b2)
      : 'no books.';
    if (this.willNotify) {
      await notify(message);
    }
  };

  protected abstract crawl(page: GajumaruPage): Promise<Book[]>;
}
