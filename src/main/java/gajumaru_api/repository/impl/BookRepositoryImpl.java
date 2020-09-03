package gajumaru_api.repository.impl;

import gajumaru_api.model.Book;
import gajumaru_api.model.vo.book.Id;
import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Title;
import gajumaru_api.repository.BookRepository;

public class BookRepositoryImpl implements BookRepository {
    @Override
    public int insert(Book model) {
        return 0;
    }

    @Override
    public Book findById(Id id) {
        return null;
    }

    @Override
    public Book findByTitleAndIsbn(Title title, Isbn isbn) {
        return null;
    }
}
