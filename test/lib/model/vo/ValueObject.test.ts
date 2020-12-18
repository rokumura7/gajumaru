import { Title, Publisher } from '@/lib/model/vo/Book';

describe('ValueObjects Test', () => {
  test('A.eq(A) return true', () => {
    const vo1 = Title.of('test');
    const vo2 = Title.of('test');
    expect(vo1.eq(vo2)).toBe(true);
  });

  test('A.eq(B) return false', () => {
    const vo1 = Title.of('test');
    const vo2 = Publisher.of('test');
    expect(vo1.eq(vo2)).toBe(false);
  });

  test('A["test"].eq(A["test"]) return true', () => {
    const vo1 = Title.of('test');
    const vo2 = Title.of('test');
    expect(vo1.eq(vo2)).toBe(true);
  });

  test('A["test"].eq(A["test2"]) return true', () => {
    const vo1 = Title.of('test');
    const vo2 = Publisher.of('test');
    expect(vo1.eq(vo2)).toBe(false);
  });
});
