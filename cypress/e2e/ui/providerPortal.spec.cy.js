import { basicInfoPage } from "../../support/pageObjects/basicInfoPage";
import { contactInfoPage } from "../../support/pageObjects/contactInfoPage";
import { incomePage } from "../../support/pageObjects/incomePage";
import { jobInfoPage } from "../../support/pageObjects/jobInfoPage";
import { loanAmountPage } from "../../support/pageObjects/loanAmountPage";
import { loanTypePage } from "../../support/pageObjects/loanTypePage";

describe('Provider Portal Page', () => {

  before(() => {
    // Reset application state before each test
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit('/')
  });
  context('Happy Path - E2E', () => {
    it('Navigates to patient page', () =>{
      cy.contains('Access Provider Portal').click();
      cy.contains('EHR integration').should('exist');
      cy.contains('Assign New Packet').click();
      cy.contains('Packet Title').click({force:true}).type('Test Packet');
    })
    // it('Clicks on Assign New Packet button', () =>{
      
    // })
//   context('Happy Path - E2E', () => {
//   it('fills basic info page', () => {
//       //cy.clickOnBackButton();
//       cy.fillBasicInfoPage();
//       cy.fillContactInfoPage();
//       cy.fillJobInfoPage();
//       cy.fillIncomePage();
//       cy.fillLoanTypePage();
//       cy.fillLoanAmountPage();
//   })
// })
//   context('Edge Cases - Basic Info Page', () => {
//     it('Clicks on next without filling the first name field', () =>{
//       cy.clickOnBackButton();
//       cy.get(basicInfoPage.firstNameField).clear()
//       cy.contains('Next').click()
//       cy.get(basicInfoPage.firstNameError).should('exist')
//     })
//     it('Clicks on next without filling the last name field', () =>{
//       cy.get(basicInfoPage.lastNameField).clear()
//       cy.contains('Next').click()
//       cy.get(basicInfoPage.firstNameError).should('exist')
//     })
//     it('Clicks on next without filling the email field', () =>{
//       cy.get(basicInfoPage.lastNameField).clear()
//       cy.contains('Next').click()
//       cy.get(basicInfoPage.firstNameError).should('exist')
//     })
//   })
//   context('Edge Cases - Contact Info', () => {
//     it('Clicks on Next without filling email', () =>{
//       cy.fillBasicInfoPage();
//       cy.get(contactInfoPage.emailField).clear()
//       cy.get(contactInfoPage.nextButton).click()
//       cy.get(contactInfoPage.emailError).should('exist')
//     })
//   })
//   context('Edge Cases - Job Info', () => {
//     it('Clicks on Next without filling employer name', () =>{
//       cy.clickOnBackButton();
//       cy.fillBasicInfoPage();
//       cy.fillContactInfoPage();
//       cy.get(jobInfoPage.employerName).clear()
//       cy.get(jobInfoPage.nextButton).click()
//       cy.get(jobInfoPage.employerNameError).should('exist')
//     })
//   })
// context('Edge Cases - Income Page', () => {
//     it('Clicks on Next without filling income amount', () => {
//       cy.clickOnBackButton();
//       cy.fillBasicInfoPage();
//       cy.fillContactInfoPage();
//       cy.fillJobInfoPage();
//       cy.get(incomePage.bonusAmmountField).clear();
//       cy.get(incomePage.nextButton).click();
//       cy.get(incomePage.bonusAmountError).should('exist');
//     });
//   });

//   context('Edge Cases - Loan Type Page', () => {
//     it('Clicks on Next without selecting loan type', () => {
//       cy.clickOnBackButton();
//       cy.fillBasicInfoPage();
//       cy.fillContactInfoPage();
//       cy.fillJobInfoPage();
//       cy.fillIncomePage();
//       cy.get(loanTypePage.loanPurposeField).clear()
//       cy.contains('Next').click();
//       cy.get('#loan_purpose_error').should('exist');
//     });
//   });

//   context('Edge Cases - Loan Amount Page', () => {
//     it('Clicks on Next without filling loan amount', () => {
//       cy.clickOnBackButton();
//       cy.fillBasicInfoPage();
//       cy.fillContactInfoPage();
//       cy.fillJobInfoPage();
//       cy.fillIncomePage();
//       cy.fillLoanTypePage();
//       cy.get(loanAmountPage.loanAmountRequested).clear().clear();
//       cy.contains('Finish').click();
//       cy.get(loanAmountPage.loanAmountError).should('exist');
//     });
//   });
  })
})

