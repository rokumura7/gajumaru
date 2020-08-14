import puppeteer, { Page } from 'puppeteer'
import SELECTORS from './selectors'
import * as utils from '../../util/utils'
import Book from '../../model/book'
import { Title } from '../../model/vo/book/title'
import { Author } from '../../model/vo/book/author'
import { Price } from '../../model/vo/book/price'
import { Publisher } from '../../model/vo/book/publisher'
import { ISBN } from '../../model/vo/book/isbn'
import of from '../../model/vo/generator'

const text = async (page: Page, selector: string, i: number): Promise<string | null> => {
  return await page.$eval(utils.replaceIndex(selector, i), elm => elm.textContent)
}

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$(SELECTORS.RANK_LIST)
  const books: Book[] = []
  for (let i = 1; i <= list.length; i++) {
    const title = await text(page, SELECTORS.TITLE, i)
    const author = await text(page, SELECTORS.AUTHOR, i)
    const price = await text(page, SELECTORS.PRICE, i)
    const publisher = await text(page, SELECTORS.PUBLISHER, i)
    const isbn = await text(page, SELECTORS.ISBN, i)
    const book: Book = {
      title: of<Title>(title),
      author: of<Author>(author),
      price: of<Price>(price),
      publisher: of<Publisher>(publisher),
      isbn: of<ISBN>(isbn)
    }
    books.push(book)
  }
  console.log(books)
  await browser.close()
})()
