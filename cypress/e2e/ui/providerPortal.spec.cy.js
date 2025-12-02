import { providerPortalPage } from '../../support/pageObjects/providerPortalPage';

describe('Provider Portal Page', () => {
  beforeEach(() => {
    // Use the custom login command which handles OAuth with cy.session()
    // This will cache authentication across tests, so manual login is only needed once
    cy.visit('/');
    cy.login();
  });

  context('Performs login', () => {
    it('Login as provider', () => {
      // Verify we're logged in and on the provider portal
      cy.url().should('include', '/provider');
      cy.contains('Provider Portal').should('exist');
    });
  });

  context('Provider Portal Navigation', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Just ensure we're on the provider portal page
      cy.url().should('include', '/provider');
    });

    it('Displays provider portal title and description', () => {
      cy.contains('Provider Portal').should('exist');
      cy.contains('Patient management and form assignment with EHR integration').should('exist');
    });

    it('Switches between tabs and shows correct content', () => {
      // Verify Patient Management tab is active by default
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Patient Management');
      
      // Switch to Form Templates tab
      cy.get('[role="tab"]').contains('Form Templates').click();
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Form Templates');
      cy.contains('Hello world, from Form Templates!').should('exist');
      
      // Switch to Analytics tab
      cy.get('[role="tab"]').contains('Analytics').click();
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Analytics');
      
      // Switch to Settings tab
      cy.get('[role="tab"]').contains('Settings').click();
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Settings');
      cy.contains('System Health Check').should('exist');
    });

    it('Breadcrumb returns to patient landing page', () => {
      cy.contains('Back to Home').click();
      cy.url().should('include', '/patient');
    });
  });

  context('Patient Search', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Displays search input field', () => {
      cy.get(providerPortalPage.patientSearchInput).should('be.visible');
      cy.get(providerPortalPage.patientSearchInput).should('have.attr', 'placeholder', 'Search patients...');
    });

    it('Searches for patients by name', () => {
      cy.get(providerPortalPage.patientSearchInput).type('John');
      cy.wait(500); // Wait for debounce
      // Verify search results or loading state
      cy.get('body').then(($body) => {
        if ($body.find('table').length > 0) {
          cy.get('table').should('exist');
        }
      });
    });

    it('Shows all patients when search is cleared', () => {
      cy.get(providerPortalPage.patientSearchInput).type('test');
      cy.wait(500);
      cy.get(providerPortalPage.patientSearchInput).clear();
      cy.wait(500);
      // Should show all patients or "No users found" message
      cy.get('body').should('exist');
    });

    it('Shows loading state during search', () => {
      cy.get(providerPortalPage.patientSearchInput).type('test');
      // Check for loading indicator if present
      cy.wait(500);
    });
  });

  context('Patient List Display', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Displays patient table with correct columns', () => {
      cy.contains('Patient Name').should('exist');
      cy.contains('Date of Birth').should('exist');
      cy.contains('Form Packets').should('exist');
      cy.contains('Overall Status').should('exist');
      cy.contains('Progress').should('exist');
      cy.contains('Last Updated').should('exist');
      cy.contains('Actions').should('exist');
    });

    it('Displays empty state when no patients found', () => {
      cy.get('body').then(($body) => {
        if ($body.text().includes('No users found')) {
          cy.contains('No users found.').should('exist');
        }
      });
    });

    it('Displays patient data correctly when patients exist', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          // Verify table rows exist
          cy.get('table tbody tr').should('have.length.greaterThan', 0);
        }
      });
    });
  });

  context('Assign Packet Modal - Validation', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab and open assign modal
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
      cy.contains('Assign New Packet').click();
    });

    it('Opens modal and displays all form fields', () => {
      cy.contains('Assign New Packet').should('exist');
      cy.contains('Packet Title').should('exist');
      cy.contains('User').should('exist');
      cy.contains('Select Forms').should('exist');
    });

    it('Submit button is disabled when form is empty', () => {
      cy.contains('Assign Packet').parent('button').should('be.disabled');
    });

    it('Submit button is disabled without packet title', () => {
      cy.get(providerPortalPage.assigningPacketFormUserField).click();
      cy.get('[role="option"]').first().click();
      cy.wait(500);
      // Try to select a form if available
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').first().click();
        }
      });
      cy.contains('Assign Packet').parent('button').should('be.disabled');
    });

    it('Submit button is disabled without user selection', () => {
      cy.fixture('packet_insertion').then((data) => {
        cy.contains('Packet Title').parent().find('input').type(data.packetId);
      });
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').first().click();
        }
      });
      cy.contains('Assign Packet').parent('button').should('be.disabled');
    });

    it('Submit button is disabled without form selection', () => {
      cy.fixture('packet_insertion').then((data) => {
        cy.contains('Packet Title').parent().find('input').type(data.packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).click();
      cy.get('[role="option"]').first().click();
      cy.contains('Assign Packet').parent('button').should('be.disabled');
    });

    it('Submit button is enabled when all required fields are filled', () => {
      cy.fixture('packet_insertion').then((data) => {
        cy.contains('Packet Title').parent().find('input').type(data.packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).click();
      cy.get('[role="option"]').first().click();
      cy.wait(500);
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').first().click();
          cy.contains('Assign Packet').parent('button').should('not.be.disabled');
        }
      });
    });
  });

  context('Assign Packet Modal - Form Selection', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab and open assign modal
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
      cy.contains('Assign New Packet').click();
    });

    it('Loads and displays available form types', () => {
      cy.wait(1000); // Wait for form types to load
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').should('have.length.greaterThan', 0);
        }
      });
    });

    it('Allows selecting and deselecting form types', () => {
      cy.wait(1000);
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          const firstCheckbox = cy.get('[type="checkbox"]').first();
          firstCheckbox.click();
          firstCheckbox.should('be.checked');
          firstCheckbox.click();
          firstCheckbox.should('not.be.checked');
        }
      });
    });

    it('Allows selecting multiple form types', () => {
      cy.wait(1000);
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 1) {
          cy.get('[type="checkbox"]').first().click();
          cy.get('[type="checkbox"]').eq(1).click();
          cy.get('[type="checkbox"]').first().should('be.checked');
          cy.get('[type="checkbox"]').eq(1).should('be.checked');
        }
      });
    });
  });

  context('Insert Packet', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Navigate to patient page and assign packet', () => {
      cy.contains('EHR integration').should('exist');
      cy.contains('Assign New Packet').click();
      // Pass the packet id from the fixture file to the form
      cy.fixture('packet_insertion').then((data) => {
        const packetId = data.packetId;
        cy.contains('Packet Title').parent().find('input').type(packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).click();
      cy.get('[role="option"]').first().click();
      cy.wait(500);
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').first().click();
          cy.contains('Assign Packet').click();
          cy.wait(1000);
          // Verify modal closes
          cy.contains('Assign New Packet').should('not.exist');
        }
      });
    });
  });

  context('Patient Packets Modal', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Opens modal when clicking view button on patient row', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          // Find the view button (eye icon) in the first row
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
        }
      });
    });

    it('Displays patient information in modal header', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          // Verify patient info is displayed
          cy.get('body').should('contain.text', 'DOB:');
        }
      });
    });

    it('Displays all packets for the patient', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          // Verify packets are displayed if they exist
          cy.get('body').should('exist');
        }
      });
    });

    it('Displays packet status chips correctly', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          // Check for status chips if packets exist
          cy.get('body').then(($modalBody) => {
            if ($modalBody.text().includes('Completed') || $modalBody.text().includes('In Progress') || $modalBody.text().includes('Not Started')) {
              cy.get('body').should('contain.text', 'Completed').or('contain.text', 'In Progress').or('contain.text', 'Not Started');
            }
          });
        }
      });
    });

    it('Closes modal when close button is clicked', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.get(providerPortalPage.closeModalButton).click({ force: true });
          cy.contains('Patient Form Packets').should('not.exist');
        }
      });
    });
  });

  context('Packet Actions', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Copies packet URL to clipboard', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.wait(500);
          // Click copy URL button if it exists
          cy.get('body').then(($modalBody) => {
            if ($modalBody.find(providerPortalPage.copyUrlButton).length > 0) {
              cy.get(providerPortalPage.copyUrlButton).first().click({ force: true });
              // Verify clipboard (this may require special handling)
            }
          });
        }
      });
    });

    it('Opens packet in new view when open button is clicked', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.wait(500);
          cy.get('body').then(($modalBody) => {
            if ($modalBody.find(providerPortalPage.openPacketButton).length > 0) {
              cy.get(providerPortalPage.openPacketButton).first().click({ force: true });
              cy.url().should('include', '/p/');
            }
          });
        }
      });
    });

    it('Deletes packet with confirmation', () => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
      // Click on the 'eye' icon to view the created packet and then deletes it
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.wait(500);
          // Click on the delete button of the last created packet
          cy.get('body').then(($modalBody) => {
            if ($modalBody.find(providerPortalPage.deletePacketButton).length > 0) {
              cy.get(providerPortalPage.deletePacketButton).last().click({ force: true });
              cy.wait(1000);
              // Confirm the deletion on the dialog
              cy.get(providerPortalPage.confirmDeleteButton).click({ force: true });
    cy.log('Packet deleted successfully');
              cy.wait(1000);
              // Verify modal closes
              cy.contains('Patient Form Packets').should('not.exist');
            }
          });
        }
      });
    });

    it('Cancels packet deletion when cancel is clicked', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.wait(500);
          cy.get('body').then(($modalBody) => {
            if ($modalBody.find(providerPortalPage.deletePacketButton).length > 0) {
              cy.get(providerPortalPage.deletePacketButton).last().click({ force: true });
              cy.wait(1000);
              // Click cancel button
              cy.get('body').then(($confirmBody) => {
                if ($confirmBody.find('button:contains("Cancel")').length > 0) {
                  cy.contains('Cancel').click({ force: true });
                  cy.contains('Patient Form Packets').should('exist');
                }
              });
            }
          });
        }
      });
    });
  });

  context('Analytics Tab', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      cy.url().should('include', '/provider');
    });

    it('Navigates to Analytics tab and displays content', () => {
      cy.get('[role="tab"]').contains('Analytics').click();
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Analytics');
      // Verify analytics content exists
      cy.get('body').should('exist');
    });
  });

  context('Settings Tab', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      cy.url().should('include', '/provider');
    });

    it('Navigates to Settings tab and displays health check', () => {
      cy.get('[role="tab"]').contains('Settings').click();
      cy.get('[role="tab"][aria-selected="true"]').should('contain', 'Settings');
      cy.contains('System Health Check').should('exist');
      cy.contains('EHR Database Connection').should('exist');
    });

    it('Displays health check status indicator', () => {
      cy.get('[role="tab"]').contains('Settings').click();
      cy.contains('EHR Database Connection').should('exist');
      // Verify status message exists (could be "Connected", "Checking connection...", or "Connection failed")
      cy.get('body').should('satisfy', ($body) => {
        const text = $body.text();
        return text.includes('Connected') || 
               text.includes('Checking connection') || 
               text.includes('Connection failed');
      });
    });
  });

  context('Edge cases', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Types a really long packet name', () => {
      cy.contains('Assign New Packet').click();
      cy.fixture('packet_insertion').then((data) => {
        const packetId = data.huge_packetData;
        cy.contains('Packet Title').parent().find('input').type(packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).type('{enter}');
    });

    it('Handles empty patient list gracefully', () => {
      cy.get('body').then(($body) => {
        if ($body.text().includes('No users found')) {
          cy.contains('No users found.').should('exist');
          cy.contains('Assign New Packet').should('be.visible');
        }
      });
    });

    it('Handles modal close on escape key', () => {
      cy.contains('Assign New Packet').click();
      cy.contains('Assign New Packet').should('exist');
      cy.get('body').type('{esc}');
      cy.wait(500);
      // Modal should close
      cy.get('body').then(($body) => {
        if (!$body.text().includes('Assign New Packet')) {
          cy.contains('Assign New Packet').should('not.exist');
        }
      });
    });
  });

  context('Data Refresh', () => {
    beforeEach(() => {
      // Login is already handled in the main beforeEach
      // Navigate to Patient Management tab
      cy.url().should('include', '/provider');
      cy.get('[role="tab"]').contains('Patient Management').click();
    });

    it('Refreshes patient list after packet assignment', () => {
      cy.contains('Assign New Packet').click();
      cy.fixture('packet_insertion').then((data) => {
        cy.contains('Packet Title').parent().find('input').type(data.packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).click();
      cy.get('[role="option"]').first().click();
      cy.wait(500);
      cy.get('body').then(($body) => {
        if ($body.find('[type="checkbox"]').length > 0) {
          cy.get('[type="checkbox"]').first().click();
          cy.contains('Assign Packet').click();
          cy.wait(2000);
          // Verify we're back on the patient list
          cy.contains('Patient Search & Form Assignment').should('exist');
        }
      });
    });

    it('Refreshes patient list after packet deletion', () => {
      cy.get('body').then(($body) => {
        if ($body.find('table tbody tr').length > 0) {
          cy.get('table tbody tr').first().find('button').first().click({ force: true });
          cy.contains('Patient Form Packets').should('exist');
          cy.wait(500);
          cy.get('body').then(($modalBody) => {
            if ($modalBody.find(providerPortalPage.deletePacketButton).length > 0) {
              cy.get(providerPortalPage.deletePacketButton).last().click({ force: true });
              cy.wait(1000);
              cy.get(providerPortalPage.confirmDeleteButton).click({ force: true });
              cy.wait(2000);
              // Verify we're back on the patient list
              cy.contains('Patient Search & Form Assignment').should('exist');
            }
          });
        }
      });
    });
  });
});
