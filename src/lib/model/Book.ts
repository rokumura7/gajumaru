import { Title, Publisher, Price, ISBN, Author } from './vo/Book';
import { fetchNum } from '../utils/Utils';

export interface Book {
  title: Title;
  author: Author;
  price: Price | null;
  publisher: Publisher;
  isbn: ISBN;
}

export class BookBuilder {
  private _title: string | null = null;
  private _author: string | null = null;
  private _price = -1;
  private _publisher: string | null = null;
  private _isbn: string | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  static prepare = (): BookBuilder => new BookBuilder();

  title = (_title: string): BookBuilder => {
    this._title = _title;
    return this;
  };

  author = (_author: string): BookBuilder => {
    this._author = _author;
    return this;
  };

  price = (_price: string): BookBuilder => {
    this._price = fetchNum(_price);
    return this;
  };

  publisher = (_publisher: string): BookBuilder => {
    this._publisher = _publisher;
    return this;
  };

  isbn = (_isbn: string): BookBuilder => {
    this._isbn = _isbn;
    return this;
  };

  build = (): Book => {
    if (
      this._title == null ||
      this._author == null ||
      this._publisher == null ||
      this._isbn == null
    )
      throw new Error('missing args.');
    return {
      title: Title.of(this._title),
      author: Author.of(this._author),
      price: Price.of(this._price),
      publisher: Publisher.of(this._publisher),
      isbn: ISBN.of(this._isbn),
    };
  };
}
