import { ResultadoChave } from './resultado-chave.model';

export class Objetivo {
  constructor(
    public descricao: string,
    public resultadosChave: ResultadoChave[]
  ) {}
}
