/**
 * Helper function to safely parse JSON response
 * Handles cases where response might be HTML or plain text
 */
async function safeJsonParse(response) {
  const contentType = response.headers()['content-type'] || '';
  
  if (contentType.includes('application/json')) {
    return await response.json();
  } else {
    const text = await response.text();
    // If it's HTML, likely an authentication redirect
    if (contentType.includes('text/html')) {
      throw new Error(`Authentication required - received HTML instead of JSON. Status: ${response.status()}. Response: ${text.substring(0, 200)}`);
    }
    // If it's plain text, try to parse as JSON or return error
    if (contentType.includes('text/plain')) {
      try {
        return JSON.parse(text);
      } catch (e) {
        throw new Error(`Expected JSON but got plain text. Status: ${response.status()}. Response: ${text.substring(0, 200)}`);
      }
    }
    throw new Error(`Expected JSON but got ${contentType}. Status: ${response.status()}. Response: ${text.substring(0, 200)}`);
  }
}

/**
 * Helper to handle authentication errors in API tests
 */
function handleAuthError(response, test) {
  if (response.status() === 401) {
    test.skip();
    return true;
  }
  return false;
}

/**
 * Helper to get authentication headers from storageState
 * Extracts cookies from the authentication state file for use in API requests
 * Filters cookies for the specific domain to ensure proper authentication
 * 
 * Note: Playwright's request API should automatically use storageState from config,
 * but this helper is provided as a fallback for manual cookie extraction if needed.
 */
function getAuthHeaders(domain = 'rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net') {
  const fs = require('fs');
  const path = require('path');
  
  try {
    const authStatePath = path.join(__dirname, '../.auth/user.json');
    if (!fs.existsSync(authStatePath)) {
      throw new Error('Authentication state file not found. Please run global setup to authenticate.');
    }
    
    const authState = JSON.parse(fs.readFileSync(authStatePath, 'utf8'));
    const cookies = authState.cookies || [];
    
    if (cookies.length === 0) {
      throw new Error('No cookies found in authentication state. Please run global setup to authenticate.');
    }
    
    // Filter cookies for the specific domain - only include cookies for the API domain
    // The sails.sid cookie is the session cookie we need
    const relevantCookies = cookies.filter(c => {
      const cookieDomain = c.domain || '';
      // Only include cookies for the target API domain (not Microsoft cookies for API requests)
      if (cookieDomain === domain || cookieDomain.includes(domain)) {
        return true;
      }
      return false;
    });
    
    if (relevantCookies.length === 0) {
      // Log available cookies for debugging
      const availableDomains = [...new Set(cookies.map(c => c.domain).filter(Boolean))];
      throw new Error(
        `No relevant cookies found for domain ${domain}. ` +
        `Available cookie domains: ${availableDomains.join(', ')}. ` +
        `Please ensure authentication was performed for the correct domain. ` +
        `You may need to run: npx playwright test --global-setup`
      );
    }
    
    // Check if sails.sid cookie exists (this is the session cookie we need)
    const sailsCookie = relevantCookies.find(c => c.name === 'sails.sid');
    if (!sailsCookie) {
      throw new Error(
        `sails.sid session cookie not found for domain ${domain}. ` +
        `Please run: npx playwright test --global-setup to authenticate.`
      );
    }
    
    // Check if session cookie might be expired (session cookies expire when browser closes)
    // Note: expires: -1 means it's a session cookie
    if (sailsCookie.expires === -1) {
      console.warn(`⚠️ Warning: sails.sid is a session cookie (expires on browser close). If tests fail with 401, re-run global setup.`);
    }
    
    // Build Cookie header from stored cookies
    // Only send cookies for the API domain
    const cookieHeader = relevantCookies.map(c => `${c.name}=${c.value}`).join('; ');
    
    console.log(`🔐 Using ${relevantCookies.length} cookie(s) for domain ${domain} (including sails.sid session cookie)`);
    
    return {
      'Cookie': cookieHeader,
    };
  } catch (error) {
    throw new Error(`Failed to load authentication headers: ${error.message}`);
  }
}

module.exports = {
  safeJsonParse,
  handleAuthError,
  getAuthHeaders,
};

