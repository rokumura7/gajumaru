import BookfirstCrawler from '@/crawlers/Bookfirst/BookfirstCrawler';

jest.setTimeout(300000);
describe('BookfirstCrawler', () => {
  test('run', async () => {
    const result = await BookfirstCrawler.build().run();
    expect(result.length).toBeGreaterThanOrEqual(1);
    result.forEach((book) => {
      expect(book).toHaveProperty('title');
      expect(book).toHaveProperty('author');
      expect(book).toHaveProperty('price');
      expect(book).toHaveProperty('publisher');
      expect(book).toHaveProperty('isbn');
    });
  });
});
