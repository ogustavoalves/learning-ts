let saldo: number = 3000;

//pegando o elemento relacionado ao saldo e atribuindo um valor diferente a ele
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

//pegando e alterando a data de acesso
const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date(); 
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)
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