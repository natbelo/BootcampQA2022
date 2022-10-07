class BugBankPage {
  go() {
    cy.visit("https://bugbank.netlify.app/");
    cy.get(".pages__Title-sc-1ee1f2s-4").should(
      "have.text",
      "O banco com bugs e falhas do seu jeito"
    );
  }

  fillForm(userbugbank) {
    cy.get(
      "form  div.login__buttons  button.style__ContainerButton-sc-1wsixal-0.ihdmxA.button__child"
    ).click();
    cy.get(":nth-child(2) > .input__default").type(userbugbank.email, {
      force: true,
    });
    cy.get('input[name="name"]').type(userbugbank.nome, {
      force: true,
    });
    cy.get(
      ":nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
    ).type(userbugbank.password, {
      force: true,
    });
    cy.get('input[name="passwordConfirmation"]').type(userbugbank.password, {
      force: true,
    });
    cy.get('label[id="toggleAddBalance"]').click({
      force: true,
    });
    cy.get(" div.card__register  form > button").click({
      force: true,
    });
  }

  login(userbugbank) {
    cy.get(
      ".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
    ).type(userbugbank.email);
    cy.get("div.card__login  form  div.login__password  div  input").type(
      userbugbank.password
    );
    cy.get(".otUnI").click();
  }
}

export default BugBankPage;
