import { providerPortalPage } from '../../support/pageObjects/providerPortalPage';
describe('Provider Portal Page', () => {

  beforeEach(() => {
    // Reset application state before each test
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/')
  });
  //This will add a packet to a user from the provider portal
  context('Insert Packet', () => {
    it('Navigate to patient page', () =>{
      cy.contains('Access Provider Portal').click();
      cy.contains('EHR integration').should('exist');
      cy.contains('Assign New Packet').click();
      //it passes the packet id from the fixture file to the form
      cy.fixture('packet_insertion').then((data) => {
        const packetId = data.packetId;
        cy.contains('Packet Title').click({force:true}).type(packetId);
      }
      );
      cy.get(providerPortalPage.assigningPacketFormUserField).type('{enter}')
      cy.contains('Treatment Plan').click();
      cy.contains('Assign Packet').click();
    })
  it('Delete the created packet', () =>{
    cy.contains('Access Provider Portal').click();
    //Clicks on the 'eye' icon to view the created packet and then deletes it
    cy.get(':nth-child(1) > .MuiTableCell-alignRight > .MuiButtonBase-root > .MuiSvgIcon-root > path').click({force:true})
    //Clicks on the delete button of the last created packet
    cy.get(providerPortalPage.deletePacketButton).last().click({force:true})
    cy.wait(1000)
    //Confirms the deletion on the dialog
    cy.get('.MuiDialogActions-root > .MuiBox-root > .MuiButton-contained').click({force:true})
    cy.log('Packet deleted successfully');
  })
})
  context('Edge cases', () => {
    it('Types a really long packet name', () =>{
      cy.contains('Access Provider Portal').click();
      cy.contains('Assign New Packet').click();
      cy.fixture('packet_insertion').then((data) => {
        const packetId = data.huge_packetData;
        cy.contains('Packet Title').click({force:true}).type(packetId);
      });
      cy.get(providerPortalPage.assigningPacketFormUserField).type('{enter}')
   })
  })
});
