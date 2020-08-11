import { Title, of as _title } from "./vo/book/title"
import { Author, of as _author } from "./vo/book/author"
import { Price, of as _price } from "./vo/book/price"
import { Publisher, of as _publisher } from "./vo/book/publisher"
import { ISBN, of as _isbn } from "./vo/book/isbn"

export default class Book {
  title: Title | null
  author: Author | null
  price: Price | null
  publisher: Publisher | null
  isbn: ISBN | null

  constructor(
    title: string | null,
    author: string | null,
    price: string | null,
    publisher: string | null,
    isbn: string | null
  ) {
    this.title = _title(title)
    this.author = _author(author)
    this.price = _price(price)
    this.publisher = _publisher(publisher)
    this.isbn = _isbn(isbn)
  }
}