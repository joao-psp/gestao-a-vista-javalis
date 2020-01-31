import { Acao } from './acao.model';
import { Helper } from '../utils/helper';

const colunas = {
  acao: 0,
  responsavel: 1,
  data: 2,
  concluido: 3
};

export class PlanoDeAcoes {
  public static inicializar(listaDados: Array<any>) {
    const acoes = listaDados.map(d => {
      const acao = d[colunas.acao];
      const responsavel = d[colunas.responsavel];
      const data = Helper.stringToDate(d[colunas.data]);
      const concluido = Helper.stringToBoolean(d[colunas.concluido]);

      return new Acao(acao, responsavel, data, concluido);
    });

    const acoesOrdenadas = acoes.sort((a, b) => (b.concluida ? -1 : 1));
    return new PlanoDeAcoes(acoesOrdenadas);
  }

  constructor(public acoes: Acao[] = []) {}
}
