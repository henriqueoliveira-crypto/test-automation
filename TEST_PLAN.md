# Test Plan Document

## 1. Overview

### 1.1 Purpose
This document outlines the comprehensive test strategy and test scenarios for the Provider Portal application, covering API endpoints and UI functionality.

### 1.2 Scope
- API Testing: Packet, User, Form, Analytics, and Health endpoints
- UI Testing: Provider Portal page functionality
- Authentication: Non-MFA user session management
- Test Coverage: Positive, negative, and edge case scenarios

### 1.3 Test Environment
- Base URL: Configured via Cypress config
- Authentication: Non-MFA user (svc-pacenet-test2@rhanet.org)
- Test Framework: Cypress
- Test Execution: Automated via Cypress test runner

---

## 2. Test Strategy

### 2.1 Testing Approach
- **API Testing**: Comprehensive coverage of all REST endpoints
- **UI Testing**: Critical user flows and navigation
- **Integration Testing**: End-to-end workflows
- **Regression Testing**: Automated test suite execution

### 2.2 Test Types
1. **Functional Testing**: Verify API endpoints return correct responses
2. **Validation Testing**: Verify request/response validation
3. **Error Handling**: Verify proper error responses
4. **Data Integrity**: Verify response structure and data types
5. **Authorization**: Verify access control and permissions

### 2.3 Test Execution Strategy
- **Pre-test Setup**: Global authentication via `beforeEach` hook in `e2e.js`
- **Session Management**: Cached authentication using `cy.session()`
- **Test Isolation**: Each test is independent and can run standalone
- **Test Data**: Fixtures for packet and form data

---

## 3. Test Scenarios

### 3.1 Packet API Tests

#### 3.1.1 Get Packet
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get packet by valid external ID | Returns 200 with packet data (externalId, forms, schema) | High |
| TC02 | Get packet with invalid external ID | Returns 404 with error code E_PACKET_NOT_FOUND | High |
| TC03 | Get packet with missing packetId parameter | Returns 400 or 404 | Medium |

**Test Strategy:**
- Verify successful retrieval with valid ID
- Verify error handling for invalid/missing IDs
- Verify response structure and data types

#### 3.1.2 Update Packet
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Update packet with valid data | Returns 204 (No Content) | High |
| TC02 | Update packet with invalid packetId | Returns 404 with error code | High |
| TC03 | Update packet with invalid results data type | Returns 400 or 404 | Medium |
| TC04 | Update packet with missing required fields | Returns 400 or 404 | Medium |

**Test Strategy:**
- Verify successful updates with valid data
- Verify validation of request body structure
- Verify error handling for invalid data types

#### 3.1.3 Get All Packets
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get all packets without filters | Returns 200 with array of packets | High |
| TC02 | Get all packets filtered by status | Returns 200 with filtered packets matching status | Medium |
| TC03 | Get all packets excluding a status | Returns 200 with packets not matching excluded status | Medium |
| TC04 | Get all packets with invalid status parameter | Returns 200 (empty array) or 400 | Low |

**Test Strategy:**
- Verify filtering functionality
- Verify query parameter handling
- Verify response array structure

#### 3.1.4 Create Packet
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Create packet with valid data | Returns 201 with packetId | High |
| TC02 | Create packet without required clientId | Returns 400 with error code | High |
| TC03 | Create packet without required formTypeIds | Returns 400 with error code | High |
| TC04 | Create packet without required title | Returns 400 with error code | High |
| TC05 | Create packet with invalid clientId | Returns 400 or 404 | Medium |
| TC06 | Create packet with invalid formTypeIds | Returns 400 or 404 | Medium |

**Test Strategy:**
- Verify required field validation
- Verify successful creation with valid data
- Verify error handling for invalid references

#### 3.1.5 Delete Packet
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Delete packet with valid packetId | Returns 204 (No Content) | High |
| TC02 | Delete packet with invalid packetId | Returns 404 with error code | High |
| TC03 | Delete already deleted packet | Returns 404 on second attempt | Medium |

**Test Strategy:**
- Verify successful deletion
- Verify idempotency handling
- Verify error handling for non-existent packets

---

### 3.2 User API Tests

#### 3.2.1 Get Users
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get all users without filters | Returns 200 with array of users (id, firstName, lastName) | High |
| TC02 | Get users filtered by costCenterIds | Returns 200 with users from specified cost center | Medium |
| TC03 | Get users with search query | Returns 200 with users matching search term | Medium |
| TC04 | Get users with both costCenterIds and search query | Returns 200 with users matching both filters | Medium |
| TC05 | Get users with invalid costCenterIds parameter | Returns 200 (empty array) or 400 | Low |

**Test Strategy:**
- Verify filtering and search functionality
- Verify query parameter combinations
- Verify response structure and data validation

#### 3.2.2 Get User
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get user by valid userId | Returns 200 with user data and packets array | High |
| TC02 | Get user with invalid userId | Returns 404 with error code E_USER_NOT_FOUND | High |
| TC03 | Get user with missing userId parameter | Returns 400 or 404 | Medium |
| TC04 | Get user with unauthorized access | Returns 403 or 404 | High |

**Test Strategy:**
- Verify authorization checks
- Verify user data retrieval
- Verify error handling for unauthorized access

---

### 3.3 Form API Tests

#### 3.3.1 Get Form Types
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get all form types successfully | Returns 200 with array of form types | High |
| TC02 | Verify form types response structure | Returns 200 with properly structured data (id: number, name: string) | Medium |

**Test Strategy:**
- Verify response structure
- Verify data type validation
- Verify array handling

#### 3.3.2 Get All Forms
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get all forms successfully | Returns 200 with array of forms | High |
| TC02 | Verify forms response structure | Returns 200 with properly structured data (id: number) | Medium |

**Test Strategy:**
- Verify response structure
- Verify data integrity
- Verify array handling

---

### 3.4 Analytics API Tests

#### 3.4.1 Get Analytics
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get analytics data successfully | Returns 200 with analytics and details objects | High |
| TC02 | Verify analytics response structure | Returns 200 with complete structure:
- analytics array (key, title, valueText)
- details object (currentWeek, previousWeek, averages, breakdown)
- Nested structure validation | High |

**Test Strategy:**
- Verify complex nested response structure
- Verify all required properties exist
- Verify data type validation

---

### 3.5 Health API Tests

#### 3.5.1 Get Health Status
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Get health status when database is connected | Returns 200 with health data | High |
| TC02 | Get health status when database is not connected | Returns 500, 503, or 502 with error | High |

**Test Strategy:**
- Verify health check functionality
- Verify error handling for database issues
- Verify system availability monitoring

---

### 3.6 UI Tests (Provider Portal)

#### 3.6.1 Authentication
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Login as provider | Successfully authenticates and redirects to /provider | High |

**Test Strategy:**
- Verify authentication flow
- Verify session management
- Verify redirect after login

#### 3.6.2 Navigation
| TC ID | Test Case | Expected Result | Priority |
|-------|-----------|-----------------|----------|
| TC01 | Display provider portal title and description | Correct content displayed | Medium |
| TC02 | Switch between tabs (Patient Management, Form Templates, Analytics, Settings) | Correct tab content displayed | High |
| TC03 | Breadcrumb returns to patient landing page | Navigation works correctly | Medium |

**Test Strategy:**
- Verify tab navigation
- Verify content display
- Verify navigation flows

---

## 4. Test Coverage Summary

### 4.1 API Coverage
- **Packet API**: 18 test cases (Get, Update, List, Create, Delete)
- **User API**: 9 test cases (Get Users, Get User)
- **Form API**: 4 test cases (Get Form Types, Get Forms)
- **Analytics API**: 2 test cases (Get Analytics)
- **Health API**: 2 test cases (Health Check)

**Total API Test Cases**: 35

### 4.2 UI Coverage
- **Authentication**: 1 test case
- **Navigation**: 3 test cases

**Total UI Test Cases**: 4

### 4.3 Overall Coverage
- **Total Test Cases**: 39
- **High Priority**: 25
- **Medium Priority**: 12
- **Low Priority**: 2

---

## 5. Test Data Management

### 5.1 Test Fixtures
- `packet_insertion.json`: Contains test packet IDs
- `form_data.json`: Contains form data for updates

### 5.2 Test Data Strategy
- Use fixtures for consistent test data
- Generate dynamic data where needed (e.g., timestamps)
- Use invalid IDs (999999) for negative testing
- Use real data from fixtures for positive testing

---

## 6. Test Execution

### 6.1 Pre-requisites
- Non-MFA user credentials configured
- Base URL configured in Cypress config
- Test fixtures available
- Database accessible

### 6.2 Execution Flow
1. Global authentication setup (beforeEach in e2e.js)
2. Test execution per suite
3. Session reuse across tests
4. Cleanup after test completion

### 6.3 Test Execution Commands
```bash
# Run all tests
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/api/packet-api.spec.cy.js"

# Run in headed mode
npx cypress open
```

---

## 7. Risk Assessment

### 7.1 High Risk Areas
- Authentication failures
- Database connectivity issues
- Invalid data handling
- Authorization checks

### 7.2 Mitigation Strategies
- Session caching to reduce authentication overhead
- Comprehensive error handling tests
- Validation of all error scenarios
- Regular execution of test suite

---

## 8. Test Maintenance

### 8.1 Maintenance Strategy
- Regular review of test cases
- Update tests when API changes
- Maintain test data fixtures
- Keep helper functions updated

### 8.2 Test Reporting
- Cypress dashboard for test results
- Screenshot capture on failures
- Video recording for debugging
- Test execution logs

---

## 9. Success Criteria

### 9.1 Test Completion Criteria
- All test cases execute successfully
- No critical bugs found
- All high-priority tests pass
- Test coverage meets requirements

### 9.2 Quality Metrics
- Test pass rate: >95%
- Test execution time: Optimized with session caching
- Test maintainability: High (DRY principles)
- Code coverage: Comprehensive API coverage

---

## 10. Appendix

### 10.1 Test File Locations
- API Tests: `cypress/e2e/api/`
- UI Tests: `cypress/e2e/ui/`
- Support Files: `cypress/support/`
- Fixtures: `cypress/fixtures/`

### 10.2 Helper Commands
- `cy.loginNonMFA()`: Non-MFA authentication
- `cy.apiGet()`: GET request helper
- `cy.apiPost()`: POST request helper
- `cy.apiPut()`: PUT request helper
- `cy.apiDelete()`: DELETE request helper
- `cy.authenticatedRequest()`: Generic authenticated request

### 10.3 Test Environment Configuration
- Base URL: Configured in `cypress.config.js`
- Authentication: Handled in `cypress/support/e2e.js`
- Session Management: Cached via `cy.session()`

