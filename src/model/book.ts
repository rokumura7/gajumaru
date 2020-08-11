export default class Book {
  title: string | null
  author: string | null
  price: string | null
  publisher: string | null
  isbn: string | null

  constructor(
    title: string | null,
    author: string | null,
    price: string | null,
    publisher: string | null,
    isbn: string | null
  ) {
    this.title = title
    this.author = author
    this.price = price
    this.publisher = publisher
    this.isbn = isbn
  }
}