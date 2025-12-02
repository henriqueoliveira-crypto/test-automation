# Playwright Test Automation Documentation

## 1. Overview

### 1.1 Purpose

This document provides comprehensive documentation for the Playwright test automation framework, covering execution instructions, project structure, test scenarios, troubleshooting, and best practices.

### 1.2 Scope

- API Testing: Packet, User, Form, Analytics, and Health endpoints
- UI Testing: Provider Portal page functionality
- Authentication: Microsoft OAuth/MSAL authentication flow
- Test Coverage: Positive, negative, and edge case scenarios

### 1.3 Test Environment

- Base URL: `https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/`
- Authentication: Non-MFA user (svc-pacenet-test2@rhanet.org)
- Test Framework: Playwright
- Test Execution: Automated via Playwright test runner

---

## 2. Installation and Setup

### 2.1 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Access to the test environment

### 2.2 Installation Steps

```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run playwright:install
```

### 2.3 Configuration

- Configuration file: `playwright.config.js`
- Authentication credentials: `playwright/support/auth.js`
- Test data fixtures: `playwright/fixtures/`

---

## 3. Project Structure

### 3.1 Directory Layout

```
test-automation-poc/
├── playwright/
│   ├── .auth/
│   │   └── user.json              # Generated authentication state
│   ├── e2e/
│   │   ├── auth.spec.js           # Authentication test
│   │   ├── api/                   # API test files
│   │   │   ├── analytics-api.spec.js
│   │   │   ├── api-basic-info.spec.js
│   │   │   ├── form-api.spec.js
│   │   │   ├── health-api.spec.js
│   │   │   ├── packet-api.spec.js
│   │   │   └── user-api.spec.js
│   │   └── ui/                    # UI test files
│   │       └── providerPortal.spec.js
│   ├── fixtures/                  # Test data
│   │   ├── form_data.json
│   │   ├── packet_insertion.json
│   │   └── test-data.json
│   ├── global-setup.js            # Global authentication setup
│   ├── support/
│   │   ├── auth.js                # Authentication helper
│   │   ├── api-helpers.js         # API request utilities
│   │   ├── api-test-helpers.js    # API test helpers (safeJsonParse, handleAuthError)
│   │   └── pageObjects/           # Page Object Models
│   │       ├── providerPortalPage.js
│   │       ├── basicInfoPage.js
│   │       ├── contactInfoPage.js
│   │       ├── incomePage.js
│   │       ├── jobInfoPage.js
│   │       ├── loanAmountPage.js
│   │       ├── loanTypePage.js
│   │       └── patientPage.js
│   └── README.md                  # Quick reference guide
├── playwright.config.js           # Playwright configuration
└── package.json                   # npm scripts and dependencies
```

### 3.2 Key Files

- **playwright.config.js**: Main configuration (baseURL, timeouts, projects, globalSetup)
- **global-setup.js**: Runs once before all tests to authenticate and save session state
- **support/auth.js**: Microsoft OAuth login implementation with Next button handling
- **support/api-test-helpers.js**: Helper functions for API tests (safeJsonParse, handleAuthError)

---

## 4. Test Execution

### 4.1 Execution Commands

#### Run All Tests

```bash
npm run playwright:test
```

#### Run Tests in Headed Mode (Visible Browser)

```bash
npm run playwright:test:headed
```

#### Run UI Tests Only

```bash
npm run playwright:test:ui
```

#### Run API Tests Only

```bash
npm run playwright:test:api
```

#### Interactive UI Mode (Recommended for Development)

```bash
npm run playwright:ui
```

Opens Playwright's interactive test runner with:

- Live browser view
- Step-by-step execution
- Time travel debugging
- Test filtering

#### Debug Mode

```bash
npm run playwright:debug
```

Opens Playwright Inspector for step-by-step debugging

#### View Test Report

```bash
npm run playwright:report
```

Opens HTML test report in browser

### 4.2 Execution Flow

1. **Global Setup**: `global-setup.js` runs once before all tests

   - Launches browser
   - Performs Microsoft OAuth login
   - Saves authentication state to `playwright/.auth/user.json`

2. **Test Execution**: Each test suite runs with shared authentication state
3. **Test Isolation**: Each test is independent and can run standalone
4. **Session Reuse**: Authentication state is reused across all tests

### 4.3 Test Filtering

#### By Tag

```bash
# Run only UI tests
npx playwright test --grep @ui

# Run only API tests
npx playwright test --grep @api
```

#### By File

```bash
# Run specific test file
npx playwright test playwright/e2e/api/packet-api.spec.js

# Run all tests in a directory
npx playwright test playwright/e2e/api/
```

#### By Test Name

```bash
# Run tests matching pattern
npx playwright test --grep "Get packet"
```

---

## 5. Test Scenarios

### 5.1 API Tests

#### 5.1.1 Packet API Tests

- **Get Packet**: Valid/invalid external ID, missing parameters
- **Update Packet**: Valid data, invalid packetId, invalid data types
- **Get All Packets**: Without filters, filtered by status, invalid status
- **Create Packet**: Valid data, missing required fields, invalid references
- **Delete Packet**: Valid packetId, invalid packetId, already deleted

#### 5.1.2 User API Tests

- **Get Users**: Without filters, filtered by costCenterIds, search query, combinations
- **Get User**: Valid userId, invalid userId, missing parameter, unauthorized access

#### 5.1.3 Form API Tests

- **Get Form Types**: All form types, response structure validation
- **Get All Forms**: All forms, response structure validation

#### 5.1.4 Analytics API Tests

- **Get Analytics**: Analytics data, nested structure validation

#### 5.1.5 Health API Tests

- **Get Health Status**: Database connected, database disconnected

### 5.2 UI Tests

#### 5.2.1 Authentication

- Login as provider: Successfully authenticates and redirects to /provider

#### 5.2.2 Navigation

- Display provider portal title and description
- Switch between tabs (Patient Management, Form Templates, Analytics, Settings)
- Breadcrumb returns to patient landing page

#### 5.2.3 Patient Management

- Patient search functionality
- Patient list display
- Assign packet modal validation
- Patient packets modal
- Packet actions (copy URL, open, delete)

#### 5.2.4 Analytics Tab

- Navigate to Analytics tab and display content

#### 5.2.5 Settings Tab

- Navigate to Settings tab and display health check
- Display health check status indicator

---

## 6. Authentication

### 6.1 Authentication Flow

Authentication is handled via `global-setup.js` which:

1. Launches a browser instance
2. Navigates to the application base URL
3. Clicks "Sign In with Microsoft" button
4. Waits for Microsoft OAuth page
5. Fills in email credentials
6. Clicks Next button
7. Fills in password
8. Clicks Sign in button
9. Handles "Next" button prompts if they appear
10. Handles security registration page (clicks Skip buttons)
11. Waits for redirect back to application
12. Navigates to `/provider` portal
13. Saves authentication state (cookies, localStorage) to `playwright/.auth/user.json`

### 6.2 Authentication State Reuse

- All tests automatically use the saved authentication state
- No need to authenticate in each test
- State is cached until explicitly cleared
- If authentication fails, delete `playwright/.auth/user.json` and re-run

### 6.3 Authentication Helper Functions

- **`clickNextButton(page, timeout)`**: Helper function to click Next button when prompted
  - Supports English ("Next") and Portuguese ("Próximo")
  - Tries multiple selectors
  - Returns true if clicked, false otherwise

---

## 7. Test Data Management

### 7.1 Test Fixtures

- **`packet_insertion.json`**: Contains test packet IDs
- **`form_data.json`**: Contains form data for updates
- **`test-data.json`**: Contains HTTP status codes, invalid IDs, and test constants

### 7.2 Test Data Strategy

- Use fixtures for consistent test data
- Generate dynamic data where needed (e.g., timestamps)
- Use invalid IDs (999999) for negative testing
- Use real data from fixtures for positive testing

### 7.3 Loading Fixtures

```javascript
const fs = require('fs');
const path = require('path');

test.beforeAll(() => {
  const testDataPath = path.join(__dirname, '../../fixtures/test-data.json');
  const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
});
```

---

## 8. Configuration

### 8.1 Playwright Configuration (`playwright.config.js`)

#### Key Settings

- **testDir**: `./playwright/e2e` - Test files location
- **baseURL**: Application base URL
- **storageState**: `playwright/.auth/user.json` - Authentication state file
- **timeouts**: 
  - `actionTimeout`: 10000ms
  - `navigationTimeout`: 60000ms (for OAuth flows)
- **reporter**: HTML reporter
- **trace**: `on-first-retry` - Trace on first retry
- **screenshot**: `only-on-failure` - Screenshots on failures
- **video**: `retain-on-failure` - Videos on failures

#### Projects

- **chromium**: Main project for UI tests
- **api-tests**: Separate project for API tests with different baseURL

#### Global Setup

- **globalSetup**: `./playwright/global-setup.js` - Runs authentication before all tests

### 8.2 Environment Variables

Currently not used, but can be configured via:

```bash
BASE_URL=https://example.com npm run playwright:test
```

---

## 9. Best Practices

### 9.1 Test Organization

- Group related tests using `test.describe()`
- Use descriptive test names
- Tag tests with `@ui` or `@api` for filtering
- Keep tests independent and isolated

### 9.2 Page Object Model

- Use Page Objects for UI tests (`support/pageObjects/`)
- Centralize selectors in Page Objects
- Keep Page Objects focused on single pages/components

### 9.3 API Testing

- Use `request` context for API calls
- Use `safeJsonParse()` helper for parsing responses
- Use `handleAuthError()` helper for 401 errors
- Verify response status codes
- Validate response structure

### 9.4 Error Handling

- Use try-catch for expected errors
- Use `handleAuthError()` for authentication failures
- Use `safeJsonParse()` for non-JSON responses
- Take screenshots on failures (automatic)

### 9.5 Waiting Strategies

- Use `page.waitForLoadState('networkidle')` for page loads
- Use `page.waitForURL()` for navigation
- Use `locator.waitFor()` for element visibility
- Avoid `page.waitForTimeout()` unless necessary

### 9.6 Locators

- Prefer role-based locators: `page.getByRole('button', { name: 'Submit' })`
- Use text locators: `page.getByText('Submit')`
- Use CSS selectors as fallback: `page.locator('.submit-btn')`
- Avoid XPath when possible

---

## 10. Troubleshooting

### 10.1 Authentication Issues

#### Problem: Authentication fails during global setup

**Solutions:**

1. Check credentials in `playwright/support/auth.js`
2. Verify the application URL is correct in `playwright.config.js`
3. Check network connectivity
4. Delete `playwright/.auth/user.json` and re-run
5. Review browser console for errors
6. Check if Microsoft login page structure changed

#### Problem: Tests fail with 401 Unauthorized

**Solutions:**

1. Verify authentication state file exists: `playwright/.auth/user.json`
2. Delete authentication state and re-run global setup
3. Check if session expired (may need to re-authenticate)
4. Verify cookies are being saved correctly

### 10.2 Test Execution Issues

#### Problem: Tests timeout

**Solutions:**

1. Increase timeout in `playwright.config.js`
2. Check if the application is accessible
3. Verify authentication state is valid
4. Check network connectivity
5. Review test logs for specific timeout location

#### Problem: Element not found

**Solutions:**

1. Increase wait timeout for the element
2. Verify selector is correct
3. Check if element is in iframe (use `frame.locator()`)
4. Wait for page to fully load before interacting
5. Use `page.waitForLoadState('networkidle')`

#### Problem: Tests are flaky

**Solutions:**

1. Add explicit waits for dynamic content
2. Use `waitForLoadState('networkidle')` after navigation
3. Wait for specific elements instead of fixed timeouts
4. Check for race conditions in test logic
5. Review test isolation

### 10.3 API Test Issues

#### Problem: API tests return 401

**Solutions:**

1. Verify authentication state includes necessary cookies
2. Check if API endpoints require authentication
3. Verify `storageState` is being used in API test project
4. Check if cookies are domain-specific

#### Problem: API tests fail to parse JSON

**Solutions:**

1. Use `safeJsonParse()` helper instead of `response.json()`
2. Check if response is actually JSON (may be HTML error page)
3. Verify content-type header
4. Handle non-JSON responses gracefully

### 10.4 UI Test Issues

#### Problem: Tab navigation fails

**Solutions:**

1. Use `navigateToTab()` helper function
2. Wait for page to fully load before navigating
3. Check if tab is already selected
4. Verify tab selectors are correct

#### Problem: Modal doesn't open

**Solutions:**

1. Wait for button to be visible before clicking
2. Use `scrollIntoViewIfNeeded()` for buttons
3. Check if modal is already open
4. Verify modal selectors in Page Object

### 10.5 Debugging Tips

#### Enable Debug Mode

```bash
npm run playwright:debug
```

#### Run Single Test

```bash
npx playwright test playwright/e2e/api/packet-api.spec.js -g "TC01"
```

#### View Screenshots

Screenshots are saved to `test-results/` directory on failure

#### View Videos

Videos are saved to `test-results/` directory on failure

#### View Traces

Traces are saved when tests retry. View with:

```bash
npx playwright show-trace trace.zip
```

---

## 11. Migration from Cypress

### 11.1 Key Differences

| Aspect | Cypress | Playwright |
|--------|---------|------------|
| Cross-origin | Requires `chromeWebSecurity: false` | Native support |
| Authentication | Complex React Fiber traversal | Simple button click |
| API Testing | `cy.request()` | `request.get()` / `request.post()` |
| Session Management | `cy.session()` | `global-setup.js` + `storageState` |
| Selectors | `cy.get()` | `page.locator()` or `page.getByRole()` |
| Navigation | `cy.visit()` | `page.goto()` |
| Waiting | `cy.wait()` | `page.waitForLoadState()` / `page.waitForURL()` |

### 11.2 Code Conversion Examples

#### Authentication

**Cypress:**

```javascript
cy.contains('button', 'Sign In with Microsoft')
  .then(($button) => {
    // Complex React Fiber traversal
    const reactKey = Object.keys(button).find(key => key.startsWith('__reactFiber'));
    // ... many lines of code ...
  })
  .click({ force: false });
```

**Playwright:**

```javascript
await page.getByRole('button', { name: /Sign In with Microsoft/i }).click();
```

#### API Request

**Cypress:**

```javascript
cy.request({
  method: 'GET',
  url: '/api/packet/123',
  headers: { /* ... */ }
}).then((response) => {
  expect(response.status).to.eq(200);
});
```

**Playwright:**

```javascript
const response = await request.get(`${BASE_URL}/api/packet/123`);
expect(response.status()).toBe(200);
const body = await safeJsonParse(response);
```

#### Element Interaction

**Cypress:**

```javascript
cy.get('input[name="email"]').type('user@example.com');
cy.get('button[type="submit"]').click();
```

**Playwright:**

```javascript
await page.locator('input[name="email"]').fill('user@example.com');
await page.getByRole('button', { name: 'Submit' }).click();
```

### 11.3 Advantages of Playwright

1. **Better OAuth Handling**: Native cross-origin support
2. **Simpler Authentication**: No React workarounds needed
3. **Real Browser Events**: Uses actual browser APIs
4. **Better API Testing**: Request context handles cookies automatically
5. **Cleaner Code**: Less workarounds, more straightforward syntax
6. **Better Debugging**: Interactive UI mode and Inspector
7. **Multi-browser Support**: Chromium, Firefox, WebKit

---

## 12. Test Coverage Summary

### 12.1 API Coverage

- **Packet API**: 18 test cases (Get, Update, List, Create, Delete)
- **User API**: 9 test cases (Get Users, Get User)
- **Form API**: 4 test cases (Get Form Types, Get Forms)
- **Analytics API**: 2 test cases (Get Analytics)
- **Health API**: 2 test cases (Health Check)

**Total API Test Cases**: 35

### 12.2 UI Coverage

- **Authentication**: 1 test case
- **Navigation**: 3 test cases
- **Patient Management**: Multiple test cases
- **Analytics Tab**: 1 test case
- **Settings Tab**: 2 test cases

**Total UI Test Cases**: 40+

### 12.3 Overall Coverage

- **Total Test Cases**: 75+
- **High Priority**: 25+
- **Medium Priority**: 30+
- **Low Priority**: 20+

---

## 13. Helper Functions and Utilities

### 13.1 Authentication Helpers

- **`login(page)`**: Performs complete Microsoft OAuth login flow
- **`clickNextButton(page, timeout)`**: Clicks Next button when prompted

### 13.2 API Test Helpers

- **`safeJsonParse(response)`**: Safely parses JSON responses, returns null if not JSON
- **`handleAuthError(response, testInfo)`**: Handles 401 errors by skipping test

### 13.3 UI Helpers

- **`navigateToTab(page, tabName)`**: Navigates to a specific tab with error handling

### 13.4 Page Objects

Located in `playwright/support/pageObjects/`:

- **providerPortalPage.js**: Provider portal selectors
- **patientPage.js**: Patient page selectors
- Other page objects for form pages

---

## 14. Continuous Integration

### 14.1 CI Configuration

Playwright can be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Install Playwright
  run: npm run playwright:install

- name: Run Playwright tests
  run: npm run playwright:test
```

### 14.2 CI Best Practices

- Use `--workers=1` for CI environments
- Enable retries: `retries: 2` in config
- Generate HTML reports
- Upload test results and artifacts

---

## 15. Maintenance

### 15.1 Regular Maintenance Tasks

- Review and update test cases when API changes
- Update Page Objects when UI changes
- Maintain test data fixtures
- Keep helper functions updated
- Review and update authentication flow if Microsoft login changes

### 15.2 Test Reporting

- HTML reports: `npm run playwright:report`
- Screenshots on failure (automatic)
- Videos on failure (automatic)
- Traces on retry (automatic)

---

## 16. Appendix

### 16.1 Test File Locations

- API Tests: `playwright/e2e/api/`
- UI Tests: `playwright/e2e/ui/`
- Support Files: `playwright/support/`
- Fixtures: `playwright/fixtures/`
- Page Objects: `playwright/support/pageObjects/`

### 16.2 NPM Scripts Reference

- `playwright:test`: Run all tests
- `playwright:test:headed`: Run tests with visible browser
- `playwright:test:ui`: Run UI tests only
- `playwright:test:api`: Run API tests only
- `playwright:ui`: Open interactive UI mode
- `playwright:debug`: Run in debug mode
- `playwright:install`: Install Playwright browsers
- `playwright:report`: Show HTML test report

### 16.3 Configuration Files

- `playwright.config.js`: Main Playwright configuration
- `package.json`: NPM scripts and dependencies
- `playwright/global-setup.js`: Global authentication setup
- `playwright/support/auth.js`: Authentication implementation

### 16.4 Generated Files

- `playwright/.auth/user.json`: Authentication state (generated, gitignored)
- `test-results/`: Test results, screenshots, videos (generated)

---

## 17. Success Criteria

### 17.1 Test Completion Criteria

- All test cases execute successfully
- No critical bugs found
- All high-priority tests pass
- Test coverage meets requirements

### 17.2 Quality Metrics

- Test pass rate: >95%
- Test execution time: Optimized with session caching
- Test maintainability: High (DRY principles, Page Objects)
- Code coverage: Comprehensive API and UI coverage

---

## 18. Support and Resources

### 18.1 Documentation

- Playwright Official Docs: https://playwright.dev
- Playwright API Reference: https://playwright.dev/docs/api/class-playwright

### 18.2 Internal Resources

- Test Plan: `TEST_PLAN.md`
- Troubleshooting Log: `.temp/troubleshooting_log.md`
- Playwright README: `playwright/README.md`

---

**Last Updated**: December 2024

**Version**: 1.0

**Maintained By**: Test Automation Team

