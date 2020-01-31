import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '@app/shared/models/evento.model';
import { EventosService } from './eventos.service';
import { GlideOptions } from '@app/shared/components/glide/glide-options.model';
import { ModoAutomaticoService } from '@app/shared/services/modo-automatico.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  @Input() eventos = new Array<Evento>();

  public glideOptions: GlideOptions = {};

  private tempoExibicaoEmModoAutomatico = 10 * 1e3;

  constructor(
    private eventosService: EventosService,
    private modoAutomaticoService: ModoAutomaticoService
  ) {}

  ngOnInit() {
    this.eventosService.obterEventos().subscribe(eventos => {
      if (eventos.length > 3 && eventos.length != null) {
        this.eventos = eventos.slice(0, 3);
        console.log(this.eventos);
      } else {
        this.eventos = eventos;
      }
    });
  }

  ngAfterViewInit() {
    this.modoAutomaticoService.definirMudancaDePassoParaModoAutomatico(
      this.tempoExibicaoEmModoAutomatico
    );
  }
}
