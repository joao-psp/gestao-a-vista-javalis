import { DiaBurndown } from './dia-burndown.model';
import { Helper } from '../utils/helper';

const colunas = {
  data: 0,
  previsto: 1,
  real: 2
};

export class Burndown {
  public situacaoAtual: number;

  public static inicializar(numeroSprint: number, listaDados: Array<any>) {
    const dias = listaDados.map(d => {
      const data = Helper.stringToDate(d[colunas.data]);
      const previsto = Helper.stringToDouble(d[colunas.previsto]);
      const real = Helper.stringToDouble(d[colunas.real]);

      return new DiaBurndown(data, previsto, real);
    });

    isNaN(numeroSprint) ? (numeroSprint = 1) : (numeroSprint = numeroSprint);
    return new Burndown(numeroSprint, dias);
  }

  constructor(public numeroSprint: number, public diasBurndown: DiaBurndown[]) {
    this.inicializarSituacaoAtual();
  }

  private inicializarSituacaoAtual() {
    const indiceUltimoDia =
      this.diasBurndown.findIndex(db => db.restanteReal === null) - 1;
    const ultimoDia = this.diasBurndown[indiceUltimoDia];

    if (ultimoDia) {
      this.situacaoAtual =
        ultimoDia.atraso > ultimoDia.adiantamento
          ? -ultimoDia.atraso
          : ultimoDia.adiantamento;
    } else {
      this.situacaoAtual = 0;
    }
  }
}
