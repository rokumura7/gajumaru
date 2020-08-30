package gajumaru_api.model;

import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Price;
import gajumaru_api.model.vo.book.Title;

public class Book extends IdentifiableModel {
  private gajumaru_api.model.vo.book.Id id;
  private Title title;
  private Isbn isbn;
  private Price price;

  private Book(Builder builder) {
    this.id = builder.id;
    this.title = builder.title;
    this.isbn = builder.isbn;
    this.price = builder.price;
  }

  static class Builder {
    private gajumaru_api.model.vo.book.Id id;
    private Title title;
    private Isbn isbn;
    private Price price;

    Builder(Title title, Isbn isbn, Price price) {
      this.title = title;
      this.isbn = isbn;
      this.price = price;
    }

    Builder id(gajumaru_api.model.vo.book.Id id) {
      this.id = id;
      return this;
    }

    Builder title(Title title) {
      this.title = title;
      return this;
    }

    Builder isbn(Isbn isbn) {
      this.isbn = isbn;
      return this;
    }

    Builder price(Price price) {
      this.price = price;
      return this;
    }

    Book build() {
      if (title == null || isbn == null) {
        throw new NullPointerException();
      }
      return new Book(this);
    }
  }

  public gajumaru_api.model.vo.book.Id getId() {
    return this.id;
  }

  public Title getTitle() {
    return this.title;
  }

  public Isbn getIsbn() {
    return this.isbn;
  }

  public Price getPrice() {
    return this.price;
  }
}