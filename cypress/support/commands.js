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
 * Custom command to handle Microsoft OAuth login for non-MFA users
 * This command automatically fills in credentials and completes the login flow
 * 
 * Credentials:
 * - Username: svc-pacenet-test2@rhanet.org
 * - Password: Badger123!
 * 
 * This command:
 * 1. Waits for the page to load and JavaScript to initialize
 * 2. Finds the "Sign In with Microsoft" button and verifies it's visible and enabled
 * 3. Clicks the button to navigate to Microsoft OAuth
 * 4. Automatically fills in email/username
 * 5. Automatically fills in password
 * 6. Handles "Stay signed in?" prompt if it appears
 * 7. Waits for redirect back to the application
 * 8. Verifies successful login
 * 
 * Usage: cy.login()
 * 
 * Note: This command uses cy.session() to cache authentication state
 * across tests, so you only need to authenticate once per test run.
 */
Cypress.Commands.add('login', () => {
  const username = 'svc-pacenet-test2@rhanet.org';
  const password = 'Badger123!';
  
  // Use cy.session() to cache authentication and avoid re-authenticating
  cy.session('microsoft-oauth', () => {
    cy.log('Starting Microsoft OAuth login flow...');
    
    // Strategy: Try multiple approaches in order
    // 1. Try button click with multiple methods
    // 2. If that fails, navigate directly to OAuth URL
    
    // Visit the home page first
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.wait(5000); // Wait for MSAL and React to initialize
    
    // Try to click the button first
    cy.log('Attempting to click Sign In button...');
    
    // Get the button and try multiple click methods
    cy.contains('button', 'Sign In with Microsoft', { timeout: 20000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.disabled')
      .scrollIntoView()
      .then(($button) => {
        const button = $button[0];
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return $button;
      })
      .trigger('mouseover')
      .wait(200)
      .click({ force: false });
    
    // Wait and check if navigation occurred
    cy.wait(3000);
    
    // Check URL
    cy.url().then((currentUrl) => {
      const isOAuthUrl = currentUrl.includes('login.microsoftonline.com') && currentUrl.includes('oauth2');
      return isOAuthUrl;
    })
    .then((isOAuthUrl) => {
      if (!isOAuthUrl) {
        cy.log('Button click did not work, trying React onClick handler...');
        
        // Try React onClick handler
        return cy.contains('button', 'Sign In with Microsoft', { timeout: 5000 })
          .should('exist')
          .then(($button) => {
            const button = $button[0];
            const reactKey = Object.keys(button).find(key => 
              key.startsWith('__reactFiber') || key.startsWith('__reactInternalInstance')
            );
            
            if (reactKey) {
              let reactFiber = button[reactKey];
              let depth = 0;
              const maxDepth = 30;
              
              while (reactFiber && depth < maxDepth) {
                if (reactFiber.memoizedProps?.onClick) {
                  try {
                    const syntheticEvent = {
                      preventDefault: () => {},
                      stopPropagation: () => {},
                      currentTarget: button,
                      target: button,
                      type: 'click',
                      bubbles: true,
                      cancelable: true,
                      nativeEvent: new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
                    };
                    reactFiber.memoizedProps.onClick(syntheticEvent);
                    return true;
                  } catch (e) {
                    // Continue
                  }
                }
                reactFiber = reactFiber.return;
                depth++;
              }
            }
            
            // Try native events
            ['mousedown', 'mouseup', 'click'].forEach(eventType => {
              button.dispatchEvent(new MouseEvent(eventType, { bubbles: true, cancelable: true }));
            });
            if (button.click) button.click();
            
            return false;
          });
      }
      return null;
    })
    .then((result) => {
      // Wait after trying React onClick
      if (result !== null) {
        cy.wait(3000);
      }
      
      // Check URL again
      return cy.url();
    })
    .then((currentUrl) => {
      const isOAuthUrl = currentUrl.includes('login.microsoftonline.com') && currentUrl.includes('oauth2');
      if (!isOAuthUrl) {
        cy.log('All click methods failed, navigating directly to OAuth URL...');
        
        // Navigate directly to OAuth URL as last resort
        // Based on the URL pattern from user's manual test
        const tenantId = '77567fba-7cef-44cb-b517-a6273f733405';
        const clientId = 'e516539e-b645-4f77-b90f-93fdd12dabe2';
        const redirectUri = encodeURIComponent('https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/auth/callback');
        const scope = encodeURIComponent('openid profile email offline_access');
        
        // Generate state and nonce (simplified)
        const state = btoa(JSON.stringify({ id: Date.now().toString() }));
        const nonce = btoa(Date.now().toString());
        
        const oauthUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?` +
          `client_id=${clientId}&` +
          `scope=${scope}&` +
          `redirect_uri=${redirectUri}&` +
          `response_type=code&` +
          `response_mode=fragment&` +
          `state=${encodeURIComponent(state)}&` +
          `nonce=${encodeURIComponent(nonce)}&` +
          `x-client-SKU=msal.js.browser&` +
          `x-client-VER=4.25.1`;
        
        cy.visit(oauthUrl, { failOnStatusCode: false });
      }
    });
    
    // Wait for navigation to OAuth
    cy.wait(2000);
    
    // Wait for navigation to Microsoft OAuth domain
    cy.url({ timeout: 30000 }).should('satisfy', (url) => {
      const isOAuthUrl = url.includes('login.microsoftonline.com') && url.includes('oauth2');
      if (isOAuthUrl) {
        cy.log('✅ Successfully navigated to Microsoft OAuth:', url);
      }
      return isOAuthUrl;
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
    
    // After clicking sign in, Microsoft will redirect back to our app
    // The redirect_uri is /auth/callback according to the OAuth URL
    cy.log('Waiting for redirect back to application...');
    
    // Wait for redirect to /auth/callback (the redirect_uri from MSAL)
    cy.url({ timeout: 60000 }).should('satisfy', (url) => {
      // Check if we're back on our application domain
      const isOurDomain = url.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
      const isMicrosoftDomain = url.includes('login.microsoftonline.com') || 
                                url.includes('login.live.com');
      
      if (isMicrosoftDomain) {
        cy.log('Still on Microsoft domain, waiting for redirect...');
        return false;
      }
      
      if (isOurDomain) {
        cy.log('Redirected back to application:', url);
        return true;
      }
      
      return false;
    });
    
    // The redirect should go to /auth/callback, then the app should redirect to the intended page
    cy.url({ timeout: 30000 }).should('satisfy', (url) => {
      return url.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
    });
    
    // Wait for the callback to process and redirect to the final destination
    cy.wait(3000);
    
    // Check if we're on /auth/callback or if we've been redirected further
    cy.url().then((currentUrl) => {
      if (currentUrl.includes('/auth/callback')) {
        cy.log('On /auth/callback, waiting for app to process and redirect...');
        // Wait for the app to process the callback and redirect
        cy.url({ timeout: 30000 }).should('satisfy', (url) => {
          return !url.includes('/auth/callback') || url.includes('/provider');
        });
      }
    });
    
    // Wait for the page to fully load and cookies to be set
    cy.wait(3000);
    
    // Verify cookies are set (important for session persistence)
    cy.getCookies().then((cookies) => {
      cy.log(`✅ Authentication cookies set: ${cookies.length} cookies found`);
      cookies.forEach(cookie => {
        cy.log(`  - ${cookie.name}: ${cookie.domain}`);
      });
      if (cookies.length === 0) {
        cy.log('⚠️ Warning: No cookies found after authentication - session may not persist');
      }
    });
    
    // Navigate to provider page if we're not already there
    cy.url().then((currentUrl) => {
      if (!currentUrl.includes('/provider')) {
        cy.log('Navigating to provider page...');
        cy.visit('/provider');
      }
    });
    
    // Verify we're logged in by checking for provider portal
    cy.url({ timeout: 30000 }).should('include', '/provider');
    
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
    // Azure App Service OAuth endpoint is at the root, not under /employee/
    // We need to use the full URL to access the root-level auth endpoint
    cy.log('Navigating directly to Microsoft OAuth endpoint...');
    
    // Get the base URL without the /employee/ path
    const baseUrlWithoutPath = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';
    const redirectUrl = '/employee/provider';
    
    // Navigate to the root-level OAuth endpoint
    cy.visit(`${baseUrlWithoutPath}/.auth/login/microsoft?post_login_redirect_url=${encodeURIComponent(redirectUrl)}`, {
      failOnStatusCode: false // Don't fail on 404, let it redirect
    });
    
    // Wait a moment for the redirect to initiate
    cy.wait(2000);
    
    // Wait for navigation to Microsoft OAuth domain
    cy.url({ timeout: 30000 }).should('satisfy', (url) => {
      return url.includes('login.microsoftonline.com') || 
             url.includes('microsoft.com') || 
             url.includes('oauth2') ||
             url.includes('login.live.com');
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