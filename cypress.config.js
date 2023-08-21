const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "defaultCommandTimeout": 10000,
    "viewportWidth": 1920,
    "viewportHeight": 1400,
    baseUrl: "https://shopkeeper.dev.cartos.solutions/",
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: true
  },
});
