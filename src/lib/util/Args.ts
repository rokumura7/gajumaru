import yargs from 'yargs';

export interface Args {
  slack: boolean;
  headful: boolean;
}

export const args = (): Args =>
  yargs.options({
    slack: { alias: 's', type: 'boolean', default: false },
    headful: { alias: 'h', type: 'boolean', default: false },
  }).argv;
