describe("Exercício Swag Labs", () => {
  const data = require("../../fixtures/data");

  data.forEach((item, index) => {
    it(`${index + 1} - Login com diferentes usuários`, () => {
      cy.visit("http://www.saucedemo.com/");
      cy.get('input[name="user-name"]').type(item.name);
      cy.get('input[name="password"]').type(item.password);
      cy.get('input[name="login-button"]').click();
    });
  });
});
