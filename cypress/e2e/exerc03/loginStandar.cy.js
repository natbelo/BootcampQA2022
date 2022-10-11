describe("Usuário Standard", () => {
  it("Login with standard_user", () => {
    cy.visit("http://www.saucedemo.com/");
    cy.login();
    cy.contains(".title", "Products").should("be.visible");
  });

  it("Sort products by price", () => {
    cy.get("select").select("lohi");
  });

  it("Compra de produto", () => {
    cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click();
  });
});
