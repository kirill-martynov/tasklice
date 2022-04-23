const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core'),
      '@screens': path.resolve(__dirname, 'src/screens'),
    },
  },
};
