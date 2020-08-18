import axios, { AxiosResponse } from "axios";
import * as dotenv from "dotenv";

export class SlackBody {
  sections: { [key: string]: string | { [key: string]: string } }[] = [];
  constructor(message: string) {
    this.sections.push({
      type: "section",
      text: {
        type: "plain_text",
        text: message,
      },
    });
  }

  addAttachment(message: string): void {
    this.sections.push({ type: "divider" });
    this.sections.push({
      type: "section",
      text: {
        type: "plain_text",
        text: message,
      },
    });
  }

  build(): { blocks: { [key: string]: string | { [key: string]: string } }[] } {
    const _blocks: { [key: string]: string | { [key: string]: string } }[] = [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Here is *the Weekly Book Ranking* below.",
        },
      },
      { type: "divider" },
    ];
    this.sections.forEach((s) => _blocks.push(s));
    return { blocks: _blocks };
  }
}

export const post = async (
  body: SlackBody
): Promise<AxiosResponse<unknown>> | never => {
  dotenv.config();
  const headers = {
    "Content-Type": "application/json",
  };
  const payload = body.build();
  if (typeof process.env.SLACK_WEBHOOK_URL === "string")
    return await axios.post(process.env.SLACK_WEBHOOK_URL, payload, {
      headers: headers,
    });
  throw new Error("Please check Dotenv file.");
};
