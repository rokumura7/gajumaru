import { args } from '../lib/util/Args';

type CrawlOption = {
  headless: boolean;
};

export const getCrawlOptions = (): CrawlOption => ({
  headless: !args().headful,
});
