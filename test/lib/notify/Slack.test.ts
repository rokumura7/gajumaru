jest.mock('axios');
import axios from 'axios';
const AxiosMock = axios as jest.Mocked<typeof axios>;
AxiosMock.post.mockResolvedValue({ data: { message: 'test' } });

import { notify } from '@/lib/notify/Slack';

const oldEnv = process.env;
jest.mock('dotenv');

describe('Slack notification', () => {
  beforeEach(() => {
    process.env = { ...oldEnv };
  });

  test('notify', async () => {
    process.env.SLACK_WEBHOOK_URL = 'SLACK_WEBHOOK_URL';
    process.env.SLACK_WEBHOOK_CHANNEL = 'SLACK_WEBHOOK_CHANNEL';
    await expect(notify('test')).resolves.not.toThrow();
  });

  test('notify throw an error', async () => {
    process.env.SLACK_WEBHOOK_URL = 'SLACK_WEBHOOK_URL';
    await expect(notify('test')).rejects.toThrow();
  });

  test('builderBody throw an error', async () => {
    process.env.SLACK_WEBHOOK_CHANNEL = 'SLACK_WEBHOOK_CHANNEL';
    await expect(notify('test')).rejects.toThrow();
  });
});
