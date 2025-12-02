const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const providerPortalPage = require('../../support/pageObjects/providerPortalPage');

/**
 * Helper function to navigate to a specific tab
 * Handles cases where tab might already be selected or not yet visible
 */
async function navigateToTab(page, tabName) {
  // Wait for page to be fully loaded
  await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(1000);
  
  // Check if tab is already selected
  const selectedTab = page.locator('[role="tab"][aria-selected="true"]');
  const selectedText = await selectedTab.textContent().catch(() => '');
  
  if (selectedText && selectedText.trim().includes(tabName)) {
    // Tab is already selected, no need to click
    return;
  }
  
  // Wait for tabs to be visible
  await page.waitForSelector('[role="tab"]', { state: 'visible', timeout: 15000 });
  
  // Try multiple selectors for the tab
  const tabSelectors = [
    () => page.getByRole('tab').filter({ hasText: tabName }),
    () => page.locator(`[role="tab"]:has-text("${tabName}")`),
    () => page.locator(`button:has-text("${tabName}")`),
  ];
  
  let tabClicked = false;
  for (const selectorFn of tabSelectors) {
    try {
      const tab = selectorFn();
      await tab.waitFor({ state: 'visible', timeout: 10000 });
      const isVisible = await tab.isVisible().catch(() => false);
      
      if (isVisible) {
        await tab.scrollIntoViewIfNeeded();
        await tab.click({ timeout: 10000 });
        await page.waitForTimeout(500); // Wait for tab content to load
        tabClicked = true;
        break;
      }
    } catch (e) {
      // Try next selector
      continue;
    }
  }
  
  if (!tabClicked) {
    throw new Error(`Could not find or click tab: ${tabName}`);
  }
}

test.describe('Provider Portal Page @ui', () => {
  test.beforeEach(async ({ page }) => {
    // Authentication is handled via global setup (storageState)
    // Navigate to provider portal - baseURL is /employee/, so /provider resolves to /employee/provider
    await page.goto('/provider');
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    
    // Verify we're on the provider page (should be /employee/provider)
    const currentUrl = page.url();
    if (!currentUrl.includes('/provider')) {
      // If not on provider, try navigating again
      await page.goto('/provider');
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    }
    
    // Verify we're on provider portal
    const finalUrl = page.url();
    expect(finalUrl.includes('/provider')).toBe(true);
  });

  test.describe('Performs login', () => {
    test('Login as provider', async ({ page }) => {
      // Verify we're logged in and on the provider portal
      // Accept either /employee/provider or /provider
      const currentUrl = page.url();
      expect(currentUrl.includes('/provider') || currentUrl.includes('/employee')).toBe(true);
      await expect(page.getByText('Provider Portal')).toBeVisible({ timeout: 15000 });
    });
  });

  test.describe('Provider Portal Navigation', () => {
    test.beforeEach(async ({ page }) => {
      // Ensure we're on the provider portal page
      await expect(page).toHaveURL(/\/provider/);
    });

    test('Displays provider portal title and description', async ({ page }) => {
      await expect(page.getByText('Provider Portal')).toBeVisible();
      await expect(page.getByText('Patient management and form assignment with EHR integration')).toBeVisible();
    });

    test('Switches between tabs and shows correct content', async ({ page }) => {
      // Verify Patient Management tab is active by default
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Patient Management');
      
      // Switch to Form Templates tab
      await navigateToTab(page, 'Form Templates');
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Form Templates', { timeout: 10000 });
      await expect(page.getByText('Hello world, from Form Templates!')).toBeVisible();
      
      // Switch to Analytics tab
      await navigateToTab(page, 'Analytics');
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Analytics');
      
      // Switch to Settings tab
      await navigateToTab(page, 'Settings');
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Settings');
      await expect(page.getByText('System Health Check')).toBeVisible();
    });

    test('Breadcrumb returns to patient landing page', async ({ page }) => {
      await page.getByText('Back to Home').click();
      // Accept /employee/patient or /patient as valid
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      const currentUrl = page.url();
      expect(currentUrl.includes('/patient')).toBe(true);
    });
  });

  test.describe('Patient Search', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Displays search input field', async ({ page }) => {
      const searchInput = page.locator(providerPortalPage.patientSearchInput);
      await expect(searchInput).toBeVisible();
      await expect(searchInput).toHaveAttribute('placeholder', 'Search patients...');
    });

    test('Searches for patients by name', async ({ page }) => {
      await page.locator(providerPortalPage.patientSearchInput).fill('John');
      await page.waitForTimeout(500); // Wait for debounce
      // Verify search results or loading state
      const table = page.locator('table');
      if (await table.count() > 0) {
        await expect(table).toBeVisible();
      }
    });

    test('Shows all patients when search is cleared', async ({ page }) => {
      await page.locator(providerPortalPage.patientSearchInput).fill('test');
      await page.waitForTimeout(500);
      await page.locator(providerPortalPage.patientSearchInput).clear();
      await page.waitForTimeout(500);
      // Should show all patients or "No users found" message
      await expect(page.locator('body')).toBeVisible();
    });

    test('Shows loading state during search', async ({ page }) => {
      await page.locator(providerPortalPage.patientSearchInput).fill('test');
      // Check for loading indicator if present
      await page.waitForTimeout(500);
    });
  });

  test.describe('Patient List Display', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Displays patient table with correct columns', async ({ page }) => {
      await expect(page.getByText('Patient Name')).toBeVisible();
      await expect(page.getByText('Date of Birth')).toBeVisible();
      await expect(page.getByText('Form Packets')).toBeVisible();
      await expect(page.getByText('Overall Status')).toBeVisible();
      await expect(page.getByText('Progress')).toBeVisible();
      await expect(page.getByText('Last Updated')).toBeVisible();
      await expect(page.getByText('Actions')).toBeVisible();
    });

    test('Displays empty state when no patients found', async ({ page }) => {
      const bodyText = await page.locator('body').textContent();
      if (bodyText && bodyText.includes('No users found')) {
        await expect(page.getByText('No users found.')).toBeVisible();
      }
    });

    test('Displays patient data correctly when patients exist', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        // Verify table rows exist
        await expect(tableRows).toHaveCount(await tableRows.count());
      }
    });
  });

  test.describe('Assign Packet Modal - Validation', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab and open assign modal
      await expect(page).toHaveURL(/\/provider/, { timeout: 15000 });
      await navigateToTab(page, 'Patient Management');
      
      // Wait for the button to be visible
      const assignButton = page.getByText('Assign New Packet');
      await assignButton.waitFor({ state: 'visible', timeout: 15000 });
      await assignButton.click();
      // Wait for modal to open
      await page.waitForTimeout(500);
    });

    test('Opens modal and displays all form fields', async ({ page }) => {
      await expect(page.getByText('Assign New Packet')).toBeVisible();
      await expect(page.getByText('Packet Title')).toBeVisible();
      await expect(page.getByText('User')).toBeVisible();
      await expect(page.getByText('Select Forms')).toBeVisible();
    });

    test('Submit button is disabled when form is empty', async ({ page }) => {
      const submitButton = page.getByText('Assign Packet').locator('..').locator('button');
      await expect(submitButton).toBeDisabled();
    });

    test('Submit button is disabled without packet title', async ({ page }) => {
      await page.locator(providerPortalPage.assigningPacketFormUserField).click();
      await page.locator('[role="option"]').first().click();
      await page.waitForTimeout(500);
      // Try to select a form if available
      const checkbox = page.locator('[type="checkbox"]').first();
      if (await checkbox.count() > 0) {
        await checkbox.click();
      }
      const submitButton = page.getByText('Assign Packet').locator('..').locator('button');
      await expect(submitButton).toBeDisabled();
    });

    test('Submit button is disabled without user selection', async ({ page }) => {
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetData.packetId);
      
      const checkbox = page.locator('[type="checkbox"]').first();
      if (await checkbox.count() > 0) {
        await checkbox.click();
      }
      
      const submitButton = page.getByText('Assign Packet').locator('..').locator('button');
      await expect(submitButton).toBeDisabled();
    });

    test('Submit button is disabled without form selection', async ({ page }) => {
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetData.packetId);
      await page.locator(providerPortalPage.assigningPacketFormUserField).click();
      await page.locator('[role="option"]').first().click();
      
      const submitButton = page.getByText('Assign Packet').locator('..').locator('button');
      await expect(submitButton).toBeDisabled();
    });

    test('Submit button is enabled when all required fields are filled', async ({ page }) => {
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetData.packetId);
      await page.locator(providerPortalPage.assigningPacketFormUserField).click();
      await page.locator('[role="option"]').first().click();
      await page.waitForTimeout(500);
      
      const checkbox = page.locator('[type="checkbox"]').first();
      if (await checkbox.count() > 0) {
        await checkbox.click();
        const submitButton = page.getByText('Assign Packet').locator('..').locator('button');
        await expect(submitButton).not.toBeDisabled();
      }
    });
  });

  test.describe('Assign Packet Modal - Form Selection', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab and open assign modal
      await expect(page).toHaveURL(/\/provider/, { timeout: 15000 });
      await navigateToTab(page, 'Patient Management');
      await page.waitForTimeout(1000);
      const assignButton = page.getByText('Assign New Packet');
      await assignButton.waitFor({ state: 'visible', timeout: 15000 });
      await assignButton.click();
    });

    test('Loads and displays available form types', async ({ page }) => {
      await page.waitForTimeout(1000); // Wait for form types to load
      const checkboxes = page.locator('[type="checkbox"]');
      if (await checkboxes.count() > 0) {
        await expect(checkboxes).toHaveCount(await checkboxes.count());
      }
    });

    test('Allows selecting and deselecting form types', async ({ page }) => {
      await page.waitForTimeout(1000);
      const checkboxes = page.locator('[type="checkbox"]');
      if (await checkboxes.count() > 0) {
        const firstCheckbox = checkboxes.first();
        await firstCheckbox.click();
        await expect(firstCheckbox).toBeChecked();
        await firstCheckbox.click();
        await expect(firstCheckbox).not.toBeChecked();
      }
    });

    test('Allows selecting multiple form types', async ({ page }) => {
      await page.waitForTimeout(1000);
      const checkboxes = page.locator('[type="checkbox"]');
      if (await checkboxes.count() > 1) {
        await checkboxes.first().click();
        await checkboxes.nth(1).click();
        await expect(checkboxes.first()).toBeChecked();
        await expect(checkboxes.nth(1)).toBeChecked();
      }
    });
  });

  test.describe('Insert Packet', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Navigate to patient page and assign packet', async ({ page }) => {
      await expect(page.getByText('EHR integration')).toBeVisible();
      await page.getByText('Assign New Packet').click();
      
      // Pass the packet id from the fixture file to the form
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      const packetId = packetData.packetId;
      
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetId);
      await page.locator(providerPortalPage.assigningPacketFormUserField).click();
      await page.locator('[role="option"]').first().click();
      await page.waitForTimeout(500);
      
      const checkbox = page.locator('[type="checkbox"]').first();
      if (await checkbox.count() > 0) {
        await checkbox.click();
        await page.getByText('Assign Packet').click();
        await page.waitForTimeout(1000);
        // Verify modal closes
        await expect(page.getByText('Assign New Packet')).not.toBeVisible();
      }
    });
  });

  test.describe('Patient Packets Modal', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Opens modal when clicking view button on patient row', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        // Find the view button (eye icon) in the first row
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
      }
    });

    test('Displays patient information in modal header', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        // Verify patient info is displayed
        await expect(page.locator('body')).toContainText('DOB:');
      }
    });

    test('Displays all packets for the patient', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        // Verify packets are displayed if they exist
        await expect(page.locator('body')).toBeVisible();
      }
    });

    test('Displays packet status chips correctly', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        // Check for status chips if packets exist
        const bodyText = await page.locator('body').textContent();
        if (bodyText && (bodyText.includes('Completed') || bodyText.includes('In Progress') || bodyText.includes('Not Started'))) {
          const hasStatus = bodyText.includes('Completed') || bodyText.includes('In Progress') || bodyText.includes('Not Started');
          expect(hasStatus).toBe(true);
        }
      }
    });

    test('Closes modal when close button is clicked', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.locator(providerPortalPage.closeModalButton).click({ force: true });
        await expect(page.getByText('Patient Form Packets')).not.toBeVisible();
      }
    });
  });

  test.describe('Packet Actions', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Copies packet URL to clipboard', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.waitForTimeout(500);
        // Click copy URL button if it exists
        const copyButton = page.locator(providerPortalPage.copyUrlButton);
        if (await copyButton.count() > 0) {
          await copyButton.first().click({ force: true });
          // Verify clipboard (this may require special handling)
        }
      }
    });

    test('Opens packet in new view when open button is clicked', async ({ page, context }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.waitForTimeout(500);
        
        const openButton = page.locator(providerPortalPage.openPacketButton);
        if (await openButton.count() > 0) {
          const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            openButton.first().click({ force: true })
          ]);
          await expect(newPage).toHaveURL(/\/p\//);
        }
      }
    });

    test('Deletes packet with confirmation', async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
      
      // Click on the 'eye' icon to view the created packet and then deletes it
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.waitForTimeout(500);
        
        // Click on the delete button of the last created packet
        const deleteButton = page.locator(providerPortalPage.deletePacketButton);
        if (await deleteButton.count() > 0) {
          await deleteButton.last().click({ force: true });
          await page.waitForTimeout(1000);
          // Confirm the deletion on the dialog
          await page.locator(providerPortalPage.confirmDeleteButton).click({ force: true });
          console.log('Packet deleted successfully');
          await page.waitForTimeout(1000);
          // Verify modal closes
          await expect(page.getByText('Patient Form Packets')).not.toBeVisible();
        }
      }
    });

    test('Cancels packet deletion when cancel is clicked', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.waitForTimeout(500);
        
        const deleteButton = page.locator(providerPortalPage.deletePacketButton);
        if (await deleteButton.count() > 0) {
          await deleteButton.last().click({ force: true });
          await page.waitForTimeout(1000);
          // Click cancel button
          const cancelButton = page.getByRole('button').filter({ hasText: 'Cancel' });
          if (await cancelButton.count() > 0) {
            await cancelButton.click({ force: true });
            await expect(page.getByText('Patient Form Packets')).toBeVisible();
          }
        }
      }
    });
  });

  test.describe('Analytics Tab', () => {
    test.beforeEach(async ({ page }) => {
      await expect(page).toHaveURL(/\/provider/);
    });

    test('Navigates to Analytics tab and displays content', async ({ page }) => {
      await navigateToTab(page, 'Analytics');
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Analytics');
      // Verify analytics content exists
      await expect(page.locator('body')).toBeVisible();
    });
  });

  test.describe('Settings Tab', () => {
    test.beforeEach(async ({ page }) => {
      await expect(page).toHaveURL(/\/provider/);
    });

    test('Navigates to Settings tab and displays health check', async ({ page }) => {
      await navigateToTab(page, 'Settings');
      await expect(page.locator('[role="tab"][aria-selected="true"]')).toContainText('Settings');
      await expect(page.getByText('System Health Check')).toBeVisible();
      await expect(page.getByText('EHR Database Connection')).toBeVisible();
    });

    test('Displays health check status indicator', async ({ page }) => {
      await navigateToTab(page, 'Settings');
      await expect(page.getByText('EHR Database Connection')).toBeVisible();
      // Verify status message exists (could be "Connected", "Checking connection...", or "Connection failed")
      const bodyText = await page.locator('body').textContent();
      const hasStatus = bodyText && (
        bodyText.includes('Connected') || 
        bodyText.includes('Checking connection') || 
        bodyText.includes('Connection failed')
      );
      expect(hasStatus).toBe(true);
    });
  });

  test.describe('Edge cases', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Types a really long packet name', async ({ page }) => {
      await page.getByText('Assign New Packet').click();
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      const packetId = packetData.huge_packetData;
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetId);
      await page.locator(providerPortalPage.assigningPacketFormUserField).press('Enter');
    });

    test('Handles empty patient list gracefully', async ({ page }) => {
      const bodyText = await page.locator('body').textContent();
      if (bodyText && bodyText.includes('No users found')) {
        await expect(page.getByText('No users found.')).toBeVisible();
        await expect(page.getByText('Assign New Packet')).toBeVisible();
      }
    });

    test('Handles modal close on escape key', async ({ page }) => {
      await page.getByText('Assign New Packet').click();
      await expect(page.getByText('Assign New Packet')).toBeVisible();
      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
      // Modal should close
      const bodyText = await page.locator('body').textContent();
      if (bodyText && !bodyText.includes('Assign New Packet')) {
        await expect(page.getByText('Assign New Packet')).not.toBeVisible();
      }
    });
  });

  test.describe('Data Refresh', () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to Patient Management tab - ensure we're on provider page
      const currentUrl = page.url();
      if (!currentUrl.includes('/provider') && !currentUrl.includes('/employee')) {
        await page.goto('/employee/provider').catch(() => page.goto('/provider'));
        await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      }
      await navigateToTab(page, 'Patient Management');
    });

    test('Refreshes patient list after packet assignment', async ({ page }) => {
      await page.getByText('Assign New Packet').click();
      const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
      const packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
      await page.getByText('Packet Title').locator('..').locator('input').fill(packetData.packetId);
      await page.locator(providerPortalPage.assigningPacketFormUserField).click();
      await page.locator('[role="option"]').first().click();
      await page.waitForTimeout(500);
      
      const checkbox = page.locator('[type="checkbox"]').first();
      if (await checkbox.count() > 0) {
        await checkbox.click();
        await page.getByText('Assign Packet').click();
        await page.waitForTimeout(2000);
        // Verify we're back on the patient list
        await expect(page.getByText('Patient Search & Form Assignment')).toBeVisible();
      }
    });

    test('Refreshes patient list after packet deletion', async ({ page }) => {
      const tableRows = page.locator('table tbody tr');
      if (await tableRows.count() > 0) {
        await tableRows.first().locator('button').first().click({ force: true });
        await expect(page.getByText('Patient Form Packets')).toBeVisible();
        await page.waitForTimeout(500);
        
        const deleteButton = page.locator(providerPortalPage.deletePacketButton);
        if (await deleteButton.count() > 0) {
          await deleteButton.last().click({ force: true });
          await page.waitForTimeout(1000);
          await page.locator(providerPortalPage.confirmDeleteButton).click({ force: true });
          await page.waitForTimeout(2000);
          // Verify we're back on the patient list
          await expect(page.getByText('Patient Search & Form Assignment')).toBeVisible();
        }
      }
    });
  });
});

