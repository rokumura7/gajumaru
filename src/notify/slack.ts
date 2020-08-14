import axios, { AxiosResponse } from 'axios'
import * as dotenv from 'dotenv'

export const post = async (message: string): Promise<AxiosResponse<any>> => {
  dotenv.config()
  const headers = {
    'Content-Type': 'application/json'
  }
  return await axios.post(
    process.env.SLACK_WEBHOOK_URL!,
    { text: message },
    { headers: headers }
  )
}
