import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '@env/environment';

import { SquadsService } from './squads.service';
import { Squad } from '@app/shared/models/squad.model';
import { GlideOptions } from '@app/shared';
import { ModoAutomaticoService } from '@app/shared/services/modo-automatico.service';
import { SquadApoio } from '@app/shared/models/squad-apoio.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit, OnDestroy {
  public squads: Squad[] = [];
  public squadApoio: SquadApoio;
  public glide: any;
  public glideOptions: GlideOptions;
  private intervaloListarSquads: any;
  private tempoExibicaoEmModoAutomaticoPorSquad = 25 * 1e3;
  private tempoTransicao = 1 * 1e3;

  constructor(
    private squadsService: SquadsService,
    private modoAutomaticoService: ModoAutomaticoService
  ) {}

  ngOnInit() {
    this.listarSquads();
    this.intervaloListarSquads = setInterval(
      () => this.listarSquads(),
      environment.tempoAtualizacao
    );
  }

  ngOnDestroy() {
    clearInterval(this.intervaloListarSquads);
  }

  private listarSquads() {
    forkJoin([
      this.squadsService.obterSquadApoio(),
      this.squadsService.listarSquads()
    ]).subscribe(
      ([squadsApoio, squads]) => {
        this.squadApoio = squadsApoio;
        this.squads = [...squads];

        const tempoExibicaoEmModoAutomatico =
          (this.tempoExibicaoEmModoAutomaticoPorSquad + this.tempoTransicao) *
          (this.squads.length + 1);

        this.modoAutomaticoService.definirMudancaDePassoParaModoAutomatico(
          tempoExibicaoEmModoAutomatico
        );

        this.inicializarCarrossel();
      },
      e => console.log(e)
    );
  }

  private inicializarCarrossel() {
    const autoplay = this.modoAutomaticoService.modoAutomatico
      ? this.tempoExibicaoEmModoAutomaticoPorSquad
      : false;

    this.glideOptions = {
      animationDuration: this.tempoTransicao,
      keyboard: true,
      hoverpause: false,
      type: 'carousel',
      gap: 64,
      autoplay
    };
  }
}
