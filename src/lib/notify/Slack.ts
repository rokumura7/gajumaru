import axios from 'axios';
import * as dotenv from 'dotenv';

interface SlackBlock {
  type: string;
  text: {
    type: string;
    text: string;
  };
}

interface SlackBody {
  channel: string;
  blocks: SlackBlock[];
}

const headerSection = {
  type: 'section',
  text: {
    type: 'mrkdwn',
    text: 'Here is *the Weekly Book Ranking* below.',
  },
};

const buildBody = (message: string): SlackBody => {
  if (!process.env.SLACK_WEBHOOK_CHANNEL)
    throw new Error('Not found SLACK_WEBHOOK_CHANNEL.');
  return {
    channel: process.env.SLACK_WEBHOOK_CHANNEL,
    blocks: [
      headerSection,
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: message,
        },
      },
    ],
  };
};

export const notify = async (message: string): Promise<void> => {
  dotenv.config();
  if (!process.env.SLACK_WEBHOOK_URL)
    throw new Error('Not found SLACK_WEBHOOK_URL.');
  const headers = {
    'Content-Type': 'application/json',
  };
  const payload = buildBody(message);
  await axios.post(process.env.SLACK_WEBHOOK_URL, payload, {
    headers: headers,
  });
};
