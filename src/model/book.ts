import { Title, Author, Price, Publisher, ISBN } from './vo/book';

export interface Book {
  title: Title;
  author: Author;
  price: Price;
  publisher: Publisher;
  isbn: ISBN;
}

export class BookBuilder {
  private _title: Title | null = null;
  private _author: Author | null = null;
  private _price: Price | null = null;
  private _publisher: Publisher | null = null;
  private _isbn: ISBN | null = null;

  title(_title: Title): BookBuilder {
    this._title = _title;
    return this;
  }

  author(_author: Author): BookBuilder {
    this._author = _author;
    return this;
  }

  price(_price: Price): BookBuilder {
    this._price = _price;
    return this;
  }

  publisher(_publisher: Publisher): BookBuilder {
    this._publisher = _publisher;
    return this;
  }

  isbn(_isbn: ISBN): BookBuilder {
    this._isbn = _isbn;
    return this;
  }

  build(): Book {
    if (
      this._title == null ||
      this._author == null ||
      this._price == null ||
      this._publisher == null ||
      this._isbn == null
    )
      throw new Error('missing args.');
    return {
      title: this._title,
      author: this._author,
      price: this._price,
      publisher: this._publisher,
      isbn: this._isbn,
    };
  }
}
