//TIPOS PRIMITIVOS
let valor = 3000;
let nome = "";
let insPage = false;
let qualquer = "";
qualquer = 22;
//ARRAYS
const lista = [];
lista.push(12, 17);
//Enum
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
//atribuindo o tipo a um objeto
const novaTransaca = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0,
};
