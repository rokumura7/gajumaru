import puppeteer from 'puppeteer'
import SELECTORS from './selectors'
import * as utils from '../../util/utils'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$(SELECTORS.RANK_LIST)
  const book = []
  for (let i = 1; i <= list.length; i++) {
    const title = await page.$eval(utils.replaceIndex(SELECTORS.TITLE, i), elm => elm.textContent)
    const author = await page.$eval(utils.replaceIndex(SELECTORS.AUTHOR, i), elm => elm.textContent)
    console.log(title)
    console.log(author)
  }
  await browser.close()
})()
