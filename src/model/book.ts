import { Title } from "./vo/book/title"
import { Author } from "./vo/book/author"
import { Price } from "./vo/book/price"
import { Publisher } from "./vo/book/publisher"
import { ISBN } from "./vo/book/isbn"

interface Book {
  title: Title
  author: Author
  price: Price
  publisher: Publisher
  isbn: ISBN
}

class Book implements Book {
  constructor(book: Book) {
    Object.assign(this, book)
  }
}

export { Book }