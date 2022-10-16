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

  it("Seleção de checkbox", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get('input[type="checkbox"]').check();
  });

  it("Seleção de dropdown", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("select").select("volvo").should("have.value", "volvo");
    cy.get("select").select("audi").should("have.value", "audi");
  });

  it("Seleção de lista", () => {
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("li.et_pb_tab_1").should("have.text", "Tab 2");
    cy.get("li.et_pb_tab_0.et_pb_tab_active").should("have.text", "Tab 1");
  });
});
