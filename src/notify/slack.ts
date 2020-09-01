import axios, { AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

export interface SlackBlock {
  type: string;
  text: {
    type: string;
    text: string;
  };
}

export interface SlackBody {
  channel: string;
  blocks: SlackBlock[];
}

export class SlackBodyBuilder {
  sections: SlackBlock[] = [];
  constructor(message: string) {
    this.sections.push({
      type: 'section',
      text: {
        type: 'plain_text',
        text: message,
      },
    });
  }

  addAttachment(message: string): void {
    this.sections.push({
      type: 'section',
      text: {
        type: 'plain_text',
        text: message,
      },
    });
  }

  build(): SlackBody {
    const _blocks: SlackBlock[] = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Here is *the Weekly Book Ranking* below.',
        },
      },
    ];
    this.sections.forEach((s) => _blocks.push(s));
    return {
      channel: process.env.SLACK_WEBHOOK_CHANNEL
        ? process.env.SLACK_WEBHOOK_CHANNEL
        : '',
      blocks: _blocks,
    };
  }
}

export const post = async (
  builder: SlackBodyBuilder
): Promise<AxiosResponse<unknown>> | never => {
  dotenv.config();
  const headers = {
    'Content-Type': 'application/json',
  };
  const payload = builder.build();
  if (typeof process.env.SLACK_WEBHOOK_URL === 'string')
    return await axios.post(process.env.SLACK_WEBHOOK_URL, payload, {
      headers: headers,
    });
  throw new Error('Please check Dotenv file.');
};
