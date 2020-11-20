import yargs from 'yargs';

export interface Args {
  notify: boolean;
  headful: boolean;
  slowMotion: number;
}

export const args = (): Args =>
  yargs.options({
    notify: { alias: 'n', type: 'boolean', default: false },
    headful: { alias: 'h', type: 'boolean', default: false },
    slowMotion: { alias: 's', type: 'number', default: 0 },
  }).argv;
