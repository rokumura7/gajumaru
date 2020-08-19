import yargs from "yargs";

export interface Args {
  slack: boolean;
  crawler: number;
}

export const args = (): Args =>
  yargs.options({
    slack: { alias: "s", type: "boolean", default: true },
    crawler: { alias: "c", type: "number", demandOption: true },
  }).argv;
