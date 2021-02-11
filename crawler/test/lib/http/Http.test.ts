import { AxiosAdapter } from 'axios';
import { post } from '@/lib/http/Http';
jest.mock('@/mock/Http', () => jest.fn());
import mock from '@/mock/Http';

const AxiosMockAdapter = (mock as unknown) as jest.Mock<
  ReturnType<AxiosAdapter>,
  Parameters<AxiosAdapter>
>;

describe('Http', () => {
  beforeEach(() => AxiosMockAdapter.mockClear());
  test('post', async () => {
    const expected = {
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
      data: {
        message: 'test for post',
      },
    };
    AxiosMockAdapter.mockResolvedValueOnce(expected);
    const res = await post('test', {});
    expect(res.data.message).toBe('test for post');
  });
});
