import puppeteer from 'puppeteer'
import Selectors from './selectors'
import { replaceIndex as r } from '../../util/utils'
import Book from '../../model/book'
import { RPage } from '../../lib/rpage'
import { Title, Author, Price, Publisher, ISBN } from '../../model/vo/book'
import { post, SlackBody } from '../../notify/slack'

(async () => {
  const browser = await puppeteer.launch()
  const _page = await browser.newPage()
  const page = new RPage(_page)
  await page.goto('https://www.yurindo.co.jp/ranking/week-all')
    .then(() => page.waitFor(1000))

  const list = await page.$$(Selectors.RANK_LIST)
  const books: Book[] = []
  for (let i = 1; i <= list.length; i++) {
    const title = await page.elm<Title>(r(Selectors.TITLE, i))
    const author = await page.elm<Author>(r(Selectors.AUTHOR, i))
    const price = await page.elm<Price>(r(Selectors.PRICE, i))
    const publisher = await page.elm<Publisher>(r(Selectors.PUBLISHER, i))
    const isbn = await page.elm<ISBN>(r(Selectors.ISBN, i))
    const book: Book = {
      title: title,
      author: author,
      price: price,
      publisher: publisher,
      isbn: isbn
    }
    books.push(book)
  }

  const message = books
    .map(b => `[${b.title}] by ${b.author}`)
    .reduce((b1, b2) => b1 + '\n' + b2)
  const body = new SlackBody(message)
  await post(body)

  await browser.close()
})()
