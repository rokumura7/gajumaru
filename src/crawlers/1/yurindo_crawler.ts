import puppeteer from 'puppeteer'
import SELECTORS from './selectors'
import * as utils from '../../util/utils'
import { Book } from '../../model/book'
import { of as _title } from '../../model/vo/book/title'
import { of as _author } from '../../model/vo/book/author'
import { of as _price } from '../../model/vo/book/price'
import { of as _publisher } from '../../model/vo/book/publisher'
import { of as _isbn } from '../../model/vo/book/isbn'
import BookBuilder from '../../model/bookBuilder'

(async () => {
  console.log('start')
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$(SELECTORS.RANK_LIST)
  const books: Book[] = []
  for (let i = 1; i <= list.length; i++) {
    const title = _title(await page.$eval(utils.replaceIndex(SELECTORS.TITLE, i), elm => elm.textContent))
    const author = _author(await page.$eval(utils.replaceIndex(SELECTORS.AUTHOR, i), elm => elm.textContent))
    const price = _price(await page.$eval(utils.replaceIndex(SELECTORS.PRICE, i), elm => elm.textContent))
    const publisher = _publisher(await page.$eval(utils.replaceIndex(SELECTORS.PUBLISHER, i), elm => elm.textContent))
    const isbn = _isbn(await page.$eval(utils.replaceIndex(SELECTORS.ISBN, i), elm => elm.textContent))
    // TODO: Book's properties are not private. They can be written directly even after build().
    const book = new BookBuilder()
      ._title(title)
      ._author(author)
      ._price(price)
      ._publisher(publisher)
      ._isbn(isbn)
      .build()
    books.push(book)
  }
  console.log(books)
  await browser.close()
})()
