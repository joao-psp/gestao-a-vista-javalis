import { Helper } from '../utils/helper';

export class DiaBurndown {
  public adiantamento: number = null;
  public atraso: number = null;
  public restanteRealSemAtraso: number = null;
  public restantePrevistoSemReal = 0;

  constructor(
    public data: Date,
    public restantePrevisto: number,
    public restanteReal: number
  ) {
    this.definirDiferenca();
  }

  private definirDiferenca() {
    if (this.restanteReal == null) {
      this.restantePrevistoSemReal = this.restantePrevisto;
      return;
    }

    this.adiantamento =
      this.restantePrevisto > this.restanteReal
        ? Helper.floatify(this.restantePrevisto - this.restanteReal)
        : 0;

    this.atraso =
      this.restanteReal > this.restantePrevisto
        ? Helper.floatify(this.restanteReal - this.restantePrevisto)
        : 0;

    this.restanteRealSemAtraso =
      this.atraso != null ? this.restanteReal - this.atraso : this.restanteReal;
  }
}
