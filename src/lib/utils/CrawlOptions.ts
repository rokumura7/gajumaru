import { args } from './Args';

type CrawlOption = {
  headless: boolean;
  slowMotion: number;
};

export const getCrawlOptions = (): CrawlOption => {
  const opt = {
    headless: !args().headful,
    slowMotion: args().slowMotion,
  };
  return opt;
};
