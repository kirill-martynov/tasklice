const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@tasks': path.resolve(__dirname, 'src/tasks'),
      '@screens': path.resolve(__dirname, 'src/screens'),
    },
  },
};
