import { ElementHandle, Page, Response } from 'puppeteer';
import of from '../model/vo/Generator';
import { wait, replaceIndex } from '../util/Utils';

class GajumaruPage {
  private page: Page;
  private constructor(_page: Page) {
    this.page = _page;
  }

  static build = (_page: Page): GajumaruPage => new GajumaruPage(_page);

  val = async (selector: string, index?: number): Promise<string | null> => {
    if (index) selector = replaceIndex(selector, index);
    return await this.page.$eval(selector, (elm) => elm.textContent);
  };

  elm = async <T>(selector: string, index?: number): Promise<T> =>
    await this.val(selector, index).then((v) => of(v));

  goto = async (url: string): Promise<Response | null> => {
    const res = await this.page.goto(url);
    await wait();
    return res;
  };

  $ = async (selector: string): Promise<ElementHandle<Element> | null> =>
    await this.page.$(selector);

  $$ = async (selector: string): Promise<ElementHandle<Element>[]> =>
    await this.page.$$(selector);

  click = async (selector: string, index?: number): Promise<void> => {
    if (index) selector = replaceIndex(selector, index);
    const elm = await this.page.$(selector);
    if (!elm) throw Error('Not found element in page: ' + selector);
    await Promise.all([
      elm.click(),
      wait(),
      this.page.waitForNavigation({ waitUntil: ['load', 'networkidle0'] }),
    ]);
  };

  clickTargetBlank = async (
    selector: string,
    index?: number
  ): Promise<GajumaruPage> => {
    if (index) selector = replaceIndex(selector, index);
    const browser = this.page.browser();
    const [newPage] = await Promise.all([
      browser
        .waitForTarget((t) => t.opener() === this.page.target())
        .then((t) => t.page()),
      wait(),
      this.page.click(selector),
    ]);
    return GajumaruPage.build(newPage);
  };

  goBack = async (): Promise<void> => {
    await Promise.all([
      this.page.goBack(),
      wait(),
      this.page.waitForNavigation({ waitUntil: ['load', 'networkidle0'] }),
    ]);
  };

  close = async (): Promise<void> => this.page.close();
}

export default GajumaruPage;
