//Super Classe, classe Pai
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta}` + `Saldo: R$$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;

  ContaCorrente.prototype = Object.create(Conta.prototype);
  ContaCorrente.prototype.constructor = ContaCorrente;

  ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
      console.log("Saldo insuficiente");
      return;
    }

    this.saldo -= valor;
    this.verSaldo();
  };
}

const contaCorrente = new ContaCorrente(11, 22, 0, 100);
