Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

Cypress.Commands.add("login", (name, password) => {
  cy.get('input[name="user-name"]').type("standard_user");
  cy.get('input[name="password"]').type("secret_sauce", { log: false });
  cy.get('input[name="login-button"]').click();
});

Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("list not defined")) {
    return false;
  }
});

Cypress.on("uncaught:exception", (err, runnable, promise) => {
  if (promise) {
    return false;
  }
});

import "cypress-iframe";
