// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

export const aliases = {
  '@core': path.resolve(__dirname, '../src/core'),
  '@tasks': path.resolve(__dirname, '../src/tasks'),
  '@screens': path.resolve(__dirname, '../src/screens'),
};
