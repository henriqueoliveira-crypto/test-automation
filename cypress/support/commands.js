// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { basicInfoPage } from '../support/pageObjects/basicInfoPage'
import { contactInfoPage } from '../support/pageObjects/contactInfoPage'
import { jobInfoPage } from '../support/pageObjects/jobInfoPage'
import { incomePage } from '../support/pageObjects/incomePage'
import { loanTypePage } from '../support/pageObjects/loanTypePage'
import { loanAmountPage } from '../support/pageObjects/loanAmountPage'
import { providerPortalPage } from '../support/pageObjects/providerPortalPage'

Cypress.Commands.add('clickOnBackButton', () => {
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
})

Cypress.Commands.add('deletePacket', () => {
  cy.get('[aria-label="Delete packet"]').click({force:true})
  cy.contains('Confirm').click({force:true})
})

Cypress.Commands.add('fillBasicInfoPage', () => {
  cy.get(basicInfoPage.firstNameField).clear().type('John Doe')
  cy.get(basicInfoPage.lastNameField).clear().type('123456')
  cy.get(basicInfoPage.emailAdressField).clear().type('user@example.com')
  cy.get(basicInfoPage.dateOfBirthCalendarButton).click()
  cy.get(basicInfoPage.dateSelectedButton).click()
  cy.get('[aria-hidden="true"]').then(($el) => {
    if ($el.is(':visible')) {
      cy.contains('Spanish').click().click()
    } else {
      cy.contains('Spanish').click()
      cy.contains('Chinese').click()
    }
})
  cy.get(basicInfoPage.nextButton).click()
});

Cypress.Commands.add('fillContactInfoPage', () => {
  cy.get(contactInfoPage.contactMethodOption).click()
  cy.get(contactInfoPage.emailDropdownOption).click()
  cy.get(contactInfoPage.emailField).clear().type('user@example.com')
  cy.get('body').click(0, 0)
  cy.get(contactInfoPage.nextButton).click()
});

Cypress.Commands.add('fillJobInfoPage', () => {
  cy.get(jobInfoPage.employerName).clear().type('John')
  cy.get(jobInfoPage.jobTitle).clear().type('Engineer')
  cy.get(jobInfoPage.employmentStatusDropdown).click()
  cy.get(jobInfoPage.fullTimeOption).click().type('{downarrow}{enter}')
  cy.get(jobInfoPage.nextButton).click()
});

Cypress.Commands.add('fillIncomePage', () => {
  cy.get(incomePage.annualIncome).clear().type('222000')
  cy.get(incomePage.hasBonus).click()
  cy.get(incomePage.yesOption).click()
  cy.get(incomePage.bonusAmmountField).clear().type('222000')
  cy.contains('Next').click()
});

Cypress.Commands.add('fillLoanTypePage', () => {
  cy.get(loanTypePage.loanType).click()
  cy.get(loanTypePage.personalLoanType).click()
  cy.get(loanTypePage.loanPurposeField).type('Test')
  cy.contains('Vehicle').click()
  // cy.get('[aria-hidden="true"]').then(($el) => {
  //     if ($el.is(':visible')) {
  //       cy.contains('Vehicle').click().click()
  //     } else {
  //       cy.contains('Vehicle').click()
  //     }})
  cy.contains('Next').click()
});

Cypress.Commands.add('fillLoanAmountPage', () => {
  cy.get(loanAmountPage.loanAmountRequested).type('55')
  cy.get(loanAmountPage.loanTerm).type('5')
  cy.contains('Finish').click()
});

Cypress.Commands.add('assignNewPacket', () => {
  cy.contains('Access Provider Portal').click();
  cy.contains('EHR integration').should('exist');
  cy.contains('Assign New Packet').click();
  cy.fixture('packet_insertion').then((data) => {
    const packetId = data.packetId;
    cy.contains('Packet Title').click({force:true}).type(packetId);
  }
  );
  cy.get(providerPortalPage.assigningPacketFormUserField).type('{enter}')
  cy.contains('Treatment Plan').click();
  cy.contains('Assign Packet').click();
});

/**
 * Custom command to handle Microsoft OAuth login with manual approval
 * This command:
 * 1. Waits for the page to load and JavaScript to initialize
 * 2. Finds the "Sign In with Microsoft" button and verifies it's visible and enabled
 * 3. Scrolls the button into view to ensure it's clickable
 * 4. Clicks the button with error handling and fallback strategies
 * 5. Waits for redirect to Microsoft OAuth page
 * 6. Pauses to allow manual authentication
 * 7. Waits for redirect back to the application
 * 8. Verifies successful login
 * 
 * Features:
 * - Robust button selection targeting button elements specifically
 * - Waits for button to be fully interactive before clicking
 * - Scrolls button into view to prevent click failures
 * - Fallback force-click strategy if initial click doesn't work
 * - Comprehensive logging for debugging
 * - Clear error messages if navigation fails
 * 
 * Usage: cy.login()
 * 
 * Note: This command uses cy.session() to cache authentication state
 * across tests, so you only need to authenticate once per test run.
 */
Cypress.Commands.add('login', () => {
  // Use cy.session() to cache authentication and avoid re-authenticating
  cy.session('microsoft-oauth', () => {
    // Visit the home page
    cy.visit('/');
    
    // Wait for page to fully load and JavaScript to initialize
    cy.wait(1000);
    
    // Find and click the "Sign In with Microsoft" button with improved reliability
    cy.log('Looking for Sign In with Microsoft button...');
    
    // First, wait for the button to exist and be visible
    cy.contains('button', 'Sign In with Microsoft', { timeout: 15000 })
      .should('exist')
      .should('be.visible')
      .as('signInButton');
    
    // Verify button is enabled and scroll into view
    cy.get('@signInButton')
      .should('not.be.disabled')
      .then(($button) => {
        cy.log('Button found and enabled. Scrolling into view...');
        // Scroll button into view to ensure it's clickable
        $button[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    
    // Wait a brief moment for any animations or overlays to clear after scrolling
    cy.wait(500);
    
    // Verify button is still visible and actionable before clicking
    cy.get('@signInButton')
      .should('be.visible')
      .should('not.be.disabled');
    
    // Store current URL to detect navigation using Cypress alias
    cy.url().as('initialUrl').then((url) => {
      cy.log(`Current URL before click: ${url}`);
    });
    
    // Attempt to click the button
    cy.log('Attempting to click Sign In with Microsoft button...');
    cy.get('@signInButton').click({ force: false });
    
    // Wait a moment to allow click to register and navigation to start
    cy.wait(2000);
    
    // Check if we've navigated away from the initial page and implement fallback if needed
    cy.get('@initialUrl').then((initialUrl) => {
      cy.url({ timeout: 10000 }).then((currentUrl) => {
        if (currentUrl === initialUrl) {
          cy.log('Warning: Still on same page after click. Button may not have triggered navigation.');
          cy.log('Attempting fallback: Force click on button...');
          
          // Fallback strategy: Try to find and force click the button again
          // This will only execute if the button still exists on the page
          cy.get('body').then(($body) => {
            // Check if button text exists in the body
            if ($body.text().includes('Sign In with Microsoft')) {
              cy.log('Button text found, attempting force click as fallback...');
              cy.contains('button', 'Sign In with Microsoft', { timeout: 5000 })
                .should('exist')
                .click({ force: true });
              cy.wait(3000);
            } else {
              cy.log('Button no longer found on page - navigation may have started in background');
            }
          });
        } else {
          cy.log(`✅ Navigation detected: ${currentUrl}`);
        }
      });
    });
    
    // Wait for navigation to Microsoft OAuth domain
    // This assertion will fail with a clear error if navigation doesn't happen
    cy.url({ timeout: 30000 }).should('satisfy', (url) => {
      const isMicrosoftUrl = url.includes('login.microsoftonline.com') || 
                            url.includes('microsoft.com') || 
                            url.includes('oauth2');
      
      if (isMicrosoftUrl) {
        cy.log(`✅ Successfully navigated to Microsoft OAuth: ${url}`);
      } else {
        cy.log(`❌ Error: Expected Microsoft OAuth URL but got: ${url}`);
        cy.log('The button click may not have worked. Please check:');
        cy.log('1. Button is visible and enabled');
        cy.log('2. No JavaScript errors in console');
        cy.log('3. Network requests are being made');
      }
      
      return isMicrosoftUrl;
    });
    
    // Pause here to allow manual authentication
    // User should complete the Microsoft login process manually
    cy.log('⏸️  PAUSED: Please complete Microsoft authentication manually');
    cy.log('After logging in, press the "Resume" button in Cypress to continue');
    cy.pause();
    
    // After manual authentication, wait for redirect back to application
    // The URL should change back to the application domain
    cy.url({ timeout: 60000 }).should('satisfy', (url) => {
      return url.includes('/provider-dashboard') || 
             url.includes('/provider') ||
             !url.includes('login.microsoftonline.com');
    });
    
    // Verify we're logged in by checking for provider portal elements
    cy.url({ timeout: 30000 }).should('include', '/provider');
    
    // Wait a bit for the page to fully load
    cy.wait(2000);
    
    cy.log('✅ Authentication completed successfully');
  }, {
    // Session options
    validate: () => {
      // Validate that we're still authenticated
      // Visit the provider page and check if we're logged in
      cy.visit('/provider');
      cy.url({ timeout: 10000 }).should('include', '/provider');
    },
    cacheAcrossSpecs: true, // Cache authentication across different test files
  });
  
  // After session is established or restored, visit the provider page
  cy.visit('/provider');
  
  // Verify we're on the provider portal
  cy.url({ timeout: 10000 }).should('include', '/provider');
});

/**
 * Custom command to handle Microsoft OAuth login for non-MFA users
 * This command automatically fills in credentials and completes the login flow
 * 
 * Usage: cy.loginNonMFA()
 * 
 * Note: This command uses cy.session() to cache authentication state
 * across tests, so you only need to authenticate once per test run.
 */
Cypress.Commands.add('loginNonMFA', () => {
  const username = 'svc-pacenet-test2@rhanet.org';
  const password = 'Badger123!';
  
  // Use cy.session() to cache authentication and avoid re-authenticating
  cy.session('microsoft-oauth-non-mfa', () => {
    // Visit the home page
    cy.visit('/');
    
    // Wait for page to fully load and JavaScript to initialize
    cy.wait(1000);
    
    // Find and click the "Sign In with Microsoft" button
    cy.log('Looking for Sign In with Microsoft button...');
    cy.contains('button', 'Sign In with Microsoft', { timeout: 15000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: false });
    
    // Wait for navigation to Microsoft OAuth domain
    cy.url({ timeout: 30000 }).should('satisfy', (url) => {
      return url.includes('login.microsoftonline.com') || 
             url.includes('microsoft.com') || 
             url.includes('oauth2');
    });
    
    cy.log('✅ Navigated to Microsoft login page');
    
    // Fill in the email/username field
    cy.get('input[type="email"], input[name="loginfmt"], input[id="i0116"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(username, { delay: 100 });
    
    // Click Next/Submit button
    cy.get('input[type="submit"], button[type="submit"], #idSIButton9', { timeout: 10000 })
      .should('be.visible')
      .click({ force: false });
    
    // Wait for password field to appear
    cy.get('input[type="password"], input[name="passwd"], input[id="i0118"]', { timeout: 15000 })
      .should('be.visible')
      .clear()
      .type(password, { delay: 100 });
    
    // Click Sign in button
    cy.get('input[type="submit"], button[type="submit"], #idSIButton9', { timeout: 10000 })
      .should('be.visible')
      .click({ force: false });
    
    // Handle "Stay signed in?" prompt if it appears
    cy.get('body').then(($body) => {
      if ($body.find('input[type="submit"][value*="Yes"], #idSIButton9, button:contains("Yes")').length > 0) {
        cy.log('Handling "Stay signed in?" prompt...');
        cy.get('input[type="submit"][value*="Yes"], #idSIButton9, button:contains("Yes")', { timeout: 10000 })
          .should('be.visible')
          .click({ force: false });
      }
    });
    
    // Wait for redirect back to application
    cy.url({ timeout: 60000 }).should('satisfy', (url) => {
      return url.includes('/provider-dashboard') || 
             url.includes('/provider') ||
             !url.includes('login.microsoftonline.com');
    });
    
    // Verify we're logged in by checking for provider portal elements
    cy.url({ timeout: 30000 }).should('include', '/provider');
    
    // Wait a bit for the page to fully load
    cy.wait(2000);
    
    cy.log('✅ Non-MFA authentication completed successfully');
  }, {
    // Session options
    validate: () => {
      // Validate that we're still authenticated
      // Visit the provider page and check if we're logged in
      cy.visit('/provider');
      cy.url({ timeout: 10000 }).should('include', '/provider');
    },
    cacheAcrossSpecs: true, // Cache authentication across different test files
  });
  
  // After session is established or restored, visit the provider page
  cy.visit('/provider');
  
  // Verify we're on the provider portal
  cy.url({ timeout: 10000 }).should('include', '/provider');
});

/**
 * Custom command to make authenticated API requests
 * This command automatically includes cookies from the authenticated session
 * 
 * Usage: cy.authenticatedRequest(options)
 * 
 * @param {Object} options - Request options (method, url, body, etc.)
 * @returns {Cypress.Chainable} - The request chainable
 */
Cypress.Commands.add('authenticatedRequest', (options) => {
  // Get cookies from the authenticated session
  return cy.getCookies().then((cookies) => {
    // Build cookie header
    const cookieHeader = cookies.map(c => `${c.name}=${c.value}`).join('; ');
    
    // Merge cookies into headers
    const headers = {
      ...options.headers,
      Cookie: cookieHeader,
    };
    
    // Make the request with authentication
    return cy.request({
      ...options,
      headers,
      failOnStatusCode: options.failOnStatusCode !== undefined ? options.failOnStatusCode : false,
    });
  });
});

/**
 * Helper to make a GET request to an API endpoint
 * 
 * Usage: cy.apiGet(endpoint, options)
 * @param {string} endpoint - API endpoint (e.g., '/api/users')
 * @param {Object} options - Additional request options
 */
Cypress.Commands.add('apiGet', (endpoint, options = {}) => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  return cy.authenticatedRequest({
    method: 'GET',
    url: `${baseUrl}${endpoint}`,
    failOnStatusCode: false,
    ...options,
  });
});

/**
 * Helper to make a POST request to an API endpoint
 * 
 * Usage: cy.apiPost(endpoint, body, options)
 * @param {string} endpoint - API endpoint
 * @param {Object} body - Request body
 * @param {Object} options - Additional request options
 */
Cypress.Commands.add('apiPost', (endpoint, body, options = {}) => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  return cy.authenticatedRequest({
    method: 'POST',
    url: `${baseUrl}${endpoint}`,
    body,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    failOnStatusCode: false,
    ...options,
  });
});

/**
 * Helper to make a PUT request to an API endpoint
 * 
 * Usage: cy.apiPut(endpoint, body, options)
 * @param {string} endpoint - API endpoint
 * @param {Object} body - Request body
 * @param {Object} options - Additional request options
 */
Cypress.Commands.add('apiPut', (endpoint, body, options = {}) => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  return cy.authenticatedRequest({
    method: 'PUT',
    url: `${baseUrl}${endpoint}`,
    body,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    failOnStatusCode: false,
    ...options,
  });
});

/**
 * Helper to make a DELETE request to an API endpoint
 * 
 * Usage: cy.apiDelete(endpoint, options)
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional request options
 */
Cypress.Commands.add('apiDelete', (endpoint, options = {}) => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  return cy.authenticatedRequest({
    method: 'DELETE',
    url: `${baseUrl}${endpoint}`,
    failOnStatusCode: false,
    ...options,
  });
});