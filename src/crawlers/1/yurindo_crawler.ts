import { Browser } from 'puppeteer'
import Selectors from './selectors'
import { replaceIndex as r } from '../../util/utils'
import Book from '../../model/book'
import { RPage } from '../../lib/rpage'
import { Title, Author, Price, Publisher, ISBN } from '../../model/vo/book'
import { BaseCrawler } from '../crawler'

export default class YurindoCrawler extends BaseCrawler {
  protected async crawl(browser: Browser, page: RPage): Promise<Book[]> {
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
    return new Promise(() => books)
  }
}
