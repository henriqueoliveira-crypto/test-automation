/**
 * Authentication helper for Microsoft OAuth login
 * Handles the complete OAuth flow including button click and credential entry
 */

const USERNAME = 'svc-pacenet-test2@rhanet.org';
const PASSWORD = 'Badger123!';
const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/';

/**
 * Helper function to click Next button when prompted
 * Tries multiple selectors and handles both English and Portuguese
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds (default: 10000)
 * @returns {Promise<boolean>} - Returns true if Next button was found and clicked, false otherwise
 */
async function clickNextButton(page, timeout = 10000) {
  console.log('Looking for Next button...');
  await page.waitForTimeout(2000); // Wait for page to render
  
  const nextButtonSelectors = [
    // Try by role first (most reliable)
    () => page.getByRole('button', { name: /^Next$/i }),
    () => page.getByRole('button', { name: /Next/i }),
    // Try by text content
    () => page.locator('button:has-text("Next")'),
    () => page.locator('button').filter({ hasText: /^Next$/i }),
    () => page.locator('button').filter({ hasText: /Next/i }),
    // Try input buttons
    () => page.locator('input[type="submit"][value*="Next" i]'),
    () => page.locator('input[type="button"][value*="Next" i]'),
    () => page.locator('input[type="submit"]').filter({ hasText: /Next/i }),
    // Try by attributes
    () => page.locator('[aria-label*="Next" i]'),
    () => page.locator('button[id*="next" i]'),
    () => page.locator('button[class*="next" i]'),
    // Try all buttons and filter by text
    () => page.locator('button').filter({ hasText: /Next/i }),
    () => page.locator('*').filter({ hasText: /^Next$/i }),
    // Portuguese: "Próximo" = "Next"
    () => page.getByRole('button', { name: /Próximo/i }),
    () => page.locator('button:has-text("Próximo")'),
    () => page.locator('button').filter({ hasText: /Próximo/i }),
  ];
  
  for (const selectorFn of nextButtonSelectors) {
    try {
      const nextButton = selectorFn();
      const count = await nextButton.count();
      if (count > 0) {
        // Try each matching element
        for (let i = 0; i < count; i++) {
          try {
            const button = nextButton.nth(i);
            const isVisible = await button.isVisible({ timeout: 2000 }).catch(() => false);
            if (isVisible) {
              const buttonText = await button.textContent().catch(() => '');
              const trimmedText = buttonText ? buttonText.trim() : '';
              const lowerText = trimmedText.toLowerCase();
              
              // Check if it's a Next button (English or Portuguese)
              if (lowerText.includes('next') || 
                  trimmedText === 'Next' || 
                  lowerText.includes('próximo') || 
                  lowerText.includes('proximo') ||
                  trimmedText === 'Próximo') {
                console.log(`✅ Found "Next" button with text: "${trimmedText}", clicking it...`);
                await button.scrollIntoViewIfNeeded();
                await button.click({ timeout: timeout });
                await page.waitForTimeout(2000); // Wait for action to complete
                console.log('✅ Successfully clicked Next button');
                return true;
              }
            }
          } catch (e) {
            // Continue to next element
            continue;
          }
        }
      }
    } catch (e) {
      // Continue to next selector
      continue;
    }
  }
  
  console.log('⚠️ No Next button found on current page');
  return false;
}

/**
 * Performs Microsoft OAuth login
 * @param {import('@playwright/test').Page} page - Playwright page object
 */
async function login(page) {
  console.log('Starting Microsoft OAuth login flow...');
  
  // Navigate to the application
  await page.goto(BASE_URL);
  await page.waitForLoadState('networkidle');
  
  // Wait for the page to fully load and MSAL to initialize
  await page.waitForTimeout(3000);
  
  // Wait for and click the "Sign In with Microsoft" button
  console.log('Looking for Sign In button...');
  const signInButton = page.getByRole('button', { name: /Sign In with Microsoft/i });
  await signInButton.waitFor({ state: 'visible', timeout: 20000 });
  await signInButton.scrollIntoViewIfNeeded();
  await signInButton.click();
  
  console.log('Button clicked, waiting for Microsoft OAuth page...');
  
  // Wait for navigation to Microsoft OAuth domain
  await page.waitForURL(/login\.microsoftonline\.com.*oauth2/i, { timeout: 30000 });
  console.log('✅ Navigated to Microsoft OAuth page');
  
  // Wait a moment for page to load
  await page.waitForTimeout(2000);
  
  // Look for and click "Next" button after navigating to Microsoft OAuth page
  console.log('Looking for Next button on Microsoft OAuth page (after Sign in with Microsoft)...');
  try {
    const nextButtonSelectors = [
      () => page.getByRole('button', { name: /^Next$/i }),
      () => page.getByRole('button', { name: /Next/i }),
      () => page.locator('button:has-text("Next")'),
      () => page.locator('input[type="submit"][value*="Next" i]'),
      () => page.locator('input[type="button"][value*="Next" i]'),
      () => page.locator('[aria-label*="Next" i]'),
      () => page.locator('button').filter({ hasText: /Next/i }),
    ];
    
    let nextClicked = false;
    for (const selectorFn of nextButtonSelectors) {
      try {
        const nextButton = selectorFn();
        const count = await nextButton.count();
        if (count > 0) {
          for (let i = 0; i < count; i++) {
            try {
              const button = nextButton.nth(i);
              const isVisible = await button.isVisible({ timeout: 2000 }).catch(() => false);
              if (isVisible) {
                const buttonText = await button.textContent().catch(() => '');
                const trimmedText = buttonText ? buttonText.trim() : '';
                if (trimmedText.toLowerCase().includes('next') || trimmedText === 'Next') {
                  console.log(`✅ Found "Next" button with text: "${trimmedText}", clicking it...`);
                  await button.scrollIntoViewIfNeeded();
                  await button.click({ timeout: 5000 });
                  await page.waitForTimeout(2000);
                  console.log('✅ Clicked Next button on OAuth page');
                  nextClicked = true;
                  break;
                }
              }
            } catch (e) {
              // Continue to next element
            }
          }
          if (nextClicked) break;
        }
      } catch (e) {
        // Continue to next selector
      }
    }
    
    if (!nextClicked) {
      console.log('No Next button found on Microsoft OAuth page (this is normal if email field is already visible)');
    }
  } catch (error) {
    console.log('Error looking for Next button on OAuth page:', error.message);
  }
  
  // Fill in the email/username field
  console.log('Looking for email input field...');
  const emailInput = page.locator('input[type="email"], input[name="loginfmt"], input[id="i0116"]').first();
  await emailInput.waitFor({ state: 'visible', timeout: 15000 });
  console.log('✅ Email input field found, typing email:', USERNAME);
  
  // Clear the field first
  await emailInput.click();
  await emailInput.clear();
  await page.waitForTimeout(500);
  
  // Type the email character by character to simulate real user typing
  await emailInput.type(USERNAME, { delay: 50 });
  console.log('✅ Email typed successfully');
  await page.waitForTimeout(1000); // Wait for email to be entered
  
  // Click Next/Submit button
  console.log('Looking for Next/Submit button after email...');
  const nextButton = page.locator('input[type="submit"], button[type="submit"], #idSIButton9').first();
  await nextButton.waitFor({ state: 'visible', timeout: 10000 });
  console.log('✅ Next/Submit button found, clicking...');
  await nextButton.click();
  console.log('✅ Clicked Next/Submit button after email');
  
  // Wait for password field to appear
  console.log('Looking for password input field...');
  // Match the exact field: input[name="passwd"] with id="i0118"
  const passwordInput = page.locator('input[type="password"], input[name="passwd"], input[id="i0118"]').first();
  await passwordInput.waitFor({ state: 'visible', timeout: 15000 });
  console.log('✅ Password input field found (name="passwd", id="i0118"), typing password...');
  
  // Clear and type password character by character to simulate real user typing
  await passwordInput.click();
  await passwordInput.clear();
  await page.waitForTimeout(500);
  
  // Type password character by character
  await passwordInput.type(PASSWORD, { delay: 50 });
  console.log('✅ Password typed successfully');
  
  // Verify password was entered (check value length, but don't log actual password)
  const passwordValue = await passwordInput.inputValue().catch(() => '');
  if (passwordValue.length > 0) {
    console.log(`✅ Password confirmed entered (${passwordValue.length} characters)`);
  } else {
    console.log('⚠️ Warning: Password field appears empty after typing');
  }
  
  // Wait a moment to ensure password is entered
  await page.waitForTimeout(1000);
  
  // Click Sign in button
  const signInSubmitButton = page.locator('input[type="submit"], button[type="submit"], #idSIButton9').first();
  await signInSubmitButton.waitFor({ state: 'visible', timeout: 10000 });
  
  console.log('Clicking Sign in button...');
  
  // Click the button and wait for navigation (either to security registration or back to app)
  await signInSubmitButton.click();
  
  // Wait longer for page to process authentication
  console.log('Waiting for authentication to process...');
  await page.waitForTimeout(3000);
  
  // Wait for navigation - could go to security registration page or back to app
  let navigationOccurred = false;
  try {
    await Promise.race([
      page.waitForURL(/rha-patient-hgcya0gsd6e4gnde\.eastus-01\.azurewebsites\.net/i, { timeout: 20000 }),
      page.waitForURL(/mysignins\.microsoft\.com/i, { timeout: 20000 }),
      page.waitForURL(/\/register/i, { timeout: 20000 })
    ]);
    navigationOccurred = true;
    console.log('✅ Navigation occurred');
  } catch (e) {
    console.log('Waiting longer for navigation after password submit...');
    await page.waitForTimeout(5000);
    // Check if URL changed even if waitForURL didn't fire
    const urlAfterWait = page.url();
    if (urlAfterWait !== page.url() || 
        urlAfterWait.includes('rha-patient') || 
        urlAfterWait.includes('mysignins.microsoft.com') ||
        urlAfterWait.includes('/register')) {
      navigationOccurred = true;
    }
  }
  
  // Check current URL to see where we are
  let currentUrl = page.url();
  console.log('Current URL after sign in click:', currentUrl);
  
  // Check for authentication errors immediately
  try {
    await page.waitForTimeout(2000); // Wait for any error messages to appear
    const bodyText = await page.locator('body').textContent().catch(() => '');
    if (bodyText) {
      const lowerText = bodyText.toLowerCase();
      // Check for common Microsoft error messages
      if (lowerText.includes('your account or password is incorrect') ||
          lowerText.includes('we couldn\'t sign you in') ||
          lowerText.includes('that didn\'t work') ||
          lowerText.includes('try again') ||
          (lowerText.includes('incorrect') && lowerText.includes('password')) ||
          (lowerText.includes('wrong') && lowerText.includes('password'))) {
        console.error('❌ Authentication error detected on page');
        await page.screenshot({ path: 'playwright/.auth/auth-error-detected.png', fullPage: true });
        throw new Error('Authentication failed: Incorrect password or account error');
      }
    }
  } catch (error) {
    if (error.message.includes('Authentication failed')) {
      throw error;
    }
    // Continue if it's just a timeout or other error
  }
  
  // Always look for "Next" button on the current page when prompted
  console.log('Checking for Next button prompt...');
  await page.waitForTimeout(3000); // Wait for page to respond
  
  const nextClicked = await clickNextButton(page, 10000);
  
  if (nextClicked) {
    // Wait for navigation after clicking Next
    try {
      await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
      await page.waitForTimeout(3000);
    } catch (e) {
      await page.waitForTimeout(5000);
    }
    
    currentUrl = page.url();
    console.log('✅ URL after clicking Next:', currentUrl);
    
    // If we're on the security registration page, wait for it to fully load
    if (currentUrl.includes('mysignins.microsoft.com') || currentUrl.includes('/register')) {
      console.log('✅ On security registration page after clicking Next, waiting for page to fully load...');
      
      // Wait for page to load - this page can take a while
      await page.waitForLoadState('domcontentloaded', { timeout: 20000 }).catch(() => {});
      await page.waitForTimeout(3000);
      
      // Wait for network to be idle (all resources loaded)
      try {
        await page.waitForLoadState('networkidle', { timeout: 20000 });
      } catch (e) {
        console.log('Network idle timeout, continuing...');
      }
      
      // Additional wait for JavaScript to execute
      await page.waitForTimeout(5000);
      
      // Check if page loaded properly
      const pageText = await page.locator('body').textContent().catch(() => '');
      if (pageText && pageText.includes('You need to enable JavaScript')) {
        console.log('⚠️ Page showing JavaScript message, waiting even longer for React/JS to load...');
        await page.waitForTimeout(10000);
        
        // Try waiting for specific elements that should appear
        try {
          await page.waitForSelector('button, a, input', { timeout: 15000 });
          console.log('✅ Page elements loaded');
        } catch (e) {
          console.log('⚠️ Could not find page elements, but continuing...');
        }
        
        await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
      }
      
      // Update current URL after page loads
      currentUrl = page.url();
      console.log('Current URL after page load:', currentUrl);
    }
  } else {
    // Take screenshot for debugging if Next button not found
    await page.screenshot({ path: 'playwright/.auth/no-next-button.png', fullPage: true }).catch(() => {});
    console.log('Screenshot saved to playwright/.auth/no-next-button.png (if file exists)');
  }
  
  // Check if we're on Microsoft security info registration page (mysignins.microsoft.com)
  // Update URL check - might have changed after Next button click
  currentUrl = page.url();
  let isOnSecurityRegistration = currentUrl.includes('mysignins.microsoft.com') || currentUrl.includes('/register');
  
  // If we're on the security registration page, wait for it to load and look for Skip buttons
  if (isOnSecurityRegistration) {
    console.log('✅ On security registration page, waiting for page to fully load...');
    await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    await page.waitForTimeout(5000);
    
    // Check if page is fully loaded
    const bodyText = await page.locator('body').textContent().catch(() => '');
    if (bodyText && bodyText.includes('You need to enable JavaScript')) {
      console.log('Waiting for JavaScript to execute...');
      await page.waitForTimeout(10000);
      await page.waitForLoadState('networkidle', { timeout: 20000 }).catch(() => {});
    }
    
    console.log('Looking for Skip buttons on security registration page...');
    // Try to click Next button if prompted on security registration page
    const nextClickedOnRegistration = await clickNextButton(page, 10000);
    if (nextClickedOnRegistration) {
      await page.waitForTimeout(3000);
      currentUrl = page.url();
      console.log('URL after clicking Next on registration page:', currentUrl);
    }
  }
  
  // Check if we've been redirected back to the app
  let isRedirectedToApp = currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
  console.log('Redirected to app?', isRedirectedToApp);
  
  if (!isRedirectedToApp) {
    // Not redirected yet - check for "Skip" or "Skip set up" buttons
    console.log('Not redirected to app yet, checking for Skip buttons...');
    
    // Wait a bit for page to load
    await page.waitForTimeout(2000);
    
    // If we're on security registration page, look for Skip buttons more aggressively
    if (isOnSecurityRegistration) {
      console.log('On Microsoft security registration page, looking for Skip buttons...');
    }
    
    try {
      // Look for "Skip" button first - try multiple selectors
      const skipButtonSelectors = [
        page.getByRole('button', { name: /skip/i }),
        page.getByRole('link', { name: /skip/i }),
        page.locator('button:has-text("Skip")'),
        page.locator('a:has-text("Skip")'),
        page.locator('button').filter({ hasText: /skip/i }),
        page.locator('a').filter({ hasText: /skip/i }),
        page.locator('[aria-label*="Skip" i]'),
        page.locator('*:has-text("Skip")').filter({ hasText: /skip/i }).first(),
      ];
      
      let skipClicked = false;
      for (const selectorFn of skipButtonSelectors) {
        try {
          const skipButton = selectorFn();
          const count = await skipButton.count();
          if (count > 0) {
            for (let i = 0; i < count; i++) {
              try {
                const button = skipButton.nth(i);
                const isVisible = await button.isVisible({ timeout: 3000 }).catch(() => false);
                if (isVisible) {
                const buttonText = await button.textContent().catch(() => '');
                const trimmedText = buttonText ? buttonText.trim() : '';
                const lowerText = trimmedText.toLowerCase();
                // Check for English "Skip" or Portuguese "Pular" (skip/skip setup)
                if (lowerText.includes('skip') || lowerText.includes('pular')) {
                  console.log(`✅ Found "Skip" button with text: "${trimmedText}", clicking it...`);
                  await button.scrollIntoViewIfNeeded();
                  await button.click({ timeout: 5000 });
                  await page.waitForTimeout(3000);
                  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {});
                  currentUrl = page.url();
                  console.log('✅ URL after clicking Skip:', currentUrl);
                  skipClicked = true;
                  
                  // Check if we're redirected now
                  isRedirectedToApp = currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
                  if (isRedirectedToApp) {
                    console.log('✅ Redirected to app after clicking Skip');
                    break;
                  }
                }
                }
              } catch (e) {
                // Continue to next element
              }
            }
            if (skipClicked && isRedirectedToApp) break;
          }
        } catch (e) {
          // Continue to next selector
        }
      }
      
      // If still not redirected, look for "Skip set up" button
      if (!isRedirectedToApp && skipClicked) {
        await page.waitForTimeout(2000);
        currentUrl = page.url();
        isRedirectedToApp = currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
      }
      
      if (!isRedirectedToApp) {
        console.log('Still not redirected, looking for "Skip set up" button...');
        const skipSetupSelectors = [
          page.getByRole('button', { name: /skip set up/i }),
          page.getByRole('link', { name: /skip set up/i }),
          page.locator('button:has-text("Skip set up")'),
          page.locator('a:has-text("Skip set up")'),
          page.locator('button:has-text("Skip setup")'),
          page.locator('a:has-text("Skip setup")'),
          page.locator('[aria-label*="Skip set up" i]'),
          page.locator('[aria-label*="Skip setup" i]'),
        ];
        
        for (const skipSetupButton of skipSetupSelectors) {
          try {
            const count = await skipSetupButton.count();
            if (count > 0) {
              const isVisible = await skipSetupButton.first().isVisible({ timeout: 2000 }).catch(() => false);
              if (isVisible) {
                console.log('Found "Skip set up" button, clicking it...');
                await skipSetupButton.first().click();
                await page.waitForTimeout(3000);
                currentUrl = page.url();
                console.log('URL after clicking Skip set up:', currentUrl);
                
                // Check if we're redirected now
                isRedirectedToApp = currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
                if (isRedirectedToApp) {
                  console.log('✅ Redirected to app after clicking Skip set up');
                  break;
                }
              }
            }
          } catch (e) {
            // Continue to next selector
          }
        }
      }
    } catch (error) {
      console.log('Error looking for Skip buttons:', error.message);
    }
  }
  
  // Check for error messages immediately
  try {
    // Wait a bit for error messages to appear if they exist
    await page.waitForTimeout(2000);
    
    // Check for visible error elements
    const errorSelectors = [
      '#errorText',
      '#usernameError', 
      '#passwordError',
      '.error',
      '[role="alert"]',
      '[id*="error"]',
      '[class*="error"]',
      '.alert-danger',
      '#loginErrorMessage'
    ];
    
    for (const selector of errorSelectors) {
      try {
        const errorElement = page.locator(selector).first();
        if (await errorElement.count() > 0) {
          const isVisible = await errorElement.isVisible().catch(() => false);
          if (isVisible) {
            const errorText = await errorElement.textContent();
            if (errorText && errorText.trim() && errorText.trim().length > 0) {
              console.error('❌ Error message found:', errorText);
              // Take screenshot for debugging
              await page.screenshot({ path: 'playwright/.auth/auth-error.png', fullPage: true });
              throw new Error(`Authentication failed: ${errorText}`);
            }
          }
        }
      } catch (error) {
        if (error.message.includes('Authentication failed')) {
          throw error;
        }
        // Continue checking other selectors
      }
    }
    
    // Also check body text for common error keywords
    const bodyText = await page.locator('body').textContent();
    if (bodyText) {
      const lowerText = bodyText.toLowerCase();
      if (lowerText.includes('incorrect password') || 
          lowerText.includes('wrong password') ||
          lowerText.includes('invalid password') ||
          (lowerText.includes('password') && lowerText.includes('incorrect'))) {
        console.error('❌ Password error detected in page text');
        await page.screenshot({ path: 'playwright/.auth/auth-error.png', fullPage: true });
        throw new Error('Authentication failed: Incorrect password');
      }
      if (lowerText.includes('account') && lowerText.includes('locked')) {
        console.error('❌ Account locked');
        throw new Error('Authentication failed: Account is locked');
      }
      if (lowerText.includes('mfa') || lowerText.includes('multi-factor') || lowerText.includes('verification code')) {
        console.error('❌ MFA required');
        throw new Error('Authentication failed: Account requires MFA');
      }
    }
  } catch (error) {
    if (error.message.includes('Authentication failed')) {
      throw error;
    }
    // Other errors, continue
  }
  
  // If still on Microsoft login page, wait for navigation
  if (currentUrl.includes('login.microsoftonline.com') && currentUrl.includes('/login')) {
    console.log('Still on Microsoft login page, waiting for navigation...');
    try {
      // Wait for URL to change away from /login
      await Promise.race([
        page.waitForURL((url) => !url.includes('/login') || url.includes('rha-patient'), { timeout: 60000 }),
        page.waitForURL(/rha-patient/i, { timeout: 60000 })
      ]);
      currentUrl = page.url();
      console.log('✅ URL changed to:', currentUrl);
    } catch (error) {
      // Navigation didn't happen - take screenshot and check for errors again
      console.log('⚠️ No navigation occurred, checking for errors...');
      currentUrl = page.url();
      
      // Ensure .auth directory exists for screenshot
      const fs = require('fs');
      const path = require('path');
      const authDir = path.join(__dirname, '../.auth');
      if (!fs.existsSync(authDir)) {
        fs.mkdirSync(authDir, { recursive: true });
      }
      
      await page.screenshot({ path: path.join(authDir, 'no-navigation.png'), fullPage: true });
      console.log('Screenshot saved to playwright/.auth/no-navigation.png');
      
      // Final error check - look for any visible error text
      const finalBodyText = await page.locator('body').textContent();
      console.log('Page text sample:', finalBodyText ? finalBodyText.substring(0, 500) : 'No text');
      
      // Check if password field still exists (means we're still on login page)
      const passwordFieldStillVisible = await page.locator('input[type="password"]').isVisible().catch(() => false);
      
      // Get all visible text to check for errors
      // Exclude common page titles and non-error text
      const excludeTexts = [
        'Sign in to your account',
        'Let\'s keep your account secure',
        'We\'ll help you set up another way to verify it\'s you.',
        'Use a different account',
        'Learn more about verifying your identity',
        'Terms of use',
        'Privacy & cookies',
        'svc-pacenet-test2@rhanet.org'
      ];
      
      let visibleErrorText = '';
      try {
        // Try to get visible error messages
        const errorElements = await page.locator('*:visible').all();
        for (const element of errorElements.slice(0, 50)) { // Check first 50 visible elements
          const text = await element.textContent().catch(() => '');
          if (text && text.trim().length > 0) {
            // Check if it's not one of the excluded texts
            const isExcluded = excludeTexts.some(exclude => 
              text.toLowerCase().includes(exclude.toLowerCase())
            );
            if (!isExcluded && 
                (text.toLowerCase().includes('incorrect') || 
                 text.toLowerCase().includes('wrong password') ||
                 text.toLowerCase().includes('invalid password') ||
                 (text.toLowerCase().includes('error') && !text.toLowerCase().includes('error occurred')))) {
              visibleErrorText = text;
              break;
            }
          }
        }
      } catch (e) {
        // Ignore errors getting text
      }
      
      if (passwordFieldStillVisible) {
        console.error('❌ Password field still visible - authentication did not succeed');
        if (visibleErrorText) {
          console.error('Error text found:', visibleErrorText);
          throw new Error(`Authentication failed: ${visibleErrorText}`);
        }
        throw new Error(`Authentication failed: Still on login page. URL: ${currentUrl}. Check screenshot at playwright/.auth/no-navigation.png for details.`);
      }
      
      if (visibleErrorText) {
        console.error('Error text found:', visibleErrorText);
        throw new Error(`Authentication failed: ${visibleErrorText}`);
      }
      
      // One final attempt - wait longer and try clicking any submit button
      console.log('Making final attempt - waiting longer and checking for any buttons...');
      await page.waitForTimeout(5000);
      currentUrl = page.url();
      console.log('Current URL in final attempt:', currentUrl);
      isRedirectedToApp = currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net');
      
      // Check if we're on registration page - if so, wait for it to load properly
      if (!isRedirectedToApp && (currentUrl.includes('mysignins.microsoft.com') || currentUrl.includes('/register'))) {
        console.log('✅ On registration page in final attempt, waiting for page to fully load...');
        console.log('✅ On registration page in final attempt, waiting for page to fully load...');
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await page.waitForTimeout(10000);
        
        // Wait for React to render - check for actual content
        try {
          await page.waitForFunction(
            () => {
              const body = document.body;
              const text = body ? body.innerText || body.textContent || '' : '';
              // Check for Portuguese text "Pular" or English "Skip" to confirm page loaded
              return text.length > 100 && (text.includes('Pular') || text.includes('Skip') || text.includes('Próximo') || text.includes('Next'));
            },
            { timeout: 30000 }
          );
          console.log('✅ Registration page content rendered');
        } catch (e) {
          console.log('⚠️ Registration page content check timeout, but continuing...');
        }
        
        // Now look for Skip buttons (English "Skip" or Portuguese "Pular")
        console.log('Looking for Skip buttons on registration page...');
        // First, try to find by searching all buttons/links for "Pular" or "Skip" text
        try {
          const allClickable = await page.locator('button, a, [role="button"], [role="link"]').all();
          console.log(`Found ${allClickable.length} clickable elements, searching for Skip button...`);
          for (const element of allClickable.slice(0, 30)) {
            try {
              const isVisible = await element.isVisible({ timeout: 2000 }).catch(() => false);
              if (isVisible) {
                const elementText = await element.textContent().catch(() => '');
                const lowerText = (elementText || '').toLowerCase();
                // Look for "Pular" (Portuguese) or "Skip" (English) - be more flexible
                if (lowerText.includes('pular') || lowerText.includes('skip') || 
                    lowerText.includes('configuração') || lowerText.includes('setup')) {
                  console.log(`✅ Found Skip button by searching all elements: "${elementText}", clicking...`);
                  await element.scrollIntoViewIfNeeded();
                  await element.click({ timeout: 5000 });
                  await page.waitForTimeout(5000);
                  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
                  currentUrl = page.url();
                  console.log('Current URL after clicking Skip:', currentUrl);
                  if (currentUrl.includes('rha-patient')) {
                    console.log('✅ Redirected to app after clicking Skip');
                    isRedirectedToApp = true;
                    break;
                  }
                }
              }
            } catch (e) {
              // Continue
            }
          }
        } catch (e) {
          console.log('Error searching all elements:', e.message);
        }
        
        // Also try specific selectors
        const skipSelectors = [
          () => page.getByRole('button', { name: /skip/i }),
          () => page.getByRole('link', { name: /skip/i }),
          () => page.locator('button:has-text("Skip")'),
          () => page.locator('a:has-text("Skip")'),
          // Portuguese: "Pular a configuração" = "Skip the setup"
          () => page.getByRole('button', { name: /pular/i }),
          () => page.getByRole('link', { name: /pular/i }),
          () => page.locator('button:has-text("Pular")'),
          () => page.locator('a:has-text("Pular")'),
          () => page.locator('button').filter({ hasText: /pular/i }),
          () => page.locator('a').filter({ hasText: /pular/i }),
        ];
        
        for (const selectorFn of skipSelectors) {
          try {
            const skipButton = selectorFn();
            const count = await skipButton.count();
            if (count > 0) {
              // Try each matching element
              for (let i = 0; i < count; i++) {
                try {
                  const button = skipButton.nth(i);
                  const isVisible = await button.isVisible({ timeout: 5000 }).catch(() => false);
                  if (isVisible) {
                    const buttonText = await button.textContent().catch(() => '');
                    const lowerText = (buttonText || '').toLowerCase();
                    // Check for English "Skip" or Portuguese "Pular" (skip/skip setup)
                    if (lowerText.includes('skip') || lowerText.includes('pular')) {
                      console.log(`✅ Found Skip button: "${buttonText}", clicking...`);
                      await button.scrollIntoViewIfNeeded();
                      await button.click({ timeout: 5000 });
                      await page.waitForTimeout(5000);
                      await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
                      currentUrl = page.url();
                      console.log('Current URL after clicking Skip:', currentUrl);
                      if (currentUrl.includes('rha-patient')) {
                        console.log('✅ Redirected to app after clicking Skip');
                        isRedirectedToApp = true;
                        break;
                      }
                    }
                  }
                } catch (e) {
                  // Continue to next element
                }
              }
              if (isRedirectedToApp) break;
            }
          } catch (e) {
            // Continue to next selector
          }
        }
        
        // If still not redirected, try finding any button with "Pular" or "Skip" text
        if (!isRedirectedToApp) {
          console.log('Trying to find Skip button by searching all buttons...');
          try {
            const allButtons = await page.locator('button, a').all();
            for (const button of allButtons.slice(0, 20)) {
              try {
                const isVisible = await button.isVisible({ timeout: 2000 }).catch(() => false);
                if (isVisible) {
                  const buttonText = await button.textContent().catch(() => '');
                  const lowerText = (buttonText || '').toLowerCase();
                  if (lowerText.includes('pular') || lowerText.includes('skip')) {
                    console.log(`✅ Found Skip button by searching: "${buttonText}", clicking...`);
                    await button.scrollIntoViewIfNeeded();
                    await button.click({ timeout: 5000 });
                    await page.waitForTimeout(5000);
                    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
                    currentUrl = page.url();
                    if (currentUrl.includes('rha-patient')) {
                      console.log('✅ Redirected to app after clicking Skip');
                      isRedirectedToApp = true;
                      break;
                    }
                  }
                }
              } catch (e) {
                // Continue
              }
            }
          } catch (e) {
            console.log('Error searching all buttons:', e.message);
          }
        }
      }
      
      if (!isRedirectedToApp) {
        // Try clicking any visible submit/continue button as last resort
        try {
          const allButtons = await page.locator('button, input[type="submit"], input[type="button"]').all();
          for (const button of allButtons.slice(0, 10)) { // Check first 10 buttons
            try {
              const isVisible = await button.isVisible({ timeout: 1000 }).catch(() => false);
              if (isVisible) {
                const buttonText = await button.textContent().catch(() => '');
                const buttonValue = await button.getAttribute('value').catch(() => '');
                const text = (buttonText || buttonValue || '').trim().toLowerCase();
                
                // Look for buttons that might help (Next, Continue, Sign in, Submit, etc.)
                // Also check for Portuguese "Próximo" (Next)
                const lowerText = text.toLowerCase();
                if (lowerText.includes('next') || lowerText.includes('próximo') || lowerText.includes('proximo') ||
                    lowerText.includes('continue') || lowerText.includes('continuar') ||
                    lowerText.includes('sign in') || lowerText.includes('entrar') ||
                    lowerText.includes('submit') || text === '' || text.length < 20) { // Empty or short text might be submit buttons
                  console.log(`Trying to click button with text: "${buttonText || buttonValue}"`);
                  await button.click();
                  await page.waitForTimeout(5000);
                  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
                  currentUrl = page.url();
                  console.log('Current URL after clicking button:', currentUrl);
                  
                  // If we navigated to registration page, handle it
                  if (currentUrl.includes('mysignins.microsoft.com') || currentUrl.includes('/register')) {
                    console.log('✅ Navigated to registration page after clicking button, now looking for Skip...');
                    // Re-run the registration page handling
                    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
                    await page.waitForTimeout(10000);
                    
                    // Search for Skip button
                    const allClickable = await page.locator('button, a, [role="button"], [role="link"]').all();
                    console.log(`Found ${allClickable.length} clickable elements on registration page, searching for Skip...`);
                    for (const element of allClickable.slice(0, 30)) {
                      try {
                        const isVisible = await element.isVisible({ timeout: 2000 }).catch(() => false);
                        if (isVisible) {
                          const elementText = await element.textContent().catch(() => '');
                          const lowerElementText = (elementText || '').toLowerCase();
                          if (lowerElementText.includes('pular') || lowerElementText.includes('skip') || 
                              lowerElementText.includes('configuração') || lowerElementText.includes('setup')) {
                            console.log(`✅ Found Skip button: "${elementText}", clicking...`);
                            await element.scrollIntoViewIfNeeded();
                            await element.click({ timeout: 5000 });
                            await page.waitForTimeout(5000);
                            await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
                            currentUrl = page.url();
                            if (currentUrl.includes('rha-patient')) {
                              console.log('✅ Redirected to app after clicking Skip');
                              isRedirectedToApp = true;
                              break;
                            }
                          }
                        }
                      } catch (e) {
                        // Continue
                      }
                    }
                  }
                  
                  if (currentUrl.includes('rha-patient')) {
                    console.log('✅ Redirected after clicking button');
                    isRedirectedToApp = true;
                    break;
                  }
                }
              }
            } catch (e) {
              // Continue to next button
            }
          }
        } catch (e) {
          console.log('Error trying final button click:', e.message);
        }
      }
      
      if (!isRedirectedToApp) {
        // Take a detailed screenshot before throwing error
        await page.screenshot({ path: 'playwright/.auth/no-navigation-final.png', fullPage: true });
        const pageText = await page.locator('body').textContent().catch(() => '');
        console.error('Page text sample:', pageText ? pageText.substring(0, 500) : 'No text found');
        throw new Error(`Authentication failed: No redirect occurred. Still on: ${currentUrl}. Check screenshots at playwright/.auth/ for details.`);
      }
    }
  }
  
  // Handle "Stay signed in?" prompt if it appears
  try {
    const staySignedInButton = page.locator('input[type="submit"][value*="Yes"], #idSIButton9, button:has-text("Yes")').first();
    await staySignedInButton.waitFor({ state: 'visible', timeout: 5000 });
    await staySignedInButton.click();
    console.log('Handled "Stay signed in?" prompt');
    await page.waitForTimeout(2000);
    currentUrl = page.url();
    console.log('URL after stay signed in:', currentUrl);
  } catch (error) {
    // Prompt didn't appear, which is fine
    console.log('No "Stay signed in?" prompt appeared');
  }
  
  // Check if we're already on our application domain
  if (currentUrl.includes('rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net')) {
    console.log('✅ Already on application domain');
  } else if (currentUrl.includes('login.microsoftonline.com') || currentUrl.includes('login.live.com')) {
    // Still on Microsoft domain - wait for redirect
    console.log('Still on Microsoft domain, waiting for redirect...');
    try {
      await page.waitForURL(/rha-patient-hgcya0gsd6e4gnde\.eastus-01\.azurewebsites\.net/i, { timeout: 60000 });
      console.log('✅ Redirected to application domain');
      currentUrl = page.url();
    } catch (error) {
      console.log('⚠️ Timeout waiting for redirect');
      currentUrl = page.url();
      console.log('Final URL:', currentUrl);
      
      // Check for specific error messages
      const errorSelectors = [
        '#errorText',
        '.error',
        '[role="alert"]',
        '#usernameError',
        '#passwordError'
      ];
      
      for (const selector of errorSelectors) {
        const errorElement = page.locator(selector).first();
        if (await errorElement.count() > 0) {
          const errorText = await errorElement.textContent();
          if (errorText && errorText.trim()) {
            console.error('❌ Error message found:', errorText);
            throw new Error(`Authentication failed: ${errorText}`);
          }
        }
      }
      
      throw new Error(`Still on Microsoft domain after authentication. URL: ${currentUrl}`);
    }
  }
  
  // Wait for the callback to process and redirect to the final destination
  const appUrl = page.url();
  console.log('Application URL:', appUrl);
  
  // After authentication, navigate to /employee/provider (provider portal)
  // The baseURL is /employee/, so /provider resolves to /employee/provider
  if (!appUrl.includes('/provider') && !appUrl.includes('/auth/callback')) {
    console.log('Navigating to provider portal (/employee/provider)...');
    try {
      // Use relative path - baseURL is /employee/, so /provider becomes /employee/provider
      await page.goto('/provider');
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      await page.waitForTimeout(2000); // Wait for page to render
      console.log('✅ Navigated to provider portal');
    } catch (error) {
      console.log('⚠️ Could not navigate to /provider, current URL:', page.url());
    }
  }
  
  // If we're on /auth/callback, wait for redirect then navigate to provider
  if (page.url().includes('/auth/callback')) {
    console.log('On /auth/callback, waiting for redirect...');
    try {
      await page.waitForURL(/\/employee|\/provider/i, { timeout: 30000 });
      console.log('✅ Redirected from callback');
      // Navigate to provider portal
      if (!page.url().includes('/provider')) {
        await page.goto('/provider');
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
        await page.waitForTimeout(2000);
      }
    } catch (error) {
      console.log('⚠️ Timeout waiting for redirect, navigating directly to /provider...');
      await page.goto('/provider');
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    }
  }
  
  // Final check - ensure we're on provider portal
  const finalUrl = page.url();
  if (!finalUrl.includes('/provider')) {
    console.log('Not on provider portal, navigating...');
    await page.goto('/provider');
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  }
  
  console.log('✅ Authentication completed successfully');
  console.log('Final URL:', page.url());
  
  // Wait a bit for the page to fully load
  await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
    console.log('Network idle timeout, continuing...');
  });
}

module.exports = { login };

