import { TipoTransacao } from "./TipoTransacao.js";
import Transacao from "./Transacao.js";

let saldo: number = 3000;

//arrow function: é preciso tratar os dados recebidos para que a data seja novamente de um tipo válido
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => { 
    if (key === "data") {
        return new Date(value);
    }

    return value;
}) || [];

 
function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado deve ser maior que zero!");
    }
    
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }

    saldo -= valor;
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error("O valor a ser depositado deve ser maior que zero!");
    }

    saldo += valor;
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    //checando tipo de transação
    registrarTransacao(novaTransacao: Transacao): void {     
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        } else {
            throw new Error("Transação Inválida");
        }


        //guarda a nova transação no array de transações
        transacoes.push(novaTransacao)
        //transforma o JSON em string
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
        console.log(transacoes);
    }
}

export default Conta;