import YurindoCrawler from '@/crawlers/Yurindo/YurindoCrawler';

jest.setTimeout(300000);
describe('YurindoCrawler', () => {
  test('run', async () => {
    const result = await YurindoCrawler.build().run();
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
