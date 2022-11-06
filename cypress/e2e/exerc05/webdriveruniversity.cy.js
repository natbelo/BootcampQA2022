import "cypress-iframe";

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
    cy.frameLoaded("#frame");
    cy.iframe("#frame")
      .find('a[href="../Contact-Us/contactus.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  });

  it("Date Picker", () => {
    const hoje = new Date();
    const dia = hoje.getDate().toString().padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    const dataAtual = `${mes} / ${dia - 1} / ${ano}`;

    cy.get('a[href="Datepicker/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.get("#datepicker input").clear({ force: true });
    cy.get('input[type="text"]').type(dataAtual, { force: true });
  });
});
