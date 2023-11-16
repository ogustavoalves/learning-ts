import Transacao from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { formatarInformacoes } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js"
import SaldoComponent from "./saldo-component.js";
import ExtratoComponent from "./extrato-component.js";

//checando se todos os dados do formulário foram preenchidos
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Preencha todos os campos da transação");
            return;
        }

        //pegando os valores inseridos no formulário
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData= elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
        let valor: number = inputValor.valueAsNumber;
        let data: Date  = new Date(inputData.value + " 00:00:00");
    
        //obj da transação
        const novaTransacao: Transacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        }
        
        Conta.registrarTransacao(novaTransacao);

        console.log(formatarInformacoes(valor, data, FormatoData.PADRAO))
        
        elementoFormulario.reset();
        ExtratoComponent.atualizar();
        SaldoComponent.atualizar()
    }
    catch(erro) { alert(erro.message)}
});
