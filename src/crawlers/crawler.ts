import puppeteer, { Browser } from 'puppeteer';
import { Book } from '../lib/model/Book';
import GajumaruPage from '../lib/puppeteer/GajumaruPage';
import { SlackBodyBuilder, post } from '../lib/notify/Slack';
import { args } from '../lib/util/Args';
import { getCrawlOptions } from './CrawlOptions';

export interface Crawler {
  run(): Promise<void>;
}

export abstract class BaseCrawler implements Crawler {
  willNotify: boolean;

  protected constructor() {
    this.willNotify = args().slack;
  }

  async run(): Promise<void> {
    const browser = await puppeteer.launch(getCrawlOptions());
    const _page = await browser.newPage();
    const page = new GajumaruPage(_page);
    const books = await this.crawl(browser, page);
    await browser.close();
    await this.notify(books);
  }

  private async notify(books: Book[]): Promise<void> {
    const message = books
      .map((b) => `[${b.title}] by ${b.author}`)
      .reduce((b1, b2) => b1 + '\n' + b2);
    if (this.willNotify) {
      const body = new SlackBodyBuilder(message);
      await post(body);
    } else {
      console.log(message);
    }
  }

  protected abstract crawl(
    browser: Browser,
    page: GajumaruPage
  ): Promise<Book[]>;
}
