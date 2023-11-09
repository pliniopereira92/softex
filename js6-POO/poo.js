class carro {
    constructor(nome, cor, preco) {
      this.nome = nome;
      this.cor = cor;
      this.preco = preco;
    }
  
    descricao() {
      return `Este é um ${this.nome} de cor ${this.cor} e custa R$${this.preco}.`;
    }
  
    verificarDisponibilidade() {
      return "Disponível para compra.";
    }
  
    calcularDesconto(desconto) {
      return this.preco - desconto;
    }
}

class bicicleta {
    constructor(nome, cor, preco) {
      this.nome = nome;
      this.cor = cor;
      this.preco = preco;
    }
  
    descricao() {
      return `Este é um ${this.nome} de cor ${this.cor} e custa R$${this.preco}.`;
    }
  
    verificarDisponibilidade() {
      return "Disponível para compra.";
    }
  
    calcularDesconto(desconto) {
      return this.preco - desconto;
    }
}

class ContaDeBanco {
    constructor(numconta, saldo, tipoconta) {
      this.numconta = numconta;
      this.saldo = saldo;
      this.tipoconta = tipoconta;
    }
  
    buscarSaldo() {
      return this.saldo;
    }
  
    deposito(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return "Valor inválido para depósito.";
      }
    }
  
    saque(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
      } else {
        return "Saldo insuficiente ou valor de saque inválido.";
      }
    }
}

class PerfilSocial {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  
    descricao() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
    }
  
    atualizarCidade(novaCidade) {
      this.cidade = novaCidade;
      return "Perfil atualizado com sucesso.";
    }
  
    verificarMaioridade() {
      if (this.idade >= 18) {
        return "Usuário é maior de idade.";
      } else {
        return "Usuário é menor de idade.";
      }
    }
}

// Criando objetos
var meucarro = new carro("Elantra", "Preto", 15000.0);
var minhabicicleta = new bicicleta("Ciri_magrelo", "Azul", 800.0);
var minhaConta = new ContaDeBanco("12345", 1000.0, "Corrente");
var perfilUsuario = new PerfilSocial("João", 25, "São Paulo");

// Exemplo de uso
console.log(meucarro.descricao());
console.log(meucarro.verificarDisponibilidade());
console.log(`Preço com desconto: R$${meucarro.calcularDesconto(2000)}`);

console.log(minhabicicleta.descricao());
console.log(minhabicicleta.verificarDisponibilidade());
console.log(`Preço com desconto: R$${minhabici.calcularDesconto(2000)}`);

console.log(minhaConta.deposito(500.0));
console.log(minhaConta.saque(200.0));
console.log("Saldo atual: " + minhaConta.buscarSaldo());

console.log(perfilUsuario.descricao());
console.log(perfilUsuario.atualizarCidade("Rio de Janeiro"));
console.log(perfilUsuario.verificarMaioridade());
