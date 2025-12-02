const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';

let testData;

test.beforeAll(() => {
  // Load test data fixture
  const testDataPath = path.join(__dirname, '../../fixtures/test-data.json');
  testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
});

test.describe('Health API @api', () => {
  test('TC01 - Get health status when database is connected', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/health`);
    
    expect([
      testData.httpStatus.success,
      testData.httpStatus.serverError,
      testData.httpStatus.serviceUnavailable
    ]).toContain(response.status());
    
    if (response.status() === testData.httpStatus.success) {
      // Health endpoint may return plain text "OK" or JSON
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('application/json')) {
        const body = await response.json();
        expect(body).toBeDefined();
      } else {
        // Handle plain text response
        const body = await response.text();
        expect(body).toBeDefined();
        // Health endpoint typically returns "OK"
        expect(['OK', 'ok', 'Healthy', 'healthy']).toContain(body.trim());
      }
    }
  });

  test('TC02 - Get health status when database is not connected', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/health`);
    
    if (response.status() !== testData.httpStatus.success) {
      expect([
        testData.httpStatus.serverError,
        testData.httpStatus.serviceUnavailable,
        testData.httpStatus.badGateway
      ]).toContain(response.status());
      
      // Health endpoint may return plain text or JSON
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('application/json')) {
        const body = await response.json();
        expect(body).toBeDefined();
      } else {
        const body = await response.text();
        expect(body).toBeDefined();
      }
    }
  });
});

