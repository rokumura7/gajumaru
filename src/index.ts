import { args } from './util/args';
import launcher from './crawlers/launcher';

(async () => {
  try {
    const launchOpts = args();
    const crawler = launcher(launchOpts);
    await crawler.run();
  } catch (error) {
    console.log(error);
    process.exit();
  }
})();
