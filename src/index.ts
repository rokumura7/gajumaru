import puppeteer from 'puppeteer'
import { Page } from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$('.rank_list')
  const book = []
  for (let i = 1; i <= list.length; i++) {
    const title = await page.$eval(`.rank_list:nth-child(${i})  .list_title > span`, elm => elm.textContent)
    console.log(title)
  }
  await browser.close()
})()