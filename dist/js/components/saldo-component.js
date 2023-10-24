import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js";
//pegando o elemento relacionado ao saldo e atribuindo um valor diferente a ele
export const elementoSaldo = document.querySelector(".saldo-valor .valor");
//pegando e alterando a data de acesso
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
//pegando e alterando as 4 datas do lado direito da tela
const elementoDataTransferencia = document.querySelectorAll(".transacoes-group time");
if (elementoDataTransferencia.length >= 4) {
    const dataTransferencia = new Date();
    elementoDataTransferencia[0].textContent = formatarData(dataTransferencia, FormatoData.PADRAO);
    elementoDataTransferencia[1].textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
    elementoDataTransferencia[2].textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
    elementoDataTransferencia[3].textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
