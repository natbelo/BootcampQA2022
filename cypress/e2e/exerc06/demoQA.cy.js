// Logar na bookstore
// Adicionar um livro à sua lista
// Acessar o profile
// Validar o livro adicionado à sua lista

import elements, { ELEMENTSDemoqa } from "../../support/constants/elements";

describe("Teste Parametrizado na Bookstore", () => {
  it("realizar registro", () => {
    cy.visit("https://demoqa.com/books");
    cy.get("#login").click();
    cy.get(".main-header").should("have.text", "Login");
    cy.get("#newUser").click();
    cy.get(ELEMENTSDemoqa.firstname).type(ELEMENTSDemoqa.namefirst);
    cy.get(ELEMENTSDemoqa.lastname).type(ELEMENTSDemoqa.namelast);
    cy.get(ELEMENTSDemoqa.userName).type(ELEMENTSDemoqa.namefirst);
    cy.get(ELEMENTSDemoqa.password).type(ELEMENTSDemoqa.senha, { log: false });
    cy.get("#g-recaptcha > div > div > iframe").should("be.visible").click();
    cy.iframe("#g-recaptcha > div > div > iframe")
      .find("#recaptcha-anchor > div.recaptcha-checkbox-border")
      .click();
    cy.get("#register").click();
  });

  it.only("realizar login", () => {
    cy.visit("https://demoqa.com/books");
    cy.get("#login").click();
    cy.get(".main-header").should("have.text", "Login");
    cy.get(ELEMENTSDemoqa.userName).type(ELEMENTSDemoqa.namefirst);
    cy.get(ELEMENTSDemoqa.password).type(ELEMENTSDemoqa.senha, { log: false });
    cy.get("#login").click();
    cy.get("#userName-value").should("have.text", ELEMENTSDemoqa.namefirst);
    cy.get("span[id='see-book-Git Pocket Guide']").click();
    cy.get("#addNewRecordButton").click();
    cy.visit("https://demoqa.com/profile");
    cy.get("#see-book-Git\\ Pocket\\ Guide > a").should(
      "have.text",
      "Git Pocket Guide"
    );
  });
});
