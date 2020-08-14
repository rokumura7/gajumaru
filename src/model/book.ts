import { Title } from "./vo/book/title"
import { Author } from "./vo/book/author"
import { Price } from "./vo/book/price"
import { Publisher } from "./vo/book/publisher"
import { ISBN } from "./vo/book/isbn"

export default interface Book {
  title: Title
  author: Author
  price: Price
  publisher: Publisher
  isbn: ISBN
}
