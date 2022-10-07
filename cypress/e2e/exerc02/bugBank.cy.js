import BugBankPage from "../../pages/BugBankPage";

describe("Exercício Bug Bank", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Registrar cliente com saldo em conta", () => {
    const userbugbank = require("../../fixtures/userbugbank");

    var bugbank = new BugBankPage();

    bugbank.go();
    bugbank.fillForm(userbugbank);

    cy.get('p[id="modalText"]').contains("sucesso");
    cy.get("#btnCloseModal").click();
  });

  it("Login com cliente criado", () => {
    const userbugbank = require("../../fixtures/userbugbank");

    var bugbank = new BugBankPage();

    bugbank.login(userbugbank);

    cy.get(
      "div.home__ContainerText-sc-1auj767-7.iDA-Ddb  p:nth-child(1)"
    ).should("have.text", "Olá Natália,");
  });

  it("Obter extrato", () => {
    cy.get('a[id="btn-EXTRATO"]').click();
    cy.get(" p.bank-statement__LabelText-sc-7n8vh8-10.UPwdn").should(
      "have.text",
      "Saldo disponível"
    );
  });
});
