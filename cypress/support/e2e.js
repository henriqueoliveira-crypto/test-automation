// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Global beforeEach hook to authenticate before every test
// This ensures all tests have a valid session
beforeEach(() => {
  // Use the non-MFA login command to create a session before each test
  cy.loginNonMFA();
});
