import { Args } from "../util/args";
import { Crawler } from "./crawler";
import YurindoCrawler from "./1/yurindo_crawler";

export default (launchOpt: Args): Crawler => {
  switch (launchOpt.crawler) {
    case 1:
      return new YurindoCrawler(launchOpt);
    default:
      throw new Error("Unknown crawler: " + launchOpt.crawler);
  }
};
