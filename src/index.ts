import YurindoCrawler from "./crawlers/1/yurindo_crawler";

(async () => {
  const crawler = new YurindoCrawler();
  await crawler.run();
})();
