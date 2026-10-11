let conta = {
  saldo: 0,
  numero: 12345,

  depositar: function (valor) {
    this.saldo = this.saldo + valor;
  },

  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo = this.saldo - valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  },

  informarSaldo: function () {
    console.log("Seu saldo atual é: R$ " + this.saldo);
  },
};

conta.depositar(500);
conta.informarSaldo();
conta.sacar(200);
conta.informarSaldo();
conta.sacar(1000);
