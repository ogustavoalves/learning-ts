import { formatarData } from "../utils/formatadores.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Contas.js"


//pegando e alterando a data de acesso
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

function renderizarData(): void {
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO)
    }
}
//pegando e alterando as 4 datas do lado direito da tela
const elementoDataTransferencia = document.querySelectorAll(".transacoes-group time");
if (elementoDataTransferencia.length >= 4) {
    const dataTransferencia: Date = new Date();
    (elementoDataTransferencia[0] as HTMLElement).textContent = formatarData(dataTransferencia, FormatoData.PADRAO);
    (elementoDataTransferencia[1] as HTMLElement).textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
    (elementoDataTransferencia[2] as HTMLElement).textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
    (elementoDataTransferencia[3] as HTMLElement).textContent = formatarData(dataTransferencia, FormatoData.DIA_MES);
    
}

const DataComponent = {
    atualizar: function () {
        renderizarData();
    },
}

export default DataComponent;