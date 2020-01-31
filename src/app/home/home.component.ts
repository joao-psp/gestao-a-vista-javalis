import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModoAutomaticoService } from '@app/shared/services/modo-automatico.service';
import { SquadsService } from '@app/squads/squads.service';
import { OneOnOneService } from '@app/one-on-one/one-on-one.service';
import { OneOnOne } from '@app/shared/models/one-on-one.model';
import { Colaborador } from '@app/shared/models/colaborador.model';
import { RitosService } from '@app/shared/services/ritos.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public aderenciaOneOnOne: string;
  public aderenciaRitos: string;
  public loadingAderenciaOneOne = false;
  public loadingAderenciaRitos = false;

  private tempoExibicaoEmModoAutomatico = 10 * 1e3;

  constructor(
    private squadsService: SquadsService,
    private modoAutomaticoService: ModoAutomaticoService,
    private oneOnOneService: OneOnOneService,
    private ritosService: RitosService
  ) {}

  ngOnInit() {
    this.loadingAderenciaOneOne = true;
    this.loadingAderenciaRitos = true;

    this.oneOnOneService.recuperar().subscribe(
      oneOnOne => {
        if (!oneOnOne) {
          this.aderenciaOneOnOne = ' - %';
        } else {
          this.aderenciaOneOnOne = oneOnOne.aderencia;
        }
        this.loadingAderenciaOneOne = false;
      },
      error => {
        this.aderenciaOneOnOne = ' - %';
        this.loadingAderenciaOneOne = false;
      }
    );

    this.ritosService.obterAderencia().subscribe(
      aderencia => {
        if (!aderencia) {
          this.aderenciaRitos = ' - %';
        } else {
          const porcentagem = ((parseFloat(aderencia) / 3) * 100).toFixed(2);
          this.aderenciaRitos = porcentagem + '%';
        }
        this.loadingAderenciaRitos = false;
      },
      error => {
        this.aderenciaRitos = ' - %';
        this.loadingAderenciaRitos = false;
      }
    );
  }

  ngAfterViewInit() {
    this.modoAutomaticoService.definirMudancaDePassoParaModoAutomatico(
      this.tempoExibicaoEmModoAutomatico
    );
  }
}
