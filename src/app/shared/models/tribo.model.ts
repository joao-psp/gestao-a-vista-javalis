import { Objetivo } from './objetivo.model';
import { Okrable } from './okrable.model';

export class Tribo implements Okrable {
  constructor(public nome: string, public objetivos: Objetivo[]) {}
}
