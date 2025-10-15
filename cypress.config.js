const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/patient'
  },
});
