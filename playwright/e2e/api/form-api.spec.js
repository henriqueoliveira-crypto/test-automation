const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { safeJsonParse, handleAuthError } = require('../../support/api-test-helpers');

const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';

let testData;

test.beforeAll(() => {
  // Load test data fixture
  const testDataPath = path.join(__dirname, '../../fixtures/test-data.json');
  testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
});

test.describe('Form API @api', () => {
  test.describe('Get Form Types', () => {
    test('TC01 - Get all form types successfully', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/form-types`);
      
      // Handle both authenticated (200) and unauthenticated (401) responses
      if (response.status() === 401) {
        // If unauthenticated, skip this test or mark as expected
        test.skip();
        return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.success);
      
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((formType) => {
          expect(formType).toHaveProperty('id');
          expect(formType).toHaveProperty('name');
        });
      }
    });

    test('TC02 - Verify form types response structure', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/form-types`);
      
      // Handle both authenticated (200) and unauthenticated (401) responses
      if (response.status() === 401) {
        test.skip();
        return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.success);
      
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((formType) => {
          expect(typeof formType).toBe('object');
          expect(formType).toHaveProperty('id');
          expect(typeof formType.id).toBe('number');
          expect(formType).toHaveProperty('name');
          expect(typeof formType.name).toBe('string');
        });
      }
    });
  });

  test.describe('Get All Forms', () => {
    test('TC01 - Get all forms successfully', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/forms`);
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((form) => {
          expect(form).toHaveProperty('id');
        });
      }
    });

    test('TC02 - Verify forms response structure', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/forms`);
      
      if (handleAuthError(response, test)) return;
      
      expect(response.status()).toBe(testData.httpStatus.success);
      
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((form) => {
          expect(typeof form).toBe('object');
          expect(form).toHaveProperty('id');
          expect(typeof form.id).toBe('number');
        });
      }
    });
  });
});

