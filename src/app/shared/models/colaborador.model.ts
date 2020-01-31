export class Colaborador {
  constructor(
    public id: number,
    public nome: string,
    public funcao: string,
    public novato: boolean = false
  ) {}
}
