describe('Analytics API', () => {
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  context('Get Analytics', () => {
    it('TC01 - Get analytics data successfully', () => {
      cy.apiGet('/api/analytics').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.exist;
        expect(response.body).to.have.property('analytics');
        expect(response.body).to.have.property('details');
      });
    });

    it('TC02 - Verify analytics response structure', () => {
      cy.apiGet('/api/analytics').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        
        // Verify analytics array structure
        expect(response.body.analytics).to.be.an('array');
        if (response.body.analytics.length > 0) {
          response.body.analytics.forEach((stat) => {
            expect(stat).to.have.property('key');
            expect(stat).to.have.property('title');
            expect(stat).to.have.property('valueText');
          });
        }

        // Verify details object structure
        expect(response.body.details).to.be.an('object');
        expect(response.body.details).to.have.property('currentWeek');
        expect(response.body.details).to.have.property('previousWeek');
        expect(response.body.details).to.have.property('averages');
        expect(response.body.details).to.have.property('breakdown');

        // Verify currentWeek structure
        expect(response.body.details.currentWeek).to.have.property('completed');
        expect(response.body.details.currentWeek).to.have.property('total');

        // Verify previousWeek structure
        expect(response.body.details.previousWeek).to.have.property('completed');
        expect(response.body.details.previousWeek).to.have.property('total');

        // Verify averages structure
        expect(response.body.details.averages).to.have.property('completionMinutes');

        // Verify breakdown structure
        expect(response.body.details.breakdown).to.have.property('sent');
        expect(response.body.details.breakdown).to.have.property('completed');
        expect(response.body.details.breakdown).to.have.property('avgTime');
        expect(response.body.details.breakdown).to.have.property('inProgress');
      });
    });
  });
});
