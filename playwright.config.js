const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './playwright/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 60000,
  
  use: {
    baseURL: 'https://rha-pacenet-portal-stage-e4hheqgbh0e7gthf.eastus2-01.azurewebsites.net/employee',
    //https://rha-pacenet-portal-dev-dqafcdhsb9fjgvc0.eastus2-01.azurewebsites.net/
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on', // Record video for all tests (including successful ones)
    actionTimeout: 10000,
    navigationTimeout: 60000,
    // Reuse authentication state from global setup
    storageState: 'playwright/.auth/user.json',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'api-tests',
      testMatch: /.*\.api\.spec\.js/,
      use: {
        baseURL: 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net',
        storageState: 'playwright/.auth/user.json',
      },
    },
  ],

  globalSetup: require.resolve('./playwright/global-setup.js'),
});

