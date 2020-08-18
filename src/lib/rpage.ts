/* eslint-disable @typescript-eslint/no-explicit-any */
import { Page } from "puppeteer";
import of from "../model/vo/generator";

interface RPage extends Page {
  elm<T>(selector: string): Promise<T>;
}

class RPage implements RPage {
  page: Page;

  constructor(_page: Page) {
    {
      this.page = _page;
      return new Proxy(_page, {
        get: (target, key) =>
          (this as any)[key] !== undefined
            ? (this as any)[key]
            : (target as any)[key],
      }) as RPage;
    }
  }

  async elm<T>(selector: string): Promise<T> {
    return of(await this.page.$eval(selector, (elm) => elm.textContent));
  }
}

export { RPage };
