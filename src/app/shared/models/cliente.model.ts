import { Objetivo } from './objetivo.model';
import { Okrable } from './okrable.model';
import { Vaga } from './vaga.model';

export class Cliente implements Okrable {
  constructor(
    public id: number,
    public nome: string,
    public logo: string = null,
    public objetivos: Objetivo[] = [],
    public numeroSquads: number = 0,
    public numeroCrafters: number = 0,
    public vagas: Vaga[] = []
  ) {}
}
