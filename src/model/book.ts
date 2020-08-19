import { Title, Author, Price, Publisher, ISBN } from './vo/book';

export default interface Book {
  title: Title;
  author: Author;
  price: Price;
  publisher: Publisher;
  isbn: ISBN;
}
