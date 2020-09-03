package gajumaru_api.helper;

import gajumaru_api.model.Author;
import gajumaru_api.model.Book;
import gajumaru_api.model.Publisher;
import gajumaru_api.model.vo.book.Isbn;
import gajumaru_api.model.vo.book.Title;

public interface DuplicateChecker {
    Book duplicate(Title title, Isbn isbn);

    Author duplicate(gajumaru_api.model.vo.author.Name name);

    Publisher duplicate(gajumaru_api.model.vo.publisher.Name name);
}
