import { using } from '@/lib/helpers/Closable';
import ClosableMock from '@/mock/Closable';

describe('Closable', () => {
  test('using', async () => {
    const mock = new ClosableMock();
    expect(mock.getStatus()).toBe(false);
    const result = await using(mock, async (mock) => await mock.test());
    expect(result).toBe('test');
    expect(mock.getStatus()).toBe(true);
  });
});
