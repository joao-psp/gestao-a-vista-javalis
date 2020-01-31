import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ModoAutomaticoService {
  public modoAutomatico = false;
  public percentualEmExibicao = 0;
  private indicePassoAtual: number;
  private tempoDeExibicao: number;
  private timeout: any;
  private passos = [
    { rota: '/home' },
    { rota: '/eventos' },
    { rota: '/squads' }
  ];

  constructor(private router: Router) {}

  public inicializarModoAutomatico() {
    this.modoAutomatico = true;
    this.irParaPasso(0);
    this.definirMudancaDePassoParaModoAutomatico(this.tempoDeExibicao);
  }

  public finalizarModoAutomatico() {
    this.modoAutomatico = false;
    this.percentualEmExibicao = 0;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  public definirMudancaDePassoParaModoAutomatico(tempoDeExibicao: number) {
    this.tempoDeExibicao = tempoDeExibicao;

    if (!this.modoAutomatico) {
      return;
    }

    this.timeout = setTimeout(() => {
      const indiceProximoPasso =
        (this.indicePassoAtual + 1) % this.passos.length;
      console.log(indiceProximoPasso);
      this.irParaPasso(indiceProximoPasso);
    }, this.tempoDeExibicao);
  }

  private irParaPasso(indicePasso: number) {
    this.indicePassoAtual = indicePasso;
    const passo =
      this.indicePassoAtual < this.passos.length
        ? this.passos[this.indicePassoAtual]
        : this.passos[0];
    this.router.navigate([passo.rota]);
  }
}
