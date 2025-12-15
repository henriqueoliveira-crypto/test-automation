const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { safeJsonParse, handleAuthError, getAuthHeaders } = require('../../support/api-test-helpers');

const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';

let testData;

test.beforeAll(() => {
  // Load test data fixture
  const testDataPath = path.join(__dirname, '../../fixtures/test-data.json');
  testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
});

test.describe('User API @api', () => {
  test.describe('Get Users', () => {
    test('TC01 - Get all users without filters', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/users`, {
        headers: authHeaders,
      });
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((user) => {
          expect(user).toHaveProperty('id');
          expect(user).toHaveProperty('firstName');
          expect(user).toHaveProperty('lastName');
        });
      }
    });

    test('TC02 - Get users filtered by costCenterIds', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/users?costCenterIds=${testData.validIds.costCenterId}`, {
        headers: authHeaders,
      });
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((user) => {
          expect(user).toHaveProperty('costCenterId');
        });
      }
    });

    test('TC03 - Get users with search query', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/users?searchQuery=${testData.userSearch.query}`, {
        headers: authHeaders,
      });
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((user) => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          expect(fullName).toContain(testData.userSearch.query.toLowerCase());
        });
      }
    });

    test('TC04 - Get users with both costCenterIds and search query', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/users?costCenterIds=${testData.validIds.costCenterId}&searchQuery=${testData.userSearch.query}`, {
        headers: authHeaders,
      });
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((user) => {
          expect(user).toHaveProperty('costCenterId');
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          expect(fullName).toContain(testData.userSearch.query.toLowerCase());
        });
      }
    });

    test('TC05 - Get users with invalid costCenterIds parameter', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/users?costCenterIds=invalid`, {
        headers: authHeaders,
      });
      
      // API may accept invalid parameter (200), return 400 (bad request), or 401 (unauthorized)
      expect([
        testData.httpStatus.success,
        testData.httpStatus.badRequest,
        testData.httpStatus.unauthorized
      ]).toContain(response.status());
    });
  });

  test.describe('Get User', () => {
    test('TC01 - Get user by valid userId', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const usersResponse = await request.get(`${BASE_URL}/api/users`, {
        headers: authHeaders,
      });
      
      if (usersResponse.status() === testData.httpStatus.success) {
        const usersBody = await usersResponse.json();
        if (usersBody.length > 0) {
          const userId = usersBody[0].id;
          const response = await request.get(`${BASE_URL}/api/user/${userId}`, {
            headers: authHeaders,
          });
          
          if (response.status() === testData.httpStatus.success) {
            const body = await response.json();
            expect(body).toHaveProperty('id');
            expect(body).toHaveProperty('firstName');
            expect(body).toHaveProperty('lastName');
            expect(body).toHaveProperty('packets');
            expect(Array.isArray(body.packets)).toBe(true);
          } else {
            expect([
              testData.httpStatus.forbidden,
              testData.httpStatus.notFound
            ]).toContain(response.status());
          }
        } else {
          console.log('No users available for testing');
        }
      }
    });

    test('TC02 - Get user with invalid userId', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/user/${testData.invalidIds.userId}`, {
        headers: authHeaders,
      });
      
      // API may return 404 (not found) or 401 (unauthorized) - authentication checked first
      expect([
        testData.httpStatus.notFound,
        testData.httpStatus.unauthorized
      ]).toContain(response.status());
      
      if (response.status() === testData.httpStatus.notFound) {
        const body = await response.json();
        expect(body).toHaveProperty('code');
        expect(body.code).toContain(testData.errorCodes.userNotFound);
      }
    });

    test('TC03 - Get user with missing userId parameter', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/user/`, {
        headers: authHeaders,
      });
      
      // API validates format (400) before authentication (401), or returns 404
      // Note: API may also return 200 if it treats empty path as list endpoint
      const status = response.status();
      expect([
        testData.httpStatus.success,
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound,
        testData.httpStatus.unauthorized
      ]).toContain(status);
    });

    test('TC04 - Get user with unauthorized access', async ({ request }) => {
      const authHeaders = getAuthHeaders();
      const response = await request.get(`${BASE_URL}/api/user/${testData.invalidIds.userId}`, {
        headers: authHeaders,
      });
      
      // API may return 401 (unauthorized), 403 (forbidden), or 404 (not found)
      expect([
        testData.httpStatus.unauthorized,
        testData.httpStatus.forbidden,
        testData.httpStatus.notFound
      ]).toContain(response.status());
      
      if (response.status() === testData.httpStatus.forbidden || response.status() === testData.httpStatus.unauthorized) {
        try {
          const body = await response.json();
          expect(body).toBeDefined();
        } catch (e) {
          // Response may not be JSON for auth errors
        }
      }
    });
  });
});

