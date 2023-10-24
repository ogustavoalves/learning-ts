import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    //checando tipo de transação
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            if (saldo < novaTransacao.valor) {
                alert("Saldo insuficiente para realizar tal operação");
            }
            else {
                saldo -= novaTransacao.valor;
            }
        }
        else {
            alert("Transação Inválida");
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;
