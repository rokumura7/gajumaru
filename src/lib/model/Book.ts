import {
  NumberValueObject,
  StringValueObject,
} from './vo/PrimitiveValueObject';

class Title extends StringValueObject {
  static of = (value: string): Title => new Title(value);
}

class Publisher extends StringValueObject {
  static of = (value: string): Publisher => new Publisher(value);
}

class Price extends NumberValueObject {
  static of = (value: number): Price => new Price(value);
}

class ISBN extends StringValueObject {
  static of = (value: string): ISBN => new ISBN(value);
}

class Author extends StringValueObject {
  static of = (value: string): Author => new Author(value);
}

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

  price = (_price: number): BookBuilder => {
    this._price = _price;
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
