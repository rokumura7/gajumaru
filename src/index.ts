import { args } from "./util/args";
import launcher from "./crawlers/launcher";

(async () => {
  const launchOpts = args();
  const crawler = launcher(launchOpts);
  await crawler.run();
})();
