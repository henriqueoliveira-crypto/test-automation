describe('User API tests', () => {

  it('should Get the page', () => {
    cy.request('GET', '/health', {
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

  it('should submit form data and receive a success response', () => {
    cy.fixture('form_data').then((data) => {
      cy.request({
        data: {'packet':1},
        method: 'PUT',
        url: '/api/packet/1',
        body: data.values,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
    });
  });
});

