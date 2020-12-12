import { NumberValueObject, StringValueObject } from './vo/ValueObject';
import { fetchNum } from '../utils/Utils';

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

export type Book = {
  title: Title;
  author: Author;
  price: Price;
  publisher: Publisher;
  isbn: ISBN;
};

export class BookBuilder {
  private _title?: Title;
  private _author?: Author;
  private _price?: Price;
  private _publisher?: Publisher;
  private _isbn?: ISBN;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  static prepare = (): BookBuilder => new BookBuilder();

  title = (_title: string): BookBuilder => {
    this._title = Title.of(_title);
    return this;
  };

  author = (_author: string): BookBuilder => {
    this._author = Author.of(_author);
    return this;
  };

  price = (_price: string): BookBuilder => {
    this._price = Price.of(fetchNum(_price));
    return this;
  };

  publisher = (_publisher: string): BookBuilder => {
    this._publisher = Publisher.of(_publisher);
    return this;
  };

  isbn = (_isbn: string): BookBuilder => {
    this._isbn = ISBN.of(_isbn);
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
    if (!this._price) this._price = Price.of(-1);
    return {
      title: this._title,
      author: this._author,
      price: this._price,
      publisher: this._publisher,
      isbn: this._isbn,
    };
  };
}
