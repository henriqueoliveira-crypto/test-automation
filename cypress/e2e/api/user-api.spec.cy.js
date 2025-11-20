describe('User API', () => {
  let testData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
  });

  context('Get Users', () => {
    it('TC01 - Get all users without filters', () => {
      cy.apiGet('/api/users').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((user) => {
            expect(user).to.have.property('id');
            expect(user).to.have.property('firstName');
            expect(user).to.have.property('lastName');
          });
        }
      });
    });

    it('TC02 - Get users filtered by costCenterIds', () => {
      cy.apiGet(`/api/users?costCenterIds=${testData.validIds.costCenterId}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((user) => {
            expect(user).to.have.property('costCenterId');
          });
        }
      });
    });

    it('TC03 - Get users with search query', () => {
      cy.apiGet(`/api/users?searchQuery=${testData.userSearch.query}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((user) => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            expect(fullName).to.include(testData.userSearch.query.toLowerCase());
          });
        }
      });
    });

    it('TC04 - Get users with both costCenterIds and search query', () => {
      cy.apiGet(`/api/users?costCenterIds=${testData.validIds.costCenterId}&searchQuery=${testData.userSearch.query}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((user) => {
            expect(user).to.have.property('costCenterId');
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            expect(fullName).to.include(testData.userSearch.query.toLowerCase());
          });
        }
      });
    });

    it('TC05 - Get users with invalid costCenterIds parameter', () => {
      cy.apiGet('/api/users?costCenterIds=invalid').then((response) => {
        expect([testData.httpStatus.success, testData.httpStatus.badRequest]).to.include(response.status);
      });
    });
  });

  context('Get User', () => {
    it('TC01 - Get user by valid userId', () => {
      cy.apiGet('/api/users').then((usersResponse) => {
        if (usersResponse.status === testData.httpStatus.success && usersResponse.body.length > 0) {
          const userId = usersResponse.body[0].id;
          cy.apiGet(`/api/user/${userId}`).then((response) => {
            if (response.status === testData.httpStatus.success) {
              expect(response.body).to.have.property('id');
              expect(response.body).to.have.property('firstName');
              expect(response.body).to.have.property('lastName');
              expect(response.body).to.have.property('packets');
              expect(response.body.packets).to.be.an('array');
            } else {
              expect([testData.httpStatus.forbidden, testData.httpStatus.notFound]).to.include(response.status);
            }
          });
        } else {
          cy.log('No users available for testing');
        }
      });
    });

    it('TC02 - Get user with invalid userId', () => {
      cy.apiGet(`/api/user/${testData.invalidIds.userId}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.notFound);
        expect(response.body).to.have.property('code');
        expect(response.body.code).to.include(testData.errorCodes.userNotFound);
      });
    });

    it('TC03 - Get user with missing userId parameter', () => {
      cy.apiGet('/api/user/').then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });

    it('TC04 - Get user with unauthorized access', () => {
      cy.apiGet(`/api/user/${testData.invalidIds.userId}`).then((response) => {
        expect([testData.httpStatus.forbidden, testData.httpStatus.notFound]).to.include(response.status);
        if (response.status === testData.httpStatus.forbidden) {
          expect(response.body).to.exist;
        }
      });
    });
  });
});
