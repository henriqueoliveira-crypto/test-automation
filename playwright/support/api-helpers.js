/**
 * API helper functions for Playwright tests
 * Provides utilities for making API requests similar to Cypress cy.request()
 */

const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';

/**
 * Get the base URL without the /employee/ path
 * @param {import('@playwright/test').APIRequestContext} request - Playwright API request context
 * @returns {string} Base URL
 */
function getBaseUrl(request) {
  return BASE_URL;
}

/**
 * Make an authenticated API request
 * @param {import('@playwright/test').APIRequestContext} request - Playwright API request context
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Request options (body, headers, etc.)
 * @returns {Promise<import('@playwright/test').APIResponse>} Response object
 */
async function apiRequest(request, method, endpoint, options = {}) {
  const url = `${getBaseUrl(request)}${endpoint}`;
  
  const requestOptions = {
    method,
    url,
    ...options,
  };
  
  return await request.fetch(url, requestOptions);
}

/**
 * Helper to get authentication headers from storage state
 * Note: In Playwright, authentication is typically handled via storageState
 * This is a utility for cases where you need explicit headers
 */
function getAuthHeaders(storageState) {
  // Extract cookies from storage state if needed
  // For most cases, Playwright handles auth via storageState automatically
  return {};
}

module.exports = {
  getBaseUrl,
  apiRequest,
  getAuthHeaders,
};

