import axios, { AxiosResponse } from 'axios'
import * as dotenv from 'dotenv'

export class SlackBody {
  sections: {}[] = []
  constructor(message: string) {
    this.sections.push(
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": message
        }
      }
    )
  }

  addAttachment(title: string, message: string): void {
    this.sections.push({ "type": "divider" })
    this.sections.push(
      {
        "type": "section",
        "text": {
          "type": "plain_text",
          "text": message
        }
      }
    )
  }

  build(): {} {
    const blocks: {}[] = [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "Here is *the Weekly Book Ranking* below."
        }
      },
      { "type": "divider" }
    ]
    this.sections.forEach(s => blocks.push(s))
    return { blocks: blocks }
  }
}

export const post = async (body: SlackBody): Promise<AxiosResponse<any>> | never => {
  dotenv.config()
  const headers = {
    'Content-Type': 'application/json'
  }
  const payload = body.build()
  return await axios.post(
    process.env.SLACK_WEBHOOK_URL!,
    payload,
    { headers: headers }
  )
}
