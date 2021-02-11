import { Title, Publisher, Price, ISBN, Author } from '@/lib/model/vo/Book';

describe('ValueObjects for Book Test', () => {
  test('Title', () => {
    const vo1 = Title.of('test');
    const vo2 = Title.of('test');
    const vo3 = Title.of('test2');
    expect(vo1.eq(vo2)).toBe(true);
    expect(vo1.eq(vo3)).not.toBe(true);
  });

  test('Publisher', () => {
    const vo1 = Publisher.of('test');
    const vo2 = Publisher.of('test');
    const vo3 = Publisher.of('test2');
    expect(vo1.eq(vo2)).toBe(true);
    expect(vo1.eq(vo3)).not.toBe(true);
  });

  test('Price', () => {
    const vo1 = Price.of(123);
    const vo2 = Price.of(123);
    const vo3 = Price.of(456);
    expect(vo1.eq(vo2)).toBe(true);
    expect(vo1.eq(vo3)).not.toBe(true);
  });

  test('ISBN', () => {
    const vo1 = ISBN.of('test');
    const vo2 = ISBN.of('test');
    const vo3 = ISBN.of('test2');
    expect(vo1.eq(vo2)).toBe(true);
    expect(vo1.eq(vo3)).not.toBe(true);
  });

  test('Author', () => {
    const vo1 = Author.of('test');
    const vo2 = Author.of('test');
    const vo3 = Author.of('test2');
    expect(vo1.eq(vo2)).toBe(true);
    expect(vo1.eq(vo3)).not.toBe(true);
  });
});
