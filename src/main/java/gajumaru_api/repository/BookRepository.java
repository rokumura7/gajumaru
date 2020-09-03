package gajumaru_api.repository;

import gajumaru_api.model.Book;
import gajumaru_api.model.vo.book.Id;
import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Title;

public interface BookRepository {
    int insert(Book book);

    Book findById(Id id);

    Book findByTitleAndIsbn(Title title, Isbn isbn);
}
