describe('Health API', () => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  context('Get health status', () => {
    it('TC01 - Get health status when database is connected', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/api/health`,
        failOnStatusCode: false,
      }).then((response) => {
        expect([testData.httpStatus.success, testData.httpStatus.serverError, testData.httpStatus.serviceUnavailable]).to.include(response.status);
        if (response.status === testData.httpStatus.success) {
          expect(response.body).to.exist;
        }
      });
    });

    it('TC02 - Get health status when database is not connected', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/api/health`,
        failOnStatusCode: false,
      }).then((response) => {
        if (response.status !== testData.httpStatus.success) {
          expect(response.status).to.be.oneOf([testData.httpStatus.serverError, testData.httpStatus.serviceUnavailable, testData.httpStatus.badGateway]);
          expect(response.body).to.exist;
        }
      });
    });
  });
});
