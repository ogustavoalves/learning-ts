let saldo = 3000;
//pegando o elemento relacionado ao saldo e atribuindo um valor diferente a ele
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}
//pegando e alterando a data de acesso
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    const dataAcesso = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
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
