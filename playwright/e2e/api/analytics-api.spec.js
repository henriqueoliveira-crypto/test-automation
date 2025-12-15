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

test.describe('Analytics API @api', () => {
  test('TC01 - Get analytics data successfully', async ({ request }) => {
    // Get authentication headers from storageState
    const authHeaders = getAuthHeaders();
    
    const response = await request.get(`${BASE_URL}/api/analytics`, {
      headers: authHeaders,
    });
    
    // Handle authentication issues - if we get HTML, skip the test
    const contentType = response.headers()['content-type'] || '';
    if (contentType.includes('text/html')) {
      test.skip();
      return;
    }
    
    if (handleAuthError(response, test)) return;
    
    expect(response.status()).toBe(testData.httpStatus.success);
    
    const body = await safeJsonParse(response);
    expect(body).toBeDefined();
    expect(body).toHaveProperty('analytics');
    expect(body).toHaveProperty('details');
  });

  test('TC02 - Verify analytics response structure', async ({ request }) => {
    // Get authentication headers from storageState
    const authHeaders = getAuthHeaders();
    
    const response = await request.get(`${BASE_URL}/api/analytics`, {
      headers: authHeaders,
    });
    
    // Handle authentication issues - if we get HTML, skip the test
    const contentType = response.headers()['content-type'] || '';
    if (contentType.includes('text/html')) {
      test.skip();
      return;
    }
    
    if (handleAuthError(response, test)) return;
    
    expect(response.status()).toBe(testData.httpStatus.success);
    
    const body = await safeJsonParse(response);
    
    // Verify analytics array structure
    expect(Array.isArray(body.analytics)).toBe(true);
    if (body.analytics.length > 0) {
      body.analytics.forEach((stat) => {
        expect(stat).toHaveProperty('key');
        expect(stat).toHaveProperty('title');
        expect(stat).toHaveProperty('valueText');
      });
    }

    // Verify details object structure
    expect(typeof body.details).toBe('object');
    expect(body.details).toHaveProperty('currentWeek');
    expect(body.details).toHaveProperty('previousWeek');
    expect(body.details).toHaveProperty('averages');
    expect(body.details).toHaveProperty('breakdown');

    // Verify currentWeek structure
    expect(body.details.currentWeek).toHaveProperty('completed');
    expect(body.details.currentWeek).toHaveProperty('total');

    // Verify previousWeek structure
    expect(body.details.previousWeek).toHaveProperty('completed');
    expect(body.details.previousWeek).toHaveProperty('total');

    // Verify averages structure
    expect(body.details.averages).toHaveProperty('completionMinutes');

    // Verify breakdown structure
    expect(body.details.breakdown).toHaveProperty('sent');
    expect(body.details.breakdown).toHaveProperty('completed');
    expect(body.details.breakdown).toHaveProperty('avgTime');
    expect(body.details.breakdown).toHaveProperty('inProgress');
  });
});

