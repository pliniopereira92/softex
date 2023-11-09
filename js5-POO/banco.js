class ContaBancaria {
    constructor(numconta, saldoinicial, tipoconta, agencia) {
      this.numconta = numconta;
      this.saldo = saldoinicial;
      this.tipoconta = tipoconta;
      this.agencia = agencia;
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
        return `Saldo insuficiente ou valor de saque inválido. Novo saldo: R$${this.saldo}`;
      }
    }
  
    numeroDaConta() {
      return this.numconta;
    }
  }
  
  function mostrarInfo() {
    var infoDiv = document.getElementById('informacoes');
    var minhaConta = new ContaBancaria("12345", 1000.0, "Corrente", "001");
    infoDiv.innerHTML = "<p>Número da conta: " + minhaConta.numeroDaConta() + "</p>" +
        "<p>Saldo atual: " + minhaConta.buscarSaldo() + "</p>";
  }
  
  function executarOperacoes() {
    var valorDeposito = parseFloat(document.getElementById('valorDeposito').value);
    var valorSaque = parseFloat(document.getElementById('valorSaque').value);
    var resultadoDiv = document.getElementById('resultado');

    var minhaConta = new ContaBancaria("12345", 1000.0, "Corrente", "001");
    resultadoDiv.innerHTML = "<p>" + minhaConta.deposito(valorDeposito) + "</p>" +
        "<p>" + minhaConta.saque(valorSaque) + "</p>";
  }
