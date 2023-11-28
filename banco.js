const Banco = {
    conta: "123456",
    saldo: 1000,
    tipoDeConta: "Corrente",
    agencia: "7890",

    buscarSaldo: function() {
    return this.saldo;
    },

    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
        } else {
            console.error("O valor do depósito deve ser maior que zero.");
        }
    },

    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de ${valor} realizado com sucesso. Novo saldo: ${this.saldo}`);
        } else {
            console.error("Valor de saque inválido ou saldo insuficiente.");
        }
    },

    numeroDaConta: function() {
        return this.conta;
    }
};

// Exemplos de uso
console.log("Saldo atual:", Banco.buscarSaldo());
Banco.deposito(500);
Banco.saque(200);
console.log("Número da conta:", Banco.numeroDaConta());
