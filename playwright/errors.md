
> test-automation-poc@1.0.0 playwright:test
> playwright test

Starting Microsoft OAuth login flow...
Looking for Sign In button...
Button clicked, waiting for Microsoft OAuth page...
Ô£à Navigated to Microsoft OAuth page
Looking for Next button on Microsoft OAuth page (after Sign in with Microsoft)...
No Next button found on Microsoft OAuth page (this is normal if email field is already visible)
Looking for email input field...
Ô£à Email input field found, typing email: svc-pacenet-test2@rhanet.org
Ô£à Email typed successfully
Looking for Next/Submit button after email...
Ô£à Next/Submit button found, clicking...
Ô£à Clicked Next/Submit button after email
Looking for password input field...
Ô£à Password input field found (name="passwd", id="i0118"), typing password...
Ô£à Password typed successfully
Ô£à Password confirmed entered (10 characters)
Clicking Sign in button...
Waiting for authentication to process...
Waiting longer for navigation after password submit...
Current URL after sign in click: https://login.microsoftonline.com/77567fba-7cef-44cb-b517-a6273f733405/login
Looking for Next button on current page...
ÔÜá´©Å No Next button found on current page
Screenshot saved to playwright/.auth/no-next-button.png
Redirected to app? false
Not redirected to app yet, checking for Skip buttons...
Still not redirected, looking for "Skip set up" button...
Still on Microsoft login page, waiting for navigation...
ÔÜá´©Å No navigation occurred, checking for errors...
Screenshot saved to playwright/.auth/no-navigation.png
Page text sample: 
    //<![CDATA[
!function(){var e=window,s=e.document,i=e.$Config||{};if(e.self===e.top){s&&s.body&&(s.body.style.display="block")}else if(!i.allowFrame){var o,t,r,f,n,d;if(i.fAddTryCatchForIFrameRedirects){try{o=e.self.location.href,t=o.indexOf("#"),r=-1!==t,f=o.indexOf("?"),n=r?t:o.length,d=-1===f||r&&f>t?"?":"&",o=o.substr(0,n)+d+"iframe-request-id="+i.sessionId+o.substr(n),e.top.location=o}catch(e){}}else{o=e.self.location.href,t=o.indexOf("#"),r=-1!==t,f=o.indexOf("?"),n=r?t:o.length,d=-1=
Making final attempt - waiting longer and checking for any buttons...
Current URL in final attempt: https://login.microsoftonline.com/77567fba-7cef-44cb-b517-a6273f733405/login
Trying to click button with text: "Next"
Current URL after clicking button: https://mysignins.microsoft.com/register
Ô£à Navigated to registration page after clicking button, now looking for Skip...
Found 7 clickable elements on registration page, searching for Skip...
Ô£à Found Skip button: "Pular para o conte├║do principal", clicking...
Ô£à Found Skip button: "Pular a configura├º├úo", clicking...
Ô£à Redirected to app after clicking Skip
Ô£à Redirected after clicking button
No "Stay signed in?" prompt appeared
Ô£à Already on application domain
Application URL: https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/
ÔÜá´©Å Timeout waiting for /provider or /auth/callback
Current URL: https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/
Ô£à Authentication completed successfully
Final URL: https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee/
Ô£à Authentication state saved successfully to C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\.auth\user.json

Running 77 tests using 6 workers

[1A[2K[1/77] [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:16:3 ÔÇ║ Analytics API @api ÔÇ║ TC01 - Get analytics data successfully
[1A[2K[2/77] [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:40:5 ÔÇ║ Form API @api ÔÇ║ Get Form Types ÔÇ║ TC02 - Verify form types response structure
[1A[2K[3/77] [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:17:5 ÔÇ║ Form API @api ÔÇ║ Get Form Types ÔÇ║ TC01 - Get all form types successfully
[1A[2K[4/77] [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:67:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC01 - Get all forms successfully
[1A[2K[5/77] [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:27:3 ÔÇ║ Analytics API @api ÔÇ║ TC02 - Verify analytics response structure
[1A[2K[6/77] [chromium] ÔÇ║ playwright\e2e\api\api-basic-info.spec.js:16:3 ÔÇ║ Health API Basic Info @api ÔÇ║ TC01 - Get health status endpoint
[1A[2K  1) [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:27:3 ÔÇ║ Analytics API @api ÔÇ║ TC02 - Verify analytics response structure 

    SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON

      30 |     expect(response.status()).toBe(testData.httpStatus.success);
      31 |     
    > 32 |     const body = await response.json();
         |                  ^
      33 |     
      34 |     // Verify analytics array structure
      35 |     expect(Array.isArray(body.analytics)).toBe(true);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\analytics-api.spec.js:32:18


[1A[2K[7/77] [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:82:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC02 - Verify forms response structure
[1A[2K  2) [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:16:3 ÔÇ║ Analytics API @api ÔÇ║ TC01 - Get analytics data successfully 

    SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON

      19 |     expect(response.status()).toBe(testData.httpStatus.success);
      20 |     
    > 21 |     const body = await response.json();
         |                  ^
      22 |     expect(body).toBeDefined();
      23 |     expect(body).toHaveProperty('analytics');
      24 |     expect(body).toHaveProperty('details');
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\analytics-api.spec.js:21:18


[1A[2K  3) [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:67:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC01 - Get all forms successfully 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      68 |       const response = await request.get(`${BASE_URL}/api/forms`);
      69 |       
    > 70 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      71 |       
      72 |       const body = await response.json();
      73 |       expect(Array.isArray(body)).toBe(true);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\form-api.spec.js:70:33


[1A[2K[8/77] [chromium] ÔÇ║ playwright\e2e\api\health-api.spec.js:41:3 ÔÇ║ Health API @api ÔÇ║ TC02 - Get health status when database is not connected
[1A[2K[9/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:142:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC02 - Get all packets filtered by status
[1A[2K  4) [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:82:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC02 - Verify forms response structure 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      83 |       const response = await request.get(`${BASE_URL}/api/forms`);
      84 |       
    > 85 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      86 |       
      87 |       const body = await response.json();
      88 |       expect(Array.isArray(body)).toBe(true);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\form-api.spec.js:85:33


[1A[2K[10/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:207:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC02 - Create packet without required clientId
[1A[2K  5) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:142:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC02 - Get all packets filtered by status 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      143 |       const response = await request.get(`${BASE_URL}/api/packet?status=${testData.packetStatus.notStarted}`);
      144 |       
    > 145 |       expect(response.status()).toBe(testData.httpStatus.success);
          |                                 ^
      146 |       const body = await response.json();
      147 |       expect(Array.isArray(body)).toBe(true);
      148 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:145:33


[1A[2K  6) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:207:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC02 - Create packet without required clientId 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m400[39m
    Received: [31m401[39m

      216 |       });
      217 |       
    > 218 |       expect(response.status()).toBe(testData.httpStatus.badRequest);
          |                                 ^
      219 |       const body = await response.json();
      220 |       expect(body).toHaveProperty('code');
      221 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:218:33


[1A[2K[11/77] [chromium] ÔÇ║ playwright\e2e\api\health-api.spec.js:16:3 ÔÇ║ Health API @api ÔÇ║ TC01 - Get health status when database is connected
[1A[2K[12/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:81:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC02 - Update packet with invalid packetId
[1A[2K[13/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:23:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC01 - Get packet by valid external ID
[1A[2K[14/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:156:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC03 - Get all packets excluding a status
[1A[2K[15/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:273:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC06 - Create packet with invalid formTypeIds
[1A[2K[16/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:223:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC03 - Create packet without required formTypeIds
[1A[2K[17/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:17:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC01 - Get all users without filters
[1A[2K  7) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:17:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC01 - Get all users without filters 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      18 |       const response = await request.get(`${BASE_URL}/api/users`);
      19 |       
    > 20 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      21 |       const body = await response.json();
      22 |       expect(Array.isArray(body)).toBe(true);
      23 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:20:33


[1A[2K  8) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:273:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC06 - Create packet with invalid formTypeIds 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[400, 404][39m

      286 |         testData.httpStatus.badRequest,
      287 |         testData.httpStatus.notFound
    > 288 |       ]).toContain(response.status());
          |          ^
      289 |     });
      290 |   });
      291 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:288:10


[1A[2K  9) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:156:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC03 - Get all packets excluding a status 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      157 |       const response = await request.get(`${BASE_URL}/api/packet?excludeStatus=${testData.packetStatus.completed}`);
      158 |       
    > 159 |       expect(response.status()).toBe(testData.httpStatus.success);
          |                                 ^
      160 |       const body = await response.json();
      161 |       expect(Array.isArray(body)).toBe(true);
      162 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:159:33


[1A[2K  10) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:223:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC03 - Create packet without required formTypeIds 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m400[39m
    Received: [31m401[39m

      232 |       });
      233 |       
    > 234 |       expect(response.status()).toBe(testData.httpStatus.badRequest);
          |                                 ^
      235 |       const body = await response.json();
      236 |       expect(body).toHaveProperty('code');
      237 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:234:33


[1A[2K  11) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:23:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC01 - Get packet by valid external ID 

    SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON

      25 |       
      26 |       if (response.status() === testData.httpStatus.success) {
    > 27 |         const body = await response.json();
         |                      ^
      28 |         expect(body).toHaveProperty('externalId');
      29 |         expect(body).toHaveProperty('forms');
      30 |         expect(body).toHaveProperty('schema');
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:27:22


[1A[2K  12) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:81:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC02 - Update packet with invalid packetId 

    SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON

      90 |       
      91 |       expect(response.status()).toBe(testData.httpStatus.notFound);
    > 92 |       const body = await response.json();
         |                    ^
      93 |       expect(body).toHaveProperty('code');
      94 |     });
      95 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:92:20


[1A[2K[18/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:33:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC02 - Get users filtered by costCenterIds
[1A[2K[19/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:293:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC01 - Delete packet with valid packetId
[1A[2K[20/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:170:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC04 - Get all packets with invalid status parameter
[1A[2K[21/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:239:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC04 - Create packet without required title
[1A[2K[22/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:96:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC03 - Update packet with invalid results data
[1A[2K[23/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:37:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC02 - Get packet with invalid external ID
[1A[2K  13) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:33:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC02 - Get users filtered by costCenterIds 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      34 |       const response = await request.get(`${BASE_URL}/api/users?costCenterIds=${testData.validIds.costCenterId}`);
      35 |       
    > 36 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      37 |       const body = await response.json();
      38 |       expect(Array.isArray(body)).toBe(true);
      39 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:36:33


[1A[2K  14) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:170:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC04 - Get all packets with invalid status parameter 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[200, 400][39m

      174 |         testData.httpStatus.success,
      175 |         testData.httpStatus.badRequest
    > 176 |       ]).toContain(response.status());
          |          ^
      177 |     });
      178 |   });
      179 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:176:10


[1A[2K  15) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:293:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC01 - Delete packet with valid packetId 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[404][39m

      297 |         expect(response.status()).toBe(testData.httpStatus.noContent);
      298 |       } else {
    > 299 |         expect([testData.httpStatus.notFound]).toContain(response.status());
          |                                                ^
      300 |       }
      301 |     });
      302 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:299:48


[1A[2K  16) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:239:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC04 - Create packet without required title 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m400[39m
    Received: [31m401[39m

      248 |       });
      249 |       
    > 250 |       expect(response.status()).toBe(testData.httpStatus.badRequest);
          |                                 ^
      251 |       const body = await response.json();
      252 |       expect(body).toHaveProperty('code');
      253 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:250:33


[1A[2K[24/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:112:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC04 - Update packet with missing required fields
[1A[2K  17) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:37:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC02 - Get packet with invalid external ID 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m404[39m
    Received: [31m200[39m

      38 |       const response = await request.get(`${BASE_URL}/api/packet/${testData.invalidIds.packetId}`);
      39 |       
    > 40 |       expect(response.status()).toBe(testData.httpStatus.notFound);
         |                                 ^
      41 |       const body = await response.json();
      42 |       expect(body).toHaveProperty('code');
      43 |       expect(body.code).toContain(testData.errorCodes.packetNotFound);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:40:33


[1A[2K[25/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:47:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC03 - Get users with search query
[1A[2K[26/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:181:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC01 - Create packet with valid data
[1A[2K[27/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:303:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC02 - Delete packet with invalid packetId
[1A[2K[28/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:255:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC05 - Create packet with invalid clientId
[1A[2K[29/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:128:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC01 - Get all packets without filters
[1A[2K[30/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:46:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC03 - Get packet with missing packetId parameter
[1A[2K  18) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:128:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC01 - Get all packets without filters 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      129 |       const response = await request.get(`${BASE_URL}/api/packet`);
      130 |       
    > 131 |       expect(response.status()).toBe(testData.httpStatus.success);
          |                                 ^
      132 |       const body = await response.json();
      133 |       expect(Array.isArray(body)).toBe(true);
      134 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:131:33


[1A[2K[chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:181:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC01 - Create packet with valid data
Packet creation failed with status: 401

[1A[2K  19) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:47:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC03 - Get users with search query 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      48 |       const response = await request.get(`${BASE_URL}/api/users?searchQuery=${testData.userSearch.query}`);
      49 |       
    > 50 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      51 |       const body = await response.json();
      52 |       expect(Array.isArray(body)).toBe(true);
      53 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:50:33


[1A[2K  20) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:181:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC01 - Create packet with valid data 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[400, 404][39m

      201 |           testData.httpStatus.badRequest,
      202 |           testData.httpStatus.notFound
    > 203 |         ]).toContain(response.status());
          |            ^
      204 |       }
      205 |     });
      206 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:203:12


[1A[2K  21) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:303:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC02 - Delete packet with invalid packetId 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m404[39m
    Received: [31m401[39m

      304 |       const response = await request.delete(`${BASE_URL}/api/packet/${testData.invalidIds.packetId}`);
      305 |       
    > 306 |       expect(response.status()).toBe(testData.httpStatus.notFound);
          |                                 ^
      307 |       const body = await response.json();
      308 |       expect(body).toHaveProperty('code');
      309 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:306:33


[1A[2K  22) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:255:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC05 - Create packet with invalid clientId 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[400, 404][39m

      268 |         testData.httpStatus.badRequest,
      269 |         testData.httpStatus.notFound
    > 270 |       ]).toContain(response.status());
          |          ^
      271 |     });
      272 |
      273 |     test('TC06 - Create packet with invalid formTypeIds', async ({ request }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:270:10


[1A[2K  23) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:46:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC03 - Get packet with missing packetId parameter 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[400, 404][39m

      50 |         testData.httpStatus.badRequest,
      51 |         testData.httpStatus.notFound
    > 52 |       ]).toContain(response.status());
         |          ^
      53 |     });
      54 |   });
      55 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:52:10


[1A[2K[31/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:78:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC05 - Get users with invalid costCenterIds parameter
[1A[2K[32/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:62:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC04 - Get users with both costCenterIds and search query
[1A[2K[33/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:117:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC02 - Get user with invalid userId
[1A[2K[34/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:311:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC03 - Delete already deleted packet
[1A[2K[35/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:135:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC04 - Get user with unauthorized access
[1A[2K[36/77] [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:57:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC01 - Update packet with valid data
[1A[2K  24) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:78:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC05 - Get users with invalid costCenterIds parameter 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[200, 400][39m

      82 |         testData.httpStatus.success,
      83 |         testData.httpStatus.badRequest
    > 84 |       ]).toContain(response.status());
         |          ^
      85 |     });
      86 |   });
      87 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:84:10


[1A[2K  25) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:117:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC02 - Get user with invalid userId 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m404[39m
    Received: [31m401[39m

      118 |       const response = await request.get(`${BASE_URL}/api/user/${testData.invalidIds.userId}`);
      119 |       
    > 120 |       expect(response.status()).toBe(testData.httpStatus.notFound);
          |                                 ^
      121 |       const body = await response.json();
      122 |       expect(body).toHaveProperty('code');
      123 |       expect(body.code).toContain(testData.errorCodes.userNotFound);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:120:33


[1A[2K  26) [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:311:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC03 - Delete already deleted packet 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m404[39m
    Received: [31m401[39m

      316 |         expect(secondResponse.status()).toBe(testData.httpStatus.notFound);
      317 |       } else {
    > 318 |         expect(firstResponse.status()).toBe(testData.httpStatus.notFound);
          |                                        ^
      319 |       }
      320 |     });
      321 |   });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\packet-api.spec.js:318:40


[1A[2K  27) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:62:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC04 - Get users with both costCenterIds and search query 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m) // Object.is equality[22m

    Expected: [32m200[39m
    Received: [31m401[39m

      63 |       const response = await request.get(`${BASE_URL}/api/users?costCenterIds=${testData.validIds.costCenterId}&searchQuery=${testData.userSearch.query}`);
      64 |       
    > 65 |       expect(response.status()).toBe(testData.httpStatus.success);
         |                                 ^
      66 |       const body = await response.json();
      67 |       expect(Array.isArray(body)).toBe(true);
      68 |       
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:65:33


[1A[2K  28) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:135:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC04 - Get user with unauthorized access 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m401[39m
    Received array: [31m[403, 404][39m

      139 |         testData.httpStatus.forbidden,
      140 |         testData.httpStatus.notFound
    > 141 |       ]).toContain(response.status());
          |          ^
      142 |       
      143 |       if (response.status() === testData.httpStatus.forbidden) {
      144 |         const body = await response.json();
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:141:10


[1A[2K[chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:57:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC01 - Update packet with valid data
Update failed with status: 404

[1A[2K[37/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:33:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Switches between tabs and shows correct content
[1A[2K[38/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:89:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC01 - Get user by valid userId
[1A[2K[39/77] [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:126:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC03 - Get user with missing userId parameter
[1A[2K[40/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:15:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Performs login ÔÇ║ Login as provider
[1A[2K[41/77] [chromium] ÔÇ║ playwright\e2e\auth.spec.js:5:3 ÔÇ║ Authentication ÔÇ║ @ui Login flow works end-to-end
[1A[2K[42/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:28:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Displays provider portal title and description
[1A[2K[chromium] ÔÇ║ playwright\e2e\auth.spec.js:5:3 ÔÇ║ Authentication ÔÇ║ @ui Login flow works end-to-end
Starting Microsoft OAuth login flow...

[1A[2K[43/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:52:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Breadcrumb returns to patient landing page
[1A[2K  29) [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:126:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC03 - Get user with missing userId parameter 

    Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoContain[2m([22m[32mexpected[39m[2m) // indexOf[22m

    Expected value: [32m200[39m
    Received array: [31m[400, 404][39m

      130 |         testData.httpStatus.badRequest,
      131 |         testData.httpStatus.notFound
    > 132 |       ]).toContain(response.status());
          |          ^
      133 |     });
      134 |
      135 |     test('TC04 - Get user with unauthorized access', async ({ request }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\api\user-api.spec.js:132:10


[1A[2K[44/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:65:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Displays search input field
[1A[2KLooking for Sign In button...

[1A[2KButton clicked, waiting for Microsoft OAuth page...

[1A[2K  30) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:15:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Performs login ÔÇ║ Login as provider 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-f6912-rms-login-Login-as-provider-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-f6912-rms-login-Login-as-provider-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-f6912-rms-login-Login-as-provider-chromium\error-context.md


[1A[2KÔ£à Navigated to Microsoft OAuth page

[1A[2K[45/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:71:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Searches for patients by name
[1A[2KLooking for Next button on Microsoft OAuth page (after Sign in with Microsoft)...

[1A[2KNo Next button found on Microsoft OAuth page (this is normal if email field is already visible)

[1A[2KLooking for email input field...

[1A[2K  31) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:33:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Switches between tabs and shows correct content 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      23 |     test.beforeEach(async ({ page }) => {
      24 |       // Ensure we're on the provider portal page
    > 25 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      26 |     });
      27 |
      28 |     test('Displays provider portal title and description', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:25:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-74b2c-s-and-shows-correct-content-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-74b2c-s-and-shows-correct-content-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-74b2c-s-and-shows-correct-content-chromium\error-context.md


[1A[2K  32) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:28:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Displays provider portal title and description 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      23 |     test.beforeEach(async ({ page }) => {
      24 |       // Ensure we're on the provider portal page
    > 25 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      26 |     });
      27 |
      28 |     test('Displays provider portal title and description', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:25:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-e5796-ortal-title-and-description-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-e5796-ortal-title-and-description-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-e5796-ortal-title-and-description-chromium\error-context.md


[1A[2K  33) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:52:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Breadcrumb returns to patient landing page 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      23 |     test.beforeEach(async ({ page }) => {
      24 |       // Ensure we're on the provider portal page
    > 25 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      26 |     });
      27 |
      28 |     test('Displays provider portal title and description', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:25:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-2d476-rns-to-patient-landing-page-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-2d476-rns-to-patient-landing-page-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-2d476-rns-to-patient-landing-page-chromium\error-context.md


[1A[2K[46/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:81:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows all patients when search is cleared
[1A[2K[47/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:90:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows loading state during search
[1A[2K[48/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:104:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient table with correct columns
[1A[2K  34) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:65:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Displays search input field 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      59 |     test.beforeEach(async ({ page }) => {
      60 |       // Navigate to Patient Management tab
    > 61 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      62 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      63 |     });
      64 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:61:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-eacec-Displays-search-input-field-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-eacec-Displays-search-input-field-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-eacec-Displays-search-input-field-chromium\error-context.md


[1A[2K[49/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:114:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays empty state when no patients found
[1A[2K  35) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:71:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Searches for patients by name 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      59 |     test.beforeEach(async ({ page }) => {
      60 |       // Navigate to Patient Management tab
    > 61 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      62 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      63 |     });
      64 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:61:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-16d6e-arches-for-patients-by-name-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-16d6e-arches-for-patients-by-name-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-16d6e-arches-for-patients-by-name-chromium\error-context.md


[1A[2K[50/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:121:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient data correctly when patients exist
[1A[2K  36) [chromium] ÔÇ║ playwright\e2e\auth.spec.js:5:3 ÔÇ║ Authentication ÔÇ║ @ui Login flow works end-to-end 

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for locator('input[type="email"], input[name="loginfmt"], input[id="i0116"]').first() to be visible[22m


       at ..\support\auth.js:97

       95 |   console.log('Looking for email input field...');
       96 |   const emailInput = page.locator('input[type="email"], input[name="loginfmt"], input[id="i0116"]').first();
    >  97 |   await emailInput.waitFor({ state: 'visible', timeout: 15000 });
          |                    ^
       98 |   console.log('Ô£à Email input field found, typing email:', USERNAME);
       99 |   
      100 |   // Clear the field first
        at login (C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\support\auth.js:97:20)
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\auth.spec.js:7:5

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\auth-Authentication-ui-Login-flow-works-end-to-end-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\auth-Authentication-ui-Login-flow-works-end-to-end-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\auth-Authentication-ui-Login-flow-works-end-to-end-chromium\error-context.md


[1A[2K[51/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:150:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Opens modal and displays all form fields
[1A[2K  37) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:81:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows all patients when search is cleared 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      59 |     test.beforeEach(async ({ page }) => {
      60 |       // Navigate to Patient Management tab
    > 61 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      62 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      63 |     });
      64 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:61:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-ad1f3-ents-when-search-is-cleared-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-ad1f3-ents-when-search-is-cleared-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-ad1f3-ents-when-search-is-cleared-chromium\error-context.md


[1A[2K  38) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:90:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows loading state during search 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      59 |     test.beforeEach(async ({ page }) => {
      60 |       // Navigate to Patient Management tab
    > 61 |       await expect(page).toHaveURL(/\/provider/);
         |                          ^
      62 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      63 |     });
      64 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:61:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-59e03-loading-state-during-search-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-59e03-loading-state-during-search-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-59e03-loading-state-during-search-chromium\error-context.md


[1A[2K  39) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:104:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient table with correct columns 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       98 |     test.beforeEach(async ({ page }) => {
       99 |       // Navigate to Patient Management tab
    > 100 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      101 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      102 |     });
      103 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:100:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-599d6--table-with-correct-columns-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-599d6--table-with-correct-columns-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-599d6--table-with-correct-columns-chromium\error-context.md


[1A[2K[52/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:157:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled when form is empty
[1A[2K[53/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:162:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without packet title
[1A[2K[54/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:175:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without user selection
[1A[2K  40) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:114:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays empty state when no patients found 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       98 |     test.beforeEach(async ({ page }) => {
       99 |       // Navigate to Patient Management tab
    > 100 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      101 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      102 |     });
      103 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:100:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8050d-tate-when-no-patients-found-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8050d-tate-when-no-patients-found-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-8050d-tate-when-no-patients-found-chromium\error-context.md


[1A[2K[55/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:190:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without form selection
[1A[2K  41) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:121:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient data correctly when patients exist 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       98 |     test.beforeEach(async ({ page }) => {
       99 |       // Navigate to Patient Management tab
    > 100 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      101 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      102 |     });
      103 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:100:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-169fe-rrectly-when-patients-exist-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-169fe-rrectly-when-patients-exist-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-169fe-rrectly-when-patients-exist-chromium\error-context.md


[1A[2K[56/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:202:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is enabled when all required fields are filled
[1A[2K  42) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:150:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Opens modal and displays all form fields 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-87053-nd-displays-all-form-fields-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-87053-nd-displays-all-form-fields-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-87053-nd-displays-all-form-fields-chromium\error-context.md


[1A[2K[57/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:228:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Loads and displays available form types
[1A[2K  43) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:157:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled when form is empty 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-fcadb-disabled-when-form-is-empty-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-fcadb-disabled-when-form-is-empty-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-fcadb-disabled-when-form-is-empty-chromium\error-context.md


[1A[2K  44) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:162:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without packet title 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-b9784-sabled-without-packet-title-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-b9784-sabled-without-packet-title-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-b9784-sabled-without-packet-title-chromium\error-context.md


[1A[2K[58/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:236:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting and deselecting form types
[1A[2K  45) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:175:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without user selection 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4a4be-bled-without-user-selection-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4a4be-bled-without-user-selection-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-4a4be-bled-without-user-selection-chromium\error-context.md


[1A[2K[59/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:248:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting multiple form types
[1A[2K[60/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:267:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Insert Packet ÔÇ║ Navigate to patient page and assign packet
[1A[2K  46) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:190:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without form selection 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8b062-bled-without-form-selection-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8b062-bled-without-form-selection-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-8b062-bled-without-form-selection-chromium\error-context.md


[1A[2K[61/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:299:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Opens modal when clicking view button on patient row
[1A[2K  47) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:202:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is enabled when all required fields are filled 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
    Call log:
    [2m  - waiting for getByRole('tab').filter({ hasText: 'Patient Management' }) to be visible[22m


      136 |       // Wait for tabs to be visible with increased timeout
      137 |       const patientManagementTab = page.getByRole('tab').filter({ hasText: 'Patient Management' });
    > 138 |       await patientManagementTab.waitFor({ state: 'visible', timeout: 15000 });
          |                                  ^
      139 |       await patientManagementTab.click();
      140 |       // Wait a bit for tab content to load
      141 |       await page.waitForTimeout(1000);
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:138:34

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-12e40--required-fields-are-filled-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-12e40--required-fields-are-filled-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-12e40--required-fields-are-filled-chromium\error-context.md


[1A[2K[62/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:308:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays patient information in modal header
[1A[2K  48) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:228:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Loads and displays available form types 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      221 |     test.beforeEach(async ({ page }) => {
      222 |       // Navigate to Patient Management tab and open assign modal
    > 223 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      224 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      225 |       await page.getByText('Assign New Packet').click();
      226 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:223:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-57bd7-splays-available-form-types-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-57bd7-splays-available-form-types-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-57bd7-splays-available-form-types-chromium\error-context.md


[1A[2K[63/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:318:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays all packets for the patient
[1A[2K  49) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:236:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting and deselecting form types 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      221 |     test.beforeEach(async ({ page }) => {
      222 |       // Navigate to Patient Management tab and open assign modal
    > 223 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      224 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      225 |       await page.getByText('Assign New Packet').click();
      226 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:223:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-6b056--and-deselecting-form-types-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-6b056--and-deselecting-form-types-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-6b056--and-deselecting-form-types-chromium\error-context.md


[1A[2K  50) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:248:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting multiple form types 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      221 |     test.beforeEach(async ({ page }) => {
      222 |       // Navigate to Patient Management tab and open assign modal
    > 223 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      224 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      225 |       await page.getByText('Assign New Packet').click();
      226 |     });
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:223:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-37068-lecting-multiple-form-types-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-37068-lecting-multiple-form-types-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-37068-lecting-multiple-form-types-chromium\error-context.md


[1A[2K[64/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:328:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays packet status chips correctly
[1A[2K[65/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:342:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Closes modal when close button is clicked
[1A[2K  51) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:267:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Insert Packet ÔÇ║ Navigate to patient page and assign packet 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      261 |     test.beforeEach(async ({ page }) => {
      262 |       // Navigate to Patient Management tab
    > 263 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      264 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      265 |     });
      266 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:263:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-41aec-ient-page-and-assign-packet-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-41aec-ient-page-and-assign-packet-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-41aec-ient-page-and-assign-packet-chromium\error-context.md


[1A[2K[66/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:360:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Copies packet URL to clipboard
[1A[2K  52) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:299:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Opens modal when clicking view button on patient row 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      293 |     test.beforeEach(async ({ page }) => {
      294 |       // Navigate to Patient Management tab
    > 295 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      296 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      297 |     });
      298 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:295:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4333e--view-button-on-patient-row-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4333e--view-button-on-patient-row-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-4333e--view-button-on-patient-row-chromium\error-context.md


[1A[2K[67/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:375:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Opens packet in new view when open button is clicked
[1A[2K  53) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:308:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays patient information in modal header 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      293 |     test.beforeEach(async ({ page }) => {
      294 |       // Navigate to Patient Management tab
    > 295 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      296 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      297 |     });
      298 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:295:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8fdd6-information-in-modal-header-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-8fdd6-information-in-modal-header-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-8fdd6-information-in-modal-header-chromium\error-context.md


[1A[2K[68/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:393:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Deletes packet with confirmation
[1A[2K  54) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:318:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays all packets for the patient 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      293 |     test.beforeEach(async ({ page }) => {
      294 |       // Navigate to Patient Management tab
    > 295 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      296 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      297 |     });
      298 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:295:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-85ab2-all-packets-for-the-patient-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-85ab2-all-packets-for-the-patient-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-85ab2-all-packets-for-the-patient-chromium\error-context.md


[1A[2K[69/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:420:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Cancels packet deletion when cancel is clicked
[1A[2K  55) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:328:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays packet status chips correctly 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      293 |     test.beforeEach(async ({ page }) => {
      294 |       // Navigate to Patient Management tab
    > 295 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      296 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      297 |     });
      298 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:295:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-a65e3-cket-status-chips-correctly-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-a65e3-cket-status-chips-correctly-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-a65e3-cket-status-chips-correctly-chromium\error-context.md


[1A[2K  56) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:342:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Closes modal when close button is clicked 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      293 |     test.beforeEach(async ({ page }) => {
      294 |       // Navigate to Patient Management tab
    > 295 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      296 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      297 |     });
      298 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:295:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-007c3-hen-close-button-is-clicked-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-007c3-hen-close-button-is-clicked-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-007c3-hen-close-button-is-clicked-chromium\error-context.md


[1A[2K[70/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:447:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Analytics Tab ÔÇ║ Navigates to Analytics tab and displays content
[1A[2K[71/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:460:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Navigates to Settings tab and displays health check
[1A[2K  57) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:360:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Copies packet URL to clipboard 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      354 |     test.beforeEach(async ({ page }) => {
      355 |       // Navigate to Patient Management tab
    > 356 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      357 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      358 |     });
      359 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:356:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-e0bb6-ies-packet-URL-to-clipboard-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-e0bb6-ies-packet-URL-to-clipboard-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-e0bb6-ies-packet-URL-to-clipboard-chromium\error-context.md


[1A[2K[72/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:467:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Displays health check status indicator
[1A[2K  58) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:375:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Opens packet in new view when open button is clicked 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      354 |     test.beforeEach(async ({ page }) => {
      355 |       // Navigate to Patient Management tab
    > 356 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      357 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      358 |     });
      359 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:356:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-b8dc6-when-open-button-is-clicked-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-b8dc6-when-open-button-is-clicked-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-b8dc6-when-open-button-is-clicked-chromium\error-context.md


[1A[2K[73/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:488:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Types a really long packet name
[1A[2K  59) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:393:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Deletes packet with confirmation 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      354 |     test.beforeEach(async ({ page }) => {
      355 |       // Navigate to Patient Management tab
    > 356 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      357 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      358 |     });
      359 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:356:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-a85c3-es-packet-with-confirmation-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-a85c3-es-packet-with-confirmation-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-a85c3-es-packet-with-confirmation-chromium\error-context.md


[1A[2K[74/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:497:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles empty patient list gracefully
[1A[2K  60) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:420:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Cancels packet deletion when cancel is clicked 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      354 |     test.beforeEach(async ({ page }) => {
      355 |       // Navigate to Patient Management tab
    > 356 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      357 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      358 |     });
      359 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:356:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-2ff74-tion-when-cancel-is-clicked-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-2ff74-tion-when-cancel-is-clicked-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-2ff74-tion-when-cancel-is-clicked-chromium\error-context.md


[1A[2K[75/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:505:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles modal close on escape key
[1A[2K  61) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:447:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Analytics Tab ÔÇ║ Navigates to Analytics tab and displays content 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      442 |   test.describe('Analytics Tab', () => {
      443 |     test.beforeEach(async ({ page }) => {
    > 444 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      445 |     });
      446 |
      447 |     test('Navigates to Analytics tab and displays content', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:444:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-95339-cs-tab-and-displays-content-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-95339-cs-tab-and-displays-content-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-95339-cs-tab-and-displays-content-chromium\error-context.md


[1A[2K  62) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:460:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Navigates to Settings tab and displays health check 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      455 |   test.describe('Settings Tab', () => {
      456 |     test.beforeEach(async ({ page }) => {
    > 457 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      458 |     });
      459 |
      460 |     test('Navigates to Settings tab and displays health check', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:457:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-7ceda-b-and-displays-health-check-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-7ceda-b-and-displays-health-check-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-7ceda-b-and-displays-health-check-chromium\error-context.md


[1A[2K[76/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:525:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet assignment
[1A[2K[77/77] [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:544:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet deletion
[1A[2K  63) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:467:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Displays health check status indicator 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      455 |   test.describe('Settings Tab', () => {
      456 |     test.beforeEach(async ({ page }) => {
    > 457 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      458 |     });
      459 |
      460 |     test('Navigates to Settings tab and displays health check', async ({ page }) => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:457:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-fe790-alth-check-status-indicator-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-fe790-alth-check-status-indicator-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-fe790-alth-check-status-indicator-chromium\error-context.md


[1A[2K  64) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:488:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Types a really long packet name 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      482 |     test.beforeEach(async ({ page }) => {
      483 |       // Navigate to Patient Management tab
    > 484 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      485 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      486 |     });
      487 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:484:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-33f7d-s-a-really-long-packet-name-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-33f7d-s-a-really-long-packet-name-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-33f7d-s-a-really-long-packet-name-chromium\error-context.md


[1A[2K  65) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:497:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles empty patient list gracefully 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      482 |     test.beforeEach(async ({ page }) => {
      483 |       // Navigate to Patient Management tab
    > 484 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      485 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      486 |     });
      487 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:484:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-3c699-pty-patient-list-gracefully-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-3c699-pty-patient-list-gracefully-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-3c699-pty-patient-list-gracefully-chromium\error-context.md


[1A[2K  66) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:505:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles modal close on escape key 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      482 |     test.beforeEach(async ({ page }) => {
      483 |       // Navigate to Patient Management tab
    > 484 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      485 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      486 |     });
      487 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:484:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4d25c-s-modal-close-on-escape-key-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-4d25c-s-modal-close-on-escape-key-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-4d25c-s-modal-close-on-escape-key-chromium\error-context.md


[1A[2K  67) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:525:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet assignment 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      519 |     test.beforeEach(async ({ page }) => {
      520 |       // Navigate to Patient Management tab
    > 521 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      522 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      523 |     });
      524 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:521:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-5d920-ist-after-packet-assignment-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-5d920-ist-after-packet-assignment-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-5d920-ist-after-packet-assignment-chromium\error-context.md


[1A[2K  68) [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:544:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet deletion 

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    8 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


       9 |     // Just navigate to provider portal
      10 |     await page.goto('/employee');
    > 11 |     await expect(page).toHaveURL(/\/provider/);
         |                        ^
      12 |   });
      13 |
      14 |   test.describe('Performs login', () => {
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:11:24

    Error: [2mexpect([22m[31mpage[39m[2m).[22mtoHaveURL[2m([22m[32mexpected[39m[2m)[22m failed

    Expected pattern: [32m/\/provider/[39m
    Received string:  [31m"https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[39m
    Timeout: 5000ms

    Call log:
    [2m  - Expect "toHaveURL" with timeout 5000ms[22m
    [2m    9 ├ù unexpected value "https://rha-patient-hgcya0gsd6e4gnde.eastus-01.azurewebsites.net/employee"[22m


      519 |     test.beforeEach(async ({ page }) => {
      520 |       // Navigate to Patient Management tab
    > 521 |       await expect(page).toHaveURL(/\/provider/);
          |                          ^
      522 |       await page.getByRole('tab').filter({ hasText: 'Patient Management' }).click();
      523 |     });
      524 |
        at C:\Users\HenriquedeCaraOlivei\Documents\Codebase\test-automation-poc\playwright\e2e\ui\providerPortal.spec.js:521:26

    attachment #1: screenshot (image/png) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-bb712--list-after-packet-deletion-chromium\test-failed-1.png
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    attachment #2: video (video/webm) ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ
    test-results\ui-providerPortal-Provider-bb712--list-after-packet-deletion-chromium\video.webm
    ÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇÔöÇ

    Error Context: test-results\ui-providerPortal-Provider-bb712--list-after-packet-deletion-chromium\error-context.md


[1A[2K  68 failed
    [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:16:3 ÔÇ║ Analytics API @api ÔÇ║ TC01 - Get analytics data successfully 
    [chromium] ÔÇ║ playwright\e2e\api\analytics-api.spec.js:27:3 ÔÇ║ Analytics API @api ÔÇ║ TC02 - Verify analytics response structure 
    [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:67:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC01 - Get all forms successfully 
    [chromium] ÔÇ║ playwright\e2e\api\form-api.spec.js:82:5 ÔÇ║ Form API @api ÔÇ║ Get All Forms ÔÇ║ TC02 - Verify forms response structure 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:23:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC01 - Get packet by valid external ID 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:37:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC02 - Get packet with invalid external ID 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:46:5 ÔÇ║ Packet API @api ÔÇ║ Get Packet ÔÇ║ TC03 - Get packet with missing packetId parameter 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:81:5 ÔÇ║ Packet API @api ÔÇ║ Update Packet ÔÇ║ TC02 - Update packet with invalid packetId 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:128:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC01 - Get all packets without filters 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:142:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC02 - Get all packets filtered by status 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:156:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC03 - Get all packets excluding a status 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:170:5 ÔÇ║ Packet API @api ÔÇ║ Get All Packets ÔÇ║ TC04 - Get all packets with invalid status parameter 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:181:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC01 - Create packet with valid data 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:207:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC02 - Create packet without required clientId 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:223:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC03 - Create packet without required formTypeIds 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:239:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC04 - Create packet without required title 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:255:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC05 - Create packet with invalid clientId 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:273:5 ÔÇ║ Packet API @api ÔÇ║ Create Packet ÔÇ║ TC06 - Create packet with invalid formTypeIds 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:293:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC01 - Delete packet with valid packetId 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:303:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC02 - Delete packet with invalid packetId 
    [chromium] ÔÇ║ playwright\e2e\api\packet-api.spec.js:311:5 ÔÇ║ Packet API @api ÔÇ║ Delete Packet ÔÇ║ TC03 - Delete already deleted packet 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:17:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC01 - Get all users without filters 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:33:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC02 - Get users filtered by costCenterIds 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:47:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC03 - Get users with search query 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:62:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC04 - Get users with both costCenterIds and search query 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:78:5 ÔÇ║ User API @api ÔÇ║ Get Users ÔÇ║ TC05 - Get users with invalid costCenterIds parameter 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:117:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC02 - Get user with invalid userId 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:126:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC03 - Get user with missing userId parameter 
    [chromium] ÔÇ║ playwright\e2e\api\user-api.spec.js:135:5 ÔÇ║ User API @api ÔÇ║ Get User ÔÇ║ TC04 - Get user with unauthorized access 
    [chromium] ÔÇ║ playwright\e2e\auth.spec.js:5:3 ÔÇ║ Authentication ÔÇ║ @ui Login flow works end-to-end 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:15:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Performs login ÔÇ║ Login as provider 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:28:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Displays provider portal title and description 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:33:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Switches between tabs and shows correct content 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:52:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Provider Portal Navigation ÔÇ║ Breadcrumb returns to patient landing page 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:65:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Displays search input field 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:71:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Searches for patients by name 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:81:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows all patients when search is cleared 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:90:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Search ÔÇ║ Shows loading state during search 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:104:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient table with correct columns 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:114:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays empty state when no patients found 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:121:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient List Display ÔÇ║ Displays patient data correctly when patients exist 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:150:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Opens modal and displays all form fields 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:157:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled when form is empty 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:162:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without packet title 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:175:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without user selection 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:190:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is disabled without form selection 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:202:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Validation ÔÇ║ Submit button is enabled when all required fields are filled 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:228:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Loads and displays available form types 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:236:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting and deselecting form types 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:248:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Assign Packet Modal - Form Selection ÔÇ║ Allows selecting multiple form types 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:267:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Insert Packet ÔÇ║ Navigate to patient page and assign packet 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:299:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Opens modal when clicking view button on patient row 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:308:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays patient information in modal header 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:318:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays all packets for the patient 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:328:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Displays packet status chips correctly 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:342:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Patient Packets Modal ÔÇ║ Closes modal when close button is clicked 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:360:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Copies packet URL to clipboard 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:375:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Opens packet in new view when open button is clicked 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:393:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Deletes packet with confirmation 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:420:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Packet Actions ÔÇ║ Cancels packet deletion when cancel is clicked 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:447:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Analytics Tab ÔÇ║ Navigates to Analytics tab and displays content 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:460:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Navigates to Settings tab and displays health check 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:467:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Settings Tab ÔÇ║ Displays health check status indicator 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:488:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Types a really long packet name 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:497:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles empty patient list gracefully 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:505:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Edge cases ÔÇ║ Handles modal close on escape key 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:525:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet assignment 
    [chromium] ÔÇ║ playwright\e2e\ui\providerPortal.spec.js:544:5 ÔÇ║ Provider Portal Page @ui ÔÇ║ Data Refresh ÔÇ║ Refreshes patient list after packet deletion 
  2 skipped
  7 passed (4.5m)

[36m  Serving HTML report at http://localhost:55547. Press Ctrl+C to quit.[39m
