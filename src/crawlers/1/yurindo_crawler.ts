import puppeteer from 'puppeteer'
import Selectors from './selectors'
import * as utils from '../../util/utils'
import Book from '../../model/book'
import { Title } from '../../model/vo/book/title'
import { Author } from '../../model/vo/book/author'
import { Price } from '../../model/vo/book/price'
import { Publisher } from '../../model/vo/book/publisher'
import { ISBN } from '../../model/vo/book/isbn'
import { RPage } from '../../lib/rpage'

(async () => {
  const browser = await puppeteer.launch()
  const _page = await browser.newPage()
  const page = new RPage(_page)
  await page.goto('https://www.yurindo.co.jp/ranking/week-all').then(() => page.waitFor(1000))
  const list = await page.$$(Selectors.RANK_LIST)
  const books: Book[] = []
  for (let i = 1; i <= list.length; i++) {
    const title = await page.elm<Title>(utils.replaceIndex(Selectors.TITLE, i))
    const author = await page.elm<Author>(utils.replaceIndex(Selectors.AUTHOR, i))
    const price = await page.elm<Price>(utils.replaceIndex(Selectors.PRICE, i))
    const publisher = await page.elm<Publisher>(utils.replaceIndex(Selectors.PUBLISHER, i))
    const isbn = await page.elm<ISBN>(utils.replaceIndex(Selectors.ISBN, i))
    const book: Book = {
      title: title,
      author: author,
      price: price,
      publisher: publisher,
      isbn: isbn
    }
    books.push(book)
  }
  console.log(books)
  await browser.close()
})()
