import { formatarInformacoes } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js";
import SaldoComponent from "./saldo-component.js";
//checando se todos os dados do formulário foram preenchidos
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Preencha todos os campos da transação");
            return;
        }
        //pegando os valores inseridos no formulário
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        //obj da transação
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        console.log(formatarInformacoes(valor, data, FormatoData.PADRAO));
        elementoFormulario.reset();
        SaldoComponent.atualizar();
    }
    catch (erro) {
        alert(erro.message);
    }
});
