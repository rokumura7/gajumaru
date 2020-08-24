package gajumaru_api.model;

import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Price;
import gajumaru_api.model.vo.book.Title;

public class Book {
  private gajumaru_api.model.vo.book.Id id;
  private Title title;
  private Isbn isbn;
  private Price price;
}