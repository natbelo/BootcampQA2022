import BugerEatsSignupPage from "../../pages/BugerEatsSignupPage";

describe("Exercício Buger Eats", () => {
  it("Cadastro completo com sucesso", () => {
    var entregador = {
      nome: "Natália",
      cpf: "12345678901",
      email: "natalia@teste.com",
      whatsapp: "81999999999",
      endereco: {
        cep: "13086902",
        rua: "Rua Doutor Ricardo Benetton Martins",
        numero: "s/n",
        complemento: "s/n",
        bairro: "Polo II de Alta Tecnologia (Campinas)",
        cidade_uf: "Campinas/SP",
      },
      metodo_entrega: "Bicicleta",
      cnh: "cnh-testeqa.jpg",
    };

    var bugereatsignup = new BugerEatsSignupPage();

    bugereatsignup.go();
    bugereatsignup.fillForm(entregador);
    bugereatsignup.attach(entregador);
    bugereatsignup.submit();
    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    bugereatsignup.modalContentShouldBe(expectedMessage);
  });

  it("CPF inválido", () => {
    var entregador = {
      nome: "Natália",
      cpf: "teste",
      email: "natalia@teste.com",
      whatsapp: "81999999999",
      endereco: {
        cep: "13086902",
        rua: "Rua Doutor Ricardo Benetton Martins",
        numero: "s/n",
        complemento: "s/n",
        bairro: "Polo II de Alta Tecnologia (Campinas)",
        cidade_uf: "Campinas/SP",
      },
      metodo_entrega: "Bicicleta",
      cnh: "cnh-testeqa.jpg",
    };

    var bugereatsignup = new BugerEatsSignupPage();

    bugereatsignup.go();
    bugereatsignup.fillForm(entregador);
    bugereatsignup.attach(entregador);
    bugereatsignup.submit();
    bugereatsignup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("CNH faltando", () => {
    var entregador = {
      nome: "Natália",
      cpf: "12345678901",
      email: "natalia@teste.com",
      whatsapp: "81999999999",
      endereco: {
        cep: "13086902",
        rua: "Rua Doutor Ricardo Benetton Martins",
        numero: "s/n",
        complemento: "s/n",
        bairro: "Polo II de Alta Tecnologia (Campinas)",
        cidade_uf: "Campinas/SP",
      },
      metodo_entrega: "Bicicleta",
      cnh: "cnh-testeqa.jpg",
    };

    var bugereatsignup = new BugerEatsSignupPage();

    bugereatsignup.go();
    bugereatsignup.fillForm(entregador);
    bugereatsignup.submit();
    bugereatsignup.alertMessageShouldBe("Adicione uma foto da sua CNH");
  });
});
