import { Colaborador } from './colaborador.model';
import { Rito } from './rito.model';
import { Tecnologia } from './tecnologia.model';
import { Tribo } from './tribo.model';
import { Burndown } from './burndown.model';
import { PlanoDeAcoes } from './plano-de-acoes.model';
import { Cliente } from './cliente.model';

export class Squad {
  public fatosRelevantes: string[] = [];
  public burndown: Burndown;
  public planoDeAcoes: PlanoDeAcoes;

  constructor(
    public id: number,
    public nome: string,
    public cliente: Cliente,
    public tribo: Tribo,
    public colaboradores: Colaborador[],
    public tecnologias: Tecnologia[],
    public spreadsheetId: string = null,
    public ritos: Rito[] = []
  ) {}
}
