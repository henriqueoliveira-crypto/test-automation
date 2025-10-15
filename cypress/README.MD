# Cypress Test Automation

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing of web applications. Cypress is a modern JavaScript-based test framework that makes it easy to write, run, and debug tests.


Before running Cypress, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installing cypress

`npm install cypress --save-dev`

### Execute cypress test runner (GUI mode)

This will open Cypress Graphical user interface so you can select between E2E testing or Component Testing.
> For this project we'll only use E2E testing option

`npx cypress open`

### Run Cypress Tests in Headless Mode (CLI)

`npx cypress run`

### Running in a specific browser

`npx cypress run --browser chrome`

### Folder Structure

```
cypress/
├── e2e/               # Test files go here
├── fixtures/          # Mock data for tests
├── support/           # Custom commands and setup
cypress.config.js      # Cypress configuration file
```
### Configuration file
-  `cypress.config.js` we set the `baseUrl` where the tests will run against.

### Support folder
- Inside `support` folder, we have the `commands.js` file, where we set custom commands that can be called. For that, we just start the command: `Cypress.Commands.add('commandToBeAdded', () => {`

    - Then, for using it, we simply put `cy.commandToBeAdded` and it will execute that was set on that command.

### Page Objects

On UI Automation, we use page objects to map each element of the page as an object, making it easier to read and reuse the code.

### Evidences

At the end of the execution when using the headless mode, cypres will add a screenshot in the `screenshots` folder if any error occurs:





