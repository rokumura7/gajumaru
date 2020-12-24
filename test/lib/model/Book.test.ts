import { BookBuilder } from '@/lib/model/Book';
import { Author, ISBN, Price, Publisher, Title } from '@/lib/model/vo/Book';

describe('Model Book', () => {
  // test('Normal', () => {
  //   const model = BookBuilder.prepare()
  //     .title('title')
  //     .author('author')
  //     .price('100円')
  //     .publisher('publisher')
  //     .isbn('1234')
  //     .build();
  //   const expected = {
  //     title: Title.of('title'),
  //     author: Author.of('author'),
  //     price: Price.of(100),
  //     publisher: Publisher.of('publisher'),
  //     isbn: ISBN.of('1234'),
  //   };
  //   expect(model).toStrictEqual(expected);
  // });

  test('Missing args', () => {
    const builder = BookBuilder.prepare()
      .author('author')
      .price('100円')
      .publisher('publisher')
      .isbn('1234');
    expect(() => {
      builder.build();
    }).toThrowError();
  });

  test('Missing price', () => {
    const model = BookBuilder.prepare()
      .title('title')
      .author('author')
      .publisher('publisher')
      .isbn('1234')
      .build();
    const expected = {
      title: Title.of('title'),
      author: Author.of('author'),
      price: Price.of(-1),
      publisher: Publisher.of('publisher'),
      isbn: ISBN.of('1234'),
    };
    expect(model).toStrictEqual(expected);
  });
});
