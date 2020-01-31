import { Status } from '../utils/enums/status.enums';
import { Helper } from '../utils/helper';

export class Rito {
  public status: Status;

  constructor(public nome: string, public sigla: string, public data: Date) {
    this.inicializarStatus();
  }

  private inicializarStatus() {
    const diferencaDias = Helper.differenceBetweenDate(new Date(), this.data);

    if (diferencaDias > 14) {
      this.status = Status.atrasado;
    } else if (diferencaDias >= 12) {
      this.status = Status.atencao;
    } else {
      this.status = Status.ok;
    }
  }
}
