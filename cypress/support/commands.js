// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { basicInfoPage } from '../support/pageObjects/basicInfoPage'
import { contactInfoPage } from '../support/pageObjects/contactInfoPage'
import { jobInfoPage } from '../support/pageObjects/jobInfoPage'
import { incomePage } from '../support/pageObjects/incomePage'
import { loanTypePage } from '../support/pageObjects/loanTypePage'
import { loanAmountPage } from '../support/pageObjects/loanAmountPage'
import { providerPortalPage } from '../support/pageObjects/providerPortalPage'

Cypress.Commands.add('clickOnBackButton', () => {
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
  cy.wait(1000)
  cy.contains('Back').click()
})

Cypresss.Commands.add('deletePacket', () => {
  cy.get('[aria-label="Delete packet"]').click({force:true})
  cy.contains('Confirm').click({force:true})
})

Cypress.Commands.add('fillBasicInfoPage', () => {
  cy.get(basicInfoPage.firstNameField).clear().type('John Doe')
  cy.get(basicInfoPage.lastNameField).clear().type('123456')
  cy.get(basicInfoPage.emailAdressField).clear().type('user@example.com')
  cy.get(basicInfoPage.dateOfBirthCalendarButton).click()
  cy.get(basicInfoPage.dateSelectedButton).click()
  cy.get('[aria-hidden="true"]').then(($el) => {
    if ($el.is(':visible')) {
      cy.contains('Spanish').click().click()
    } else {
      cy.contains('Spanish').click()
      cy.contains('Chinese').click()
    }
})
  cy.get(basicInfoPage.nextButton).click()
});

Cypress.Commands.add('fillContactInfoPage', () => {
  cy.get(contactInfoPage.contactMethodOption).click()
  cy.get(contactInfoPage.emailDropdownOption).click()
  cy.get(contactInfoPage.emailField).clear().type('user@example.com')
  cy.get('body').click(0, 0)
  cy.get(contactInfoPage.nextButton).click()
});

Cypress.Commands.add('fillJobInfoPage', () => {
  cy.get(jobInfoPage.employerName).clear().type('John')
  cy.get(jobInfoPage.jobTitle).clear().type('Engineer')
  cy.get(jobInfoPage.employmentStatusDropdown).click()
  cy.get(jobInfoPage.fullTimeOption).click().type('{downarrow}{enter}')
  cy.get(jobInfoPage.nextButton).click()
});

Cypress.Commands.add('fillIncomePage', () => {
  cy.get(incomePage.annualIncome).clear().type('222000')
  cy.get(incomePage.hasBonus).click()
  cy.get(incomePage.yesOption).click()
  cy.get(incomePage.bonusAmmountField).clear().type('222000')
  cy.contains('Next').click()
});

Cypress.Commands.add('fillLoanTypePage', () => {
  cy.get(loanTypePage.loanType).click()
  cy.get(loanTypePage.personalLoanType).click()
  cy.get(loanTypePage.loanPurposeField).type('Test')
  cy.contains('Vehicle').click()
  // cy.get('[aria-hidden="true"]').then(($el) => {
  //     if ($el.is(':visible')) {
  //       cy.contains('Vehicle').click().click()
  //     } else {
  //       cy.contains('Vehicle').click()
  //     }})
  cy.contains('Next').click()
});

Cypress.Commands.add('fillLoanAmountPage', () => {
  cy.get(loanAmountPage.loanAmountRequested).type('55')
  cy.get(loanAmountPage.loanTerm).type('5')
  cy.contains('Finish').click()
});

Cypress.Commands.add('assignNewPacket', () => {
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
});