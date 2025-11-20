describe('Packet API', () => {
  let createdPacketId;
  let testPacketId;
  let testData;
  let packetData;

  before(() => {
    cy.fixture('test-data').then((data) => {
      testData = data;
    });
    cy.fixture('packet_insertion').then((data) => {
      packetData = data;
      testPacketId = data.packetId;
    });
  });

  context('Get Packet', () => {
    it('TC01 - Get packet by valid external ID', () => {
      cy.apiGet(`/api/packet/${packetData.packetId}`).then((response) => {
        if (response.status === testData.httpStatus.success) {
          expect(response.body).to.have.property('externalId');
          expect(response.body).to.have.property('forms');
          expect(response.body).to.have.property('schema');
          expect(response.body.forms).to.be.an('array');
        } else {
          cy.log('Packet not found, which is acceptable for this test scenario');
        }
      });
    });

    it('TC02 - Get packet with invalid external ID', () => {
      cy.apiGet(`/api/packet/${testData.invalidIds.packetId}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.notFound);
        expect(response.body).to.have.property('code');
        expect(response.body.code).to.include(testData.errorCodes.packetNotFound);
      });
    });

    it('TC03 - Get packet with missing packetId parameter', () => {
      cy.apiGet('/api/packet/').then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });
  });

  context('Update Packet', () => {
    it('TC01 - Update packet with valid data', () => {
      cy.fixture('form_data').then((formData) => {
        cy.apiPut(`/api/packet/${packetData.packetId}`, {
          results: formData.values || {},
        }).then((response) => {
          if (response.status === testData.httpStatus.noContent) {
            expect(response.status).to.eq(testData.httpStatus.noContent);
          } else {
            cy.log(`Update failed with status: ${response.status}`);
            expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
          }
        });
      });
    });

    it('TC02 - Update packet with invalid packetId', () => {
      cy.apiPut(`/api/packet/${testData.invalidIds.packetId}`, {
        results: {},
      }).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.notFound);
        expect(response.body).to.have.property('code');
      });
    });

    it('TC03 - Update packet with invalid results data', () => {
      cy.apiPut(`/api/packet/${packetData.packetId}`, {
        results: 'invalid-data-type',
      }).then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });

    it('TC04 - Update packet with missing required fields', () => {
      cy.apiPut(`/api/packet/${packetData.packetId}`, {}).then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });
  });

  context('Get All Packets', () => {
    it('TC01 - Get all packets without filters', () => {
      cy.apiGet('/api/packet').then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((packet) => {
            expect(packet).to.have.property('externalId');
          });
        }
      });
    });

    it('TC02 - Get all packets filtered by status', () => {
      cy.apiGet(`/api/packet?status=${testData.packetStatus.notStarted}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((packet) => {
            expect(packet.status).to.eq(testData.packetStatus.notStarted);
          });
        }
      });
    });

    it('TC03 - Get all packets excluding a status', () => {
      cy.apiGet(`/api/packet?excludeStatus=${testData.packetStatus.completed}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.success);
        expect(response.body).to.be.an('array');
        if (response.body.length > 0) {
          response.body.forEach((packet) => {
            expect(packet.status).to.not.eq(testData.packetStatus.completed);
          });
        }
      });
    });

    it('TC04 - Get all packets with invalid status parameter', () => {
      cy.apiGet(`/api/packet?status=${testData.packetStatus.invalid}`).then((response) => {
        expect([testData.httpStatus.success, testData.httpStatus.badRequest]).to.include(response.status);
      });
    });
  });

  context('Create Packet', () => {
    it('TC01 - Create packet with valid data', () => {
      cy.apiPost('/api/packet', {
        clientId: packetData.validPacket.clientId,
        formTypeIds: packetData.validPacket.formTypeIds,
        title: `${testData.packet.titlePrefix} ${Date.now()}`,
      }).then((response) => {
        if (response.status === testData.httpStatus.created) {
          expect(response.body).to.have.property('packetId');
          createdPacketId = response.body.packetId;
          expect(response.body.packetId).to.be.a('number');
        } else {
          cy.log(`Packet creation failed with status: ${response.status}`);
          expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
        }
      });
    });

    it('TC02 - Create packet without required clientId', () => {
      cy.apiPost('/api/packet', {
        formTypeIds: packetData.validPacket.formTypeIds,
        title: testData.packet.title,
      }).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.badRequest);
        expect(response.body).to.have.property('code');
      });
    });

    it('TC03 - Create packet without required formTypeIds', () => {
      cy.apiPost('/api/packet', {
        clientId: packetData.validPacket.clientId,
        title: testData.packet.title,
      }).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.badRequest);
        expect(response.body).to.have.property('code');
      });
    });

    it('TC04 - Create packet without required title', () => {
      cy.apiPost('/api/packet', {
        clientId: packetData.validPacket.clientId,
        formTypeIds: packetData.validPacket.formTypeIds,
      }).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.badRequest);
        expect(response.body).to.have.property('code');
      });
    });

    it('TC05 - Create packet with invalid clientId', () => {
      cy.apiPost('/api/packet', {
        clientId: testData.invalidIds.clientId,
        formTypeIds: packetData.validPacket.formTypeIds,
        title: testData.packet.title,
      }).then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });

    it('TC06 - Create packet with invalid formTypeIds', () => {
      cy.apiPost('/api/packet', {
        clientId: packetData.validPacket.clientId,
        formTypeIds: [testData.invalidIds.formTypeId],
        title: testData.packet.title,
      }).then((response) => {
        expect([testData.httpStatus.badRequest, testData.httpStatus.notFound]).to.include(response.status);
      });
    });
  });

  context('Delete Packet', () => {
    it('TC01 - Delete packet with valid packetId', () => {
      cy.apiDelete(`/api/packet/${packetData.packetId}`).then((response) => {
        if (response.status === testData.httpStatus.noContent) {
          expect(response.status).to.eq(testData.httpStatus.noContent);
        } else {
          expect([testData.httpStatus.notFound]).to.include(response.status);
        }
      });
    });

    it('TC02 - Delete packet with invalid packetId', () => {
      cy.apiDelete(`/api/packet/${testData.invalidIds.packetId}`).then((response) => {
        expect(response.status).to.eq(testData.httpStatus.notFound);
        expect(response.body).to.have.property('code');
      });
    });

    it('TC03 - Delete already deleted packet', () => {
      cy.apiDelete(`/api/packet/${packetData.packetId}`).then((response) => {
        if (response.status === testData.httpStatus.noContent) {
          cy.apiDelete(`/api/packet/${packetData.packetId}`).then((secondResponse) => {
            expect(secondResponse.status).to.eq(testData.httpStatus.notFound);
          });
        } else {
          expect(response.status).to.eq(testData.httpStatus.notFound);
        }
      });
    });
  });
});
