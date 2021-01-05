import axios, { AxiosResponse } from 'axios';
import mockAdapter from '../../mock/Http';

const client = axios.create({
  baseURL: 'http://0.0.0.0:8080/api/v1',
  adapter: mockAdapter,
});

export const post = async (
  uri: string,
  json: { [key: string]: string }
): Promise<AxiosResponse> => await client.post(uri, json);
