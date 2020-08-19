import puppeteer, { Browser } from "puppeteer";
import Book from "../model/book";
import { RPage } from "../lib/rpage";
import { SlackBody, post } from "../notify/slack";
import { Args } from "../util/args";

export interface Crawler {
  run(): Promise<void>;
}

export abstract class BaseCrawler implements Crawler {
  willNotify: boolean;

  constructor(launchOpt: Args) {
    this.willNotify = launchOpt.slack;
  }

  async run(): Promise<void> {
    const browser = await puppeteer.launch();
    const _page = await browser.newPage();
    const page = new RPage(_page);
    const books = await this.crawl(browser, page);
    await browser.close();
    await this.notify(books);
  }

  protected async notify(books: Book[]): Promise<void> {
    const message = books
      .map((b) => `[${b.title}] by ${b.author}`)
      .reduce((b1, b2) => b1 + "\n" + b2);
    if (this.willNotify) {
      const body = new SlackBody(message);
      await post(body);
    } else {
      console.log(message);
    }
  }

  protected abstract crawl(browser: Browser, page: RPage): Promise<Book[]>;
}
