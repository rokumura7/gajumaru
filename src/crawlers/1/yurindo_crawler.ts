import puppeteer from 'puppeteer'
import SELECTORS from './selectors'
import * as utils from '../../util/utils'
import Book from '../../model/book'

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$(SELECTORS.RANK_LIST)
  const books: Book[] = []
  for (let i = 1; i <= list.length; i++) {
    const title = await page.$eval(utils.replaceIndex(SELECTORS.TITLE, i), elm => elm.textContent)
    const author = await page.$eval(utils.replaceIndex(SELECTORS.AUTHOR, i), elm => elm.textContent)
    const price = await page.$eval(utils.replaceIndex(SELECTORS.PRICE, i), elm => elm.textContent)
    const publisher = await page.$eval(utils.replaceIndex(SELECTORS.PUBLISHER, i), elm => elm.textContent)
    const isbn = await page.$eval(utils.replaceIndex(SELECTORS.ISBN, i), elm => elm.textContent)
    books.push(new Book(title, author, price, publisher, isbn))
  }
  console.log(books)
  await browser.close()
})()
