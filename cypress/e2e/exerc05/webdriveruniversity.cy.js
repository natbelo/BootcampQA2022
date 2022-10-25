describe("Web Driver UNiversity", () => {
  it("Acesso Home Page", () => {
    cy.visit("http://webdriveruniversity.com/");
  });

  it("Ajax Loader", () => {
    cy.get('a[href="Ajax-Loader/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
    cy.wait(3000);
    cy.get("#button1 > p").should("be.visible").click();
    cy.wait(3000);
    cy.get(".modal-footer > .btn").click();
  });
});
