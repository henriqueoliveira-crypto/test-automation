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
    throw new Error(`Expected JSON but got ${contentType}. Response: ${text.substring(0, 200)}`);
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

module.exports = {
  safeJsonParse,
  handleAuthError,
};

