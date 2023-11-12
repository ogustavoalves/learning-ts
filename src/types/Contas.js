"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TipoTransacao_js_1 = require("./TipoTransacao.js");
var saldo = 3000;
//arrow function: é preciso tratar os dados recebidos para que a data seja novamente de um tipo válido
var transacoes = JSON.parse(localStorage.getItem("transacoes"), function (key, value) {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }
    saldo += valor;
}
var Conta = {
    getSaldo: function () {
        return saldo;
    },
    getDataAcesso: function () {
        return new Date();
    },
    //checando tipo de transação
    registrarTransacao: function (novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao_js_1.TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Transação Inválida");
        }
        console.log(transacoes);
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
};
exports.default = Conta;
