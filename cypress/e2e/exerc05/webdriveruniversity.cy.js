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

  it("Iframe", () => {
    cy.get('a[href="IFrame/index.html"]')
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
    cy.frameLoaded("iframe[role='presentation']");
    cy.iframe().xpath("//span[text()='Maps']").click();
    cy.get('a[href="../Contact-Us/contactus.html"]', { timeout: 15000 })
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
  });

  it.only("Date Picker", () => {
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
