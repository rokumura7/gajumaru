/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page, Response } from 'puppeteer';
import of from '../model/vo/Generator';
import { wait } from '../util/Utils';

interface GajumaruPage extends Page {
  elm<T>(selector: string): Promise<T>;
}

class GajumaruPage implements GajumaruPage {
  page: Page;

  constructor(_page: Page) {
    {
      this.page = _page;
      return new Proxy(_page, {
        get: (target, key) =>
          (this as any)[key] !== undefined
            ? (this as any)[key]
            : (target as any)[key],
      }) as GajumaruPage;
    }
  }

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
