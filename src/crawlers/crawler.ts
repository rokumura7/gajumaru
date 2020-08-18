import puppeteer, { Browser } from "puppeteer";
import Book from "../model/book";
import { RPage } from "../lib/rpage";
import { AxiosResponse } from "axios";
import { SlackBody, post } from "../notify/slack";

export interface Crawler {
  run(): Promise<AxiosResponse<unknown>>;
}

export abstract class BaseCrawler implements Crawler {
  async run(): Promise<AxiosResponse<unknown>> {
    const browser = await puppeteer.launch();
    const _page = await browser.newPage();
    const page = new RPage(_page);
    const books = await this.crawl(browser, page);
    await browser.close();
    return await this.notify(books);
  }

  protected async notify(books: Book[]): Promise<AxiosResponse<unknown>> {
    const message = books
      .map((b) => `[${b.title}] by ${b.author}`)
      .reduce((b1, b2) => b1 + "\n" + b2);
    const body = new SlackBody(message);
    return await post(body);
  }

  protected abstract crawl(browser: Browser, page: RPage): Promise<Book[]>;
}
