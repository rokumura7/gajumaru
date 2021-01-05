import { GajumaruBrowser, GajumaruPage } from '@/lib/puppeteer';

describe('puppeteer', () => {
  test('GajumaruPuppeteer', async () => {
    const browser = await GajumaruBrowser.build();
    expect(browser).toBeInstanceOf(GajumaruBrowser);

    const page = await browser.newPage();
    expect(page).toBeInstanceOf(GajumaruPage);

    await page.close();
    await browser.close();
  });
});
