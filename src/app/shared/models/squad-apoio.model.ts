import { Rito } from './rito.model';
import { Cliente } from './cliente.model';
import { Colaborador } from './colaborador.model';

export class SquadApoio {
  constructor(
    public nome: string,
    public colaboradores: Colaborador[] = [],
    public clientes: Cliente[] = [],
    public ritos: Rito[] = []
  ) {}
}
