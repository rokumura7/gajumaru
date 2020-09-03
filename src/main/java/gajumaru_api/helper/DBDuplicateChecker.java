package gajumaru_api.helper;

import gajumaru_api.model.Author;
import gajumaru_api.model.Book;
import gajumaru_api.model.Publisher;
import gajumaru_api.model.vo.author.Name;
import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Title;

public class DBDuplicateChecker implements DuplicateChecker {
    @Override
    public Book duplicate(Title title, Isbn isbn) {
        return null;
    }

    @Override
    public Author duplicate(Name name) {
        return null;
    }

    @Override
    public Publisher duplicate(gajumaru_api.model.vo.publisher.Name name) {
        return null;
    }
}
