import { Helper } from '../utils/helper';

export class Acao {
  public dataProxima = false;
  public atrasada = false;

  constructor(
    public acao: string,
    public responsavel: string,
    public data: Date,
    public concluida: boolean = false
  ) {
    const diferencaDias = Helper.differenceBetweenDate(this.data, new Date());
    this.dataProxima = diferencaDias >= 0 && diferencaDias <= 3;
    this.atrasada = diferencaDias < 0;
  }
}
