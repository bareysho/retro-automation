const { defineConfig } = require('cypress');
const synpressPlugins = require('@synthetixio/synpress/plugins');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    baseUrl: 'https://app.uniswap.org/',
    specPattern: 'tests/e2e/specs',
    supportFile: 'tests/support/index.js',
    videosFolder: 'tests/e2e/videos',
    screenshotsFolder: 'tests/e2e/screenshots',
    video: true,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      synpressPlugins(on, config);
      return config
    },
  },
});
