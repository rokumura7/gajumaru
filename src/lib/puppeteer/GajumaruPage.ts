import { Page, Response } from 'puppeteer';
import of from '../model/vo/Generator';
import { wait } from '../util/Utils';

interface GajumaruPage {
  elm<T>(selector: string): Promise<T>;
}

class GajumaruPage implements GajumaruPage {
  private page: Page;
  private constructor(_page: Page) {
    this.page = _page;
  }

  static build = (_page: Page): GajumaruPage => new GajumaruPage(_page);

  async elm<T>(selector: string): Promise<T> {
    return of(await this.page.$eval(selector, (elm) => elm.textContent));
  }

  async goto(url: string): Promise<Response | null> {
    const res = await this.page.goto(url);
    await wait();
    return res;
  }
}

export default GajumaruPage;
