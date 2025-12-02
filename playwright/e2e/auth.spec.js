const { test, expect } = require('@playwright/test');
const { login } = require('../support/auth');

test.describe('Authentication', () => {
  test('@ui Login flow works end-to-end', async ({ page }) => {
    // Perform login
    await login(page);
    
    // After login, navigate to provider portal if needed
    const currentUrl = page.url();
    if (currentUrl.includes('/employee') && !currentUrl.includes('/provider')) {
      await page.goto('/employee/provider');
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    }
    
    // Verify we're on the provider portal - accept /employee/provider or /provider
    const finalUrl = page.url();
    expect(finalUrl.includes('/provider') || finalUrl.includes('/employee')).toBe(true);
    
    // Verify page content indicates successful login
    await expect(page.getByText('Provider Portal')).toBeVisible({ timeout: 15000 });
    
    // Verify cookies are set
    const cookies = await page.context().cookies();
    expect(cookies.length).toBeGreaterThan(0);
    
    // Verify we have authentication cookies
    const authCookies = cookies.filter(cookie => 
      cookie.name.includes('auth') || 
      cookie.name.includes('session') ||
      cookie.name.includes('token')
    );
    expect(authCookies.length).toBeGreaterThan(0);
  });
});

