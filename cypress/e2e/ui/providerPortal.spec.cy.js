import { providerPortalPage } from '../../support/pageObjects/providerPortalPage';
describe('Provider Portal Page', () => {

  before(() => {
    // Reset application state before each test
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/')
  });
  context('Happy Path - E2E', () => {
    it('Navigate to patient page', () =>{
      cy.contains('Access Provider Portal').click();
      cy.contains('EHR integration').should('exist');
      cy.contains('Assign New Packet').click();
      cy.fixture('packet_insertion').then((data) => {
        const packetId = data.packetId;
        cy.contains('Packet Title').click({force:true}).type(packetId);
      }
      );
      cy.get(providerPortalPage.assigningPacketFormUserField).type('{enter}')
      cy.contains('Treatment Plan').click();
      cy.contains('Assign Packet').click();
    })
  })
})

