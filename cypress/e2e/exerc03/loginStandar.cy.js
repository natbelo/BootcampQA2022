describe("Usuário Standard", () => {
  beforeEach(() => {
    cy.visit("http://www.saucedemo.com/");
    cy.login();
    cy.contains(".title", "Products").should("be.visible");
  });

  it("Sort products by price", () => {
    cy.get("select").select("lohi");
  });

  it("Compra de produto", () => {
    const userstandard = require("../../fixtures/userstandard");
    cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('button[id="checkout"]').click();
    cy.get('input[id="first-name"]').type(userstandard.name);
    cy.get('input[id="last-name"]').type(userstandard.name);
    cy.get('input[id="postal-code"]').type("50000000");
    cy.get('input[id="continue"]').click();
    cy.get('button[id="finish"]').click();
    cy.get("h2[class=complete-header]").should(
      "have.text",
      "THANK YOU FOR YOUR ORDER"
    );
  });

  it.only("Verificar soma dos produtos", () => {
    const userstandard = require("../../fixtures/userstandard");
    cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('button[id="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get(
      ":nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price"
    ).should("have.text", "$7.99");

    cy.get(
      ":nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price"
    ).should("have.text", "$29.99");

    cy.get(
      ":nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price"
    ).should("have.text", "$9.99");
    cy.get('button[id="checkout"]').click();
    cy.get('input[id="first-name"]').type(userstandard.name);
    cy.get('input[id="last-name"]').type(userstandard.name);
    cy.get('input[id="postal-code"]').type("50000000");
    cy.get('input[id="continue"]').click();
    cy.get("div.summary_total_label").should("have.text", "Total: $51.81");
    cy.get('button[id="finish"]').click();
    cy.get("h2[class=complete-header]").should(
      "have.text",
      "THANK YOU FOR YOUR ORDER"
    );
  });
});
