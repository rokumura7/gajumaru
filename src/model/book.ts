export default class Book {
  title: string | null
  author: string | null
  constructor(title: string | null, author: string | null) {
    this.title = title
    this.author = author
  }
}