const { chromium } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

async function globalSetup() {
  const browser = await chromium.launch();
  
  // Use the API domain for authentication to ensure cookies work for API tests
  // The API domain is: rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net
  // But we need to authenticate via the employee portal: /employee/
  const context = await browser.newContext({
    baseURL: 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/',
  });
  const page = await context.newPage();

  try {
    // Import auth helper
    const { login } = require('./support/auth');
    
    // Perform login
    await login(page);
    
    // Save authentication state
    const authDir = path.join(__dirname, '.auth');
    if (!fs.existsSync(authDir)) {
      fs.mkdirSync(authDir, { recursive: true });
    }
    
    const authStatePath = path.join(authDir, 'user.json');
    await context.storageState({ path: authStatePath });
    console.log('✅ Authentication state saved successfully to', authStatePath);
    
    // Verify that we have cookies for the API domain
    const authState = JSON.parse(fs.readFileSync(authStatePath, 'utf8'));
    const apiDomainCookies = authState.cookies?.filter(c => 
      c.domain?.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net')
    ) || [];
    
    if (apiDomainCookies.length === 0) {
      console.warn('⚠️ Warning: No cookies found for API domain. API tests may fail.');
    } else {
      console.log(`✅ Found ${apiDomainCookies.length} cookie(s) for API domain`);
    }
  } catch (error) {
    console.error('❌ Failed to authenticate during global setup:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

module.exports = globalSetup;

