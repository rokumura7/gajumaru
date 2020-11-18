import puppeteer, { Browser } from 'puppeteer';
import { Closable } from '../utils/Closable';
import { getCrawlOptions } from '../utils/CrawlOptions';
import GajumaruPage from './GajumaruPage';

class GajumaruBrowser implements Closable {
  private browser: Browser;
  private constructor(_browser: Browser) {
    this.browser = _browser;
  }

  static build = async (): Promise<GajumaruBrowser> =>
    await puppeteer
      .launch(getCrawlOptions())
      .then((browser) => new GajumaruBrowser(browser));

  newPage = async (): Promise<GajumaruPage> =>
    await this.browser.newPage().then((page) => GajumaruPage.build(page));

  close = async (): Promise<void> => this.browser.close();
}

export default GajumaruBrowser;
