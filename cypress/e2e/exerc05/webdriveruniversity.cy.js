describe("Web Driver UNiversity", () => {
  beforeEach("Acesso Home Page", () => {
    cy.visit("http://webdriveruniversity.com/");
  });

  it("Ajax Loader", () => {
    cy.get('a[href="Ajax-Loader/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.get("#button1 > p", { timeout: 15000 }).should("be.visible").click();

    cy.get(".modal-footer > .btn", { timeout: 15000 }).click();
  });

  it.only("Iframe", () => {
    cy.get('a[href="IFrame/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
    cy.get('a[href="../Contact-Us/contactus.html"]', { timeout: 15000 })
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  });

  it("Date Picker", () => {
    cy.get('a[href="Datepicker/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target");
  });
});
