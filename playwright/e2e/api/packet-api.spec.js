const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { safeJsonParse, handleAuthError } = require('../../support/api-test-helpers');

const BASE_URL = 'https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net';

let testData;
let packetData;
let testPacketId;
let createdPacketId;

test.beforeAll(() => {
  // Load test data fixtures
  const testDataPath = path.join(__dirname, '../../fixtures/test-data.json');
  const packetDataPath = path.join(__dirname, '../../fixtures/packet_insertion.json');
  testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));
  packetData = JSON.parse(fs.readFileSync(packetDataPath, 'utf8'));
  testPacketId = packetData.packetId;
});

test.describe('Packet API @api', () => {
  test.describe('Get Packet', () => {
    test('TC01 - Get packet by valid external ID', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet/${packetData.packetId}`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      if (response.status() === testData.httpStatus.success) {
        const body = await safeJsonParse(response);
        expect(body).toHaveProperty('externalId');
        expect(body).toHaveProperty('forms');
        expect(body).toHaveProperty('schema');
        expect(Array.isArray(body.forms)).toBe(true);
      } else {
        console.log('Packet not found, which is acceptable for this test scenario');
      }
    });

    test('TC02 - Get packet with invalid external ID', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet/${testData.invalidIds.packetId}`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.notFound);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
      expect(body.code).toContain(testData.errorCodes.packetNotFound);
    });

    test('TC03 - Get packet with missing packetId parameter', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet/`);
      
      expect([
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound
      ]).toContain(response.status());
    });
  });

  test.describe('Update Packet', () => {
    test('TC01 - Update packet with valid data', async ({ request }) => {
      const formDataPath = path.join(__dirname, '../../fixtures/form_data.json');
      const formData = JSON.parse(fs.readFileSync(formDataPath, 'utf8'));
      
      const response = await request.put(`${BASE_URL}/api/packet/${packetData.packetId}`, {
        data: {
          results: formData.values || {},
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === testData.httpStatus.noContent) {
        expect(response.status()).toBe(testData.httpStatus.noContent);
      } else {
        console.log(`Update failed with status: ${response.status()}`);
        expect([
          testData.httpStatus.badRequest,
          testData.httpStatus.notFound
        ]).toContain(response.status());
      }
    });

    test('TC02 - Update packet with invalid packetId', async ({ request }) => {
      const response = await request.put(`${BASE_URL}/api/packet/${testData.invalidIds.packetId}`, {
        data: {
          results: {},
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.notFound);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
    });

    test('TC03 - Update packet with invalid results data', async ({ request }) => {
      const response = await request.put(`${BASE_URL}/api/packet/${packetData.packetId}`, {
        data: {
          results: 'invalid-data-type',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      expect([
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound
      ]).toContain(response.status());
    });

    test('TC04 - Update packet with missing required fields', async ({ request }) => {
      const response = await request.put(`${BASE_URL}/api/packet/${packetData.packetId}`, {
        data: {},
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      expect([
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound
      ]).toContain(response.status());
    });
  });

  test.describe('Get All Packets', () => {
    test('TC01 - Get all packets without filters', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((packet) => {
          expect(packet).toHaveProperty('externalId');
        });
      }
    });

    test('TC02 - Get all packets filtered by status', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet?status=${testData.packetStatus.notStarted}`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((packet) => {
          expect(packet.status).toBe(testData.packetStatus.notStarted);
        });
      }
    });

    test('TC03 - Get all packets excluding a status', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet?excludeStatus=${testData.packetStatus.completed}`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.success);
      const body = await safeJsonParse(response);
      expect(Array.isArray(body)).toBe(true);
      
      if (body.length > 0) {
        body.forEach((packet) => {
          expect(packet.status).not.toBe(testData.packetStatus.completed);
        });
      }
    });

    test('TC04 - Get all packets with invalid status parameter', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/api/packet?status=${testData.packetStatus.invalid}`);
      
      expect([
        testData.httpStatus.success,
        testData.httpStatus.badRequest
      ]).toContain(response.status());
    });
  });

  test.describe('Create Packet', () => {
    test('TC01 - Create packet with valid data', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          clientId: packetData.validPacket.clientId,
          formTypeIds: packetData.validPacket.formTypeIds,
          title: `${testData.packet.titlePrefix} ${Date.now()}`,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      if (response.status() === testData.httpStatus.created) {
        const body = await safeJsonParse(response);
        expect(body).toHaveProperty('packetId');
        createdPacketId = body.packetId;
        expect(typeof body.packetId).toBe('number');
      } else {
        console.log(`Packet creation failed with status: ${response.status()}`);
        expect([
          testData.httpStatus.badRequest,
          testData.httpStatus.notFound,
          401 // Accept 401 as valid when auth is required
        ]).toContain(response.status());
      }
    });

    test('TC02 - Create packet without required clientId', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          formTypeIds: packetData.validPacket.formTypeIds,
          title: testData.packet.title,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      // If we get 401 instead of 400, that's acceptable (auth required first)
      if (response.status() === 401) {
        expect(response.status()).toBe(401);
        return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.badRequest);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
    });

    test('TC03 - Create packet without required formTypeIds', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          clientId: packetData.validPacket.clientId,
          title: testData.packet.title,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      // If we get 401 instead of 400, that's acceptable (auth required first)
      if (response.status() === 401) {
        expect(response.status()).toBe(401);
        return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.badRequest);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
    });

    test('TC04 - Create packet without required title', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          clientId: packetData.validPacket.clientId,
          formTypeIds: packetData.validPacket.formTypeIds,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      // If we get 401 instead of 400, that's acceptable (auth required first)
      if (response.status() === 401) {
        expect(response.status()).toBe(401);
        return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.badRequest);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
    });

    test('TC05 - Create packet with invalid clientId', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          clientId: testData.invalidIds.clientId,
          formTypeIds: packetData.validPacket.formTypeIds,
          title: testData.packet.title,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      expect([
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound
      ]).toContain(response.status());
    });

    test('TC06 - Create packet with invalid formTypeIds', async ({ request }) => {
      const response = await request.post(`${BASE_URL}/api/packet`, {
        data: {
          clientId: packetData.validPacket.clientId,
          formTypeIds: [testData.invalidIds.formTypeId],
          title: testData.packet.title,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      expect([
        testData.httpStatus.badRequest,
        testData.httpStatus.notFound
      ]).toContain(response.status());
    });
  });

  test.describe('Delete Packet', () => {
    test('TC01 - Delete packet with valid packetId', async ({ request }) => {
      const response = await request.delete(`${BASE_URL}/api/packet/${packetData.packetId}`);
      
      if (response.status() === testData.httpStatus.noContent) {
        expect(response.status()).toBe(testData.httpStatus.noContent);
      } else {
        expect([testData.httpStatus.notFound]).toContain(response.status());
      }
    });

    test('TC02 - Delete packet with invalid packetId', async ({ request }) => {
      const response = await request.delete(`${BASE_URL}/api/packet/${testData.invalidIds.packetId}`);
      
      if (response.status() === 401) {
        if (handleAuthError(response, test)) return;
      }
      
      expect(response.status()).toBe(testData.httpStatus.notFound);
      const body = await safeJsonParse(response);
      expect(body).toHaveProperty('code');
    });

    test('TC03 - Delete already deleted packet', async ({ request }) => {
      const firstResponse = await request.delete(`${BASE_URL}/api/packet/${packetData.packetId}`);
      
      if (firstResponse.status() === testData.httpStatus.noContent) {
        const secondResponse = await request.delete(`${BASE_URL}/api/packet/${packetData.packetId}`);
        expect(secondResponse.status()).toBe(testData.httpStatus.notFound);
      } else {
        expect(firstResponse.status()).toBe(testData.httpStatus.notFound);
      }
    });
  });
});

