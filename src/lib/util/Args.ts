import yargs from 'yargs';

export interface Args {
  slack: boolean;
  headful: boolean;
  slowMotion: number;
}

export const args = (): Args =>
  yargs.options({
    slack: { alias: 's', type: 'boolean', default: false },
    headful: { alias: 'h', type: 'boolean', default: false },
    slowMotion: { alias: 's', type: 'number', default: 0 },
  }).argv;
