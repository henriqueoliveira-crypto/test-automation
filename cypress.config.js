const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/',
    // Allow cross-origin navigation for OAuth flows
    chromeWebSecurity: false,
    // Enable experimental features for better OAuth handling
    experimentalSessionAndOrigin: true,
    // Don't modify obstructive code that might interfere with OAuth
    modifyObstructiveCode: false,
    // Increase default command timeout for OAuth redirects
    defaultCommandTimeout: 10000,
    // Increase page load timeout for OAuth flows
    pageLoadTimeout: 60000,
  },
});
