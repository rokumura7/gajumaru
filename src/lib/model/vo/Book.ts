import { NumberValueObject, StringValueObject } from './ValueObject';

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

export { Title, Publisher, Price, ISBN, Author };
