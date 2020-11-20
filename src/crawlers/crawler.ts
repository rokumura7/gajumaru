import { Book } from '../lib/model/Book';
import { GajumaruBrowser, GajumaruPage } from '../lib/puppeteer';
import { SlackBodyBuilder, post } from '../lib/notify/Slack';
import { args } from '../lib/util/Args';

export interface Crawler {
  run(): Promise<void>;
}

export abstract class BaseCrawler implements Crawler {
  willNotify: boolean;

  protected constructor() {
    this.willNotify = args().slack;
  }

  run = async (): Promise<void> => {
    const browser = await GajumaruBrowser.build();
    const page = await browser.newPage();
    const books = await this.crawl(browser, page);
    await browser.close();
    await this.notify(books);
  };

  private notify = async (books: Book[]): Promise<void> => {
    const message = books
      .map((b) => `[${b.title}] by ${b.author}`)
      .reduce((b1, b2) => b1 + '\n' + b2);
    if (this.willNotify) {
      const body = new SlackBodyBuilder(message);
      await post(body);
    } else {
      console.log(message);
    }
  };

  protected abstract crawl(
    browser: GajumaruBrowser,
    page: GajumaruPage
  ): Promise<Book[]>;
}
