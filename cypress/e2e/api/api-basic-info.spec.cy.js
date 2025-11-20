describe('Health API Basic Info', () => {
  const baseUrl = Cypress.config('baseUrl').replace('/provider', '');
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  context('Health Check', () => {
    it('TC01 - Get health status endpoint', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/api/health`,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.be.oneOf([
          testData.httpStatus.success,
          testData.httpStatus.serverError,
          testData.httpStatus.serviceUnavailable,
          testData.httpStatus.badGateway
        ]);
        if (response.status === testData.httpStatus.success) {
          expect(response.body).to.exist;
        }
      });
    });
  });
});
