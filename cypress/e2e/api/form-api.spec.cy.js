describe('Form API', () => {
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  context('Get Form Types', () => {
    it('TC01 - Get all form types successfully', () => {
      cy.apiGet('/api/form-types').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((formType) => {
            expect(formType).to.have.property('id');
            expect(formType).to.have.property('name');
          });
        }
      });
    });

    it('TC02 - Verify form types response structure', () => {
      cy.apiGet('/api/form-types').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        
        if (response.body.length > 0) {
          response.body.forEach((formType) => {
            expect(formType).to.be.an('object');
            expect(formType).to.have.property('id');
            expect(formType.id).to.be.a('number');
            expect(formType).to.have.property('name');
            expect(formType.name).to.be.a('string');
          });
        }
      });
    });
  });

  context('Get All Forms', () => {
    it('TC01 - Get all forms successfully', () => {
      cy.apiGet('/api/forms').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((form) => {
            expect(form).to.have.property('id');
          });
        }
      });
    });

    it('TC02 - Verify forms response structure', () => {
      cy.apiGet('/api/forms').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        
        if (response.body.length > 0) {
          response.body.forEach((form) => {
            expect(form).to.be.an('object');
            expect(form).to.have.property('id');
            expect(form.id).to.be.a('number');
          });
        }
      });
    });
  });
});
