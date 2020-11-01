import yargs from 'yargs';

export interface Args {
  slack: boolean;
}

export const args = (): Args =>
  yargs.options({
    slack: { alias: 's', type: 'boolean', default: false },
  }).argv;
