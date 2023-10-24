import { TipoTransacao } from "./TipoTransacao.js";

type Transacao = {
    tipoTransacao: TipoTransacao,
    valor: number,
    data: Date;
}

export default Transacao;