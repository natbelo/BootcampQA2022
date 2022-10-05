describe("Exercício Bug Bank", () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("Acessar página Bug Bank", () => {
    cy.visit("https://bugbank.netlify.app/");
    cy.get(".pages__Title-sc-1ee1f2s-4").should(
      "have.text",
      "O banco com bugs e falhas do seu jeito"
    );
  });

  it("Registrar cliente com saldo em conta", () => {
    cy.get(
      "form  div.login__buttons  button.style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child"
    ).click();
    cy.get(":nth-child(2) > .input__default").type("teste@teste.com", {
      force: true,
    });
    cy.get('input[name="name"]').type("Natália", {
      force: true,
    });
    cy.get(
      ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
    ).type("teste123", {
      force: true,
    });
    cy.get('input[name="passwordConfirmation"]').type("teste123", {
      force: true,
    });
    cy.get('label[id="toggleAddBalance"]').click({
      force: true,
    });
    cy.get(" div.card__register  form > button").click({
      force: true,
    });
    cy.get('p[id="modalText"]').contains("sucesso");
    cy.get("#btnCloseModal").click();
  });

  it("Login com cliente criado", () => {
    cy.get(
      ".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
    ).type("teste@teste.com");
    cy.get("div.card__login  form  div.login__password  div  input").type(
      "teste123"
    );
    cy.get(".otUnI").click();
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
