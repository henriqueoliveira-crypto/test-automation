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
  // TC01 and TC02 removed
});

