import { args } from '../lib/util/Args';

type CrawlOption = {
  headless: boolean;
};

export const getCrawlOptions = (): CrawlOption => {
  const opt = {
    headless: !args().headful,
    slowMotion: args().slowMotion,
  };
  return opt;
};
