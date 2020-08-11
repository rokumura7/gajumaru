import { Book } from "./book"
import { Title } from "./vo/book/title";
import { Author } from "./vo/book/author";
import { Price } from "./vo/book/price";
import { Publisher } from "./vo/book/publisher";
import { ISBN } from "./vo/book/isbn";

export default class BookBuilder implements Partial<Book> {
  title?: Title
  author?: Author
  price?: Price
  publisher?: Publisher
  isbn?: ISBN

  _title = (val: Title): this & Pick<Book, 'title'> => Object.assign(this, { title: val })
  _author = (val: Author): this & Pick<Book, 'author'> => Object.assign(this, { author: val })
  _price = (val: Price): this & Pick<Book, 'price'> => Object.assign(this, { price: val })
  _publisher = (val: Publisher): this & Pick<Book, 'publisher'> => Object.assign(this, { publisher: val })
  _isbn = (val: ISBN): this & Pick<Book, 'isbn'> => Object.assign(this, { isbn: val })

  build(this: Book) {
    return new Book(this);
  }
}