# Playwright Test Automation POC

This directory contains the Playwright implementation of the test suite, created as a proof-of-concept to demonstrate that Playwright handles OAuth/MSAL authentication better than Cypress.

## Overview

This POC converts the entire Cypress test suite to Playwright, including:
- All API tests (6 test files)
- All UI tests (providerPortal.spec.js)
- Authentication flow with Microsoft OAuth/MSAL
- Page objects and fixtures

## Key Advantages Over Cypress

1. **Better OAuth Handling**: Playwright natively handles cross-origin navigation without special configuration
2. **Simpler Authentication**: No need for React Fiber traversal or complex click workarounds
3. **Real Browser Events**: Uses actual browser APIs, making MSAL integration more reliable
4. **Better API Testing**: Request context automatically handles authentication cookies
5. **Cleaner Code**: Less workarounds and more straightforward test syntax

## Installation

```bash
# Install Playwright
npm install

# Install Playwright browsers
npm run playwright:install
```

## Running Tests

```bash
# Run all tests
npm run playwright:test

# Run UI tests only
npm run playwright:test:ui

# Run API tests only
npm run playwright:test:api

# Open Playwright UI mode (interactive)
npm run playwright:ui

# Show test report
npm run playwright:report
```

## Project Structure

```
playwright/
├── .auth/
│   └── user.json              # Generated authentication state (from global-setup)
├── e2e/
│   ├── auth.spec.js           # Authentication test
│   ├── api/                   # API tests
│   │   ├── analytics-api.spec.js
│   │   ├── api-basic-info.spec.js
│   │   ├── form-api.spec.js
│   │   ├── health-api.spec.js
│   │   ├── packet-api.spec.js
│   │   └── user-api.spec.js
│   └── ui/                    # UI tests
│       └── providerPortal.spec.js
├── support/
│   ├── auth.js                # Authentication helper
│   ├── api-helpers.js         # API request utilities
│   └── pageObjects/           # Page object models
│       ├── providerPortalPage.js
│       ├── basicInfoPage.js
│       ├── contactInfoPage.js
│       ├── incomePage.js
│       ├── jobInfoPage.js
│       ├── loanAmountPage.js
│       ├── loanTypePage.js
│       └── patientPage.js
└── fixtures/                   # Test data
    ├── form_data.json
    ├── packet_insertion.json
    └── test-data.json
```

## Authentication

Authentication is handled via `global-setup.js`, which:
1. Launches a browser
2. Performs Microsoft OAuth login
3. Saves authentication state to `playwright/.auth/user.json`
4. All tests reuse this state automatically

The authentication flow:
- Navigates to the application
- Clicks "Sign In with Microsoft" button
- Waits for Microsoft OAuth page
- Fills in credentials
- Handles redirects back to the application
- Saves cookies and session state

## Conversion Patterns: Cypress → Playwright

| Cypress | Playwright |
|---------|------------|
| `cy.visit()` | `page.goto()` |
| `cy.get()` | `page.locator()` |
| `cy.contains()` | `page.getByText()` or `page.locator().filter({ hasText })` |
| `cy.click()` | `page.click()` or `locator.click()` |
| `cy.type()` | `page.fill()` or `locator.fill()` |
| `cy.request()` | `request.get()` / `request.post()` etc. |
| `cy.fixture()` | `fs.readFileSync()` or `import` |
| `cy.url().should()` | `expect(page.url()).toContain()` |
| `cy.wait()` | `page.waitForTimeout()` or `page.waitForURL()` |
| `cy.session()` | `global-setup.js` with `storageState` |
| `beforeEach()` | `test.beforeEach()` |
| `describe()` | `test.describe()` |
| `it()` | `test()` |

## Configuration

The `playwright.config.js` file contains:
- Base URL configuration
- Browser settings
- Global setup for authentication
- Timeout settings (60s for OAuth flows)
- Screenshot/video on failure
- Test match patterns

## Test Tags

Tests are tagged for easy filtering:
- `@ui` - UI tests
- `@api` - API tests

Run specific test types:
```bash
npm run playwright:test:ui    # Only UI tests
npm run playwright:test:api   # Only API tests
```

## Comparison with Cypress

### Authentication Flow

**Cypress (Problematic)**:
- Required `chromeWebSecurity: false`
- Needed React Fiber traversal to trigger button clicks
- Complex async/sync code separation
- Manual OAuth URL construction as fallback
- Multiple click method attempts

**Playwright (Simple)**:
- Native cross-origin support
- Simple button click: `page.getByRole('button', { name: /Sign In/i }).click()`
- Automatic redirect handling
- Clean async/await syntax
- No workarounds needed

### Code Example

**Cypress**:
```javascript
cy.contains('button', 'Sign In with Microsoft')
  .then(($button) => {
    // Complex React Fiber traversal
    const reactKey = Object.keys(button).find(key => key.startsWith('__reactFiber'));
    // ... many lines of code ...
  })
  .click({ force: false });
```

**Playwright**:
```javascript
await page.getByRole('button', { name: /Sign In with Microsoft/i }).click();
// That's it!
```

## Troubleshooting

### Authentication Fails

If authentication fails during global setup:
1. Check credentials in `playwright/support/auth.js`
2. Verify the application URL is correct
3. Check network connectivity
4. Review browser console for errors

### Tests Timeout

If tests timeout:
1. Increase timeout in `playwright.config.js`
2. Check if the application is accessible
3. Verify authentication state is valid

### API Tests Fail

If API tests fail:
1. Verify authentication state includes necessary cookies
2. Check if API endpoints require authentication
3. Review request/response in test output

## Next Steps

1. **Run the POC**: Execute all tests to verify they work
2. **Compare Results**: Compare test execution time and reliability with Cypress
3. **Evaluate**: Determine if Playwright should replace Cypress
4. **Migrate**: If successful, consider full migration

## Notes

- This POC runs alongside Cypress - both can coexist
- Authentication state is cached in `playwright/.auth/user.json`
- All fixtures are shared with Cypress tests
- Page objects use the same selectors as Cypress version

