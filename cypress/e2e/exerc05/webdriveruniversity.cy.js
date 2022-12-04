import "cypress-iframe";

import elements, {
  ELEMENTSUniversity,
  contactUs,
} from "../../support/constants/elements";

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
    cy.wait(3000);
    cy.get(".modal-footer > .btn", { timeout: 15000 }).click();
  });

  it.only("Iframe", () => {
    // cy.get('a[href="IFrame/index.html"]')
    //   .should("be.visible")
    //   .invoke("removeAttr", "target")
    //   .click();
    // cy.frameLoaded("#frame");
    // cy.iframe("#frame")
    //   .find('a[href="../Contact-Us/contactus.html"]')
    //   .should("be.visible")
    //   .invoke("removeAttr", "target")
    //   .click();
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    cy.get(ELEMENTSUniversity.firstName).type(contactUs.name);
    cy.get(ELEMENTSUniversity.lastName).type(contactUs.lastName);
    cy.get(ELEMENTSUniversity.emailAddress).type(contactUs.emailAddress);
    cy.get(ELEMENTSUniversity.comments).type("testando");
    cy.get(ELEMENTSUniversity.submit).click();
    cy.get("#contact_reply > h1").should(
      "have.text",
      "Thank You for your Message!"
    );
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
