//Crie um teste parametrizado para realizar as seguintes ações
//○ Logar na bookstore - ok
//○ Adicionar um livro à sua lista
//○ Acessar o profile
//○ Validar o livro adicionado à sua lista

describe("Demo Tools QA", () => {
  it.only("Adicionar livro com sucesso", () => {
    cy.visit("https://demoqa.com/login");
    cy.get(".main-header").should("have.text", "Login");
    cy.get("input[id=userName]").type("teste001");
    cy.get("input[id=password]").type("Teste@001");
    cy.get("button[id=login]").click();
    cy.get(".main-header").should("have.text", "Profile");
    cy.visit("https://demoqa.com/books");
    cy.get("span[id='see-book-Git Pocket Guide']").click();
    cy.get(".text-right > #addNewRecordButton").click();
    cy.visit("https://demoqa.com/profile");
    cy.get("#see-book-Git\\ Pocket\\ Guide > a").should(
      "have.text",
      "Git Pocket Guide"
    );
  });
});
