describe("Exercício Ultimate QA", () => {
  it("Validar elemento Clickable Icon", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get('a[href="/link-success"]').should("be.visible").click();
    cy.get("div:nth-child(1)  h1").should("have.text", "Link success");
    cy.get('a[href="https://ultimateqa.com/"]').should("be.visible").click();
  });

  it("Preencher o contato e validar a mensagem de Thanks for contacting us", () => {
    cy.get("#menu-item-216842 > a").should("be.visible").click();
    cy.get('input[placeholder="First Name"]').type("Natália");
    cy.get('input[placeholder="Last Name"]').type("Teste");
    cy.get('input[placeholder="Email Address"]').type("natalia@teste.com");
    cy.get('textarea[placeholder="Message"]').type("testeQA");
    cy.get('button[type="submit"]').should("be.visible").click();
    cy.get(".et-pb-contact-message").should(
      "have.text",
      "Thanks for contacting us"
    );
  });

  it("Seleção de radio button", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get('input[type="radio"][value="female"]').check();
  });
});
