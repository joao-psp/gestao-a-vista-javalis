import { Component, OnInit } from '@angular/core';
import { ModoAutomaticoService } from '@app/shared/services/modo-automatico.service';

@Component({
  selector: 'app-controle-modo-automatico',
  templateUrl: './controle-modo-automatico.component.html',
  styleUrls: ['./controle-modo-automatico.component.scss']
})
export class ControleModoAutomaticoComponent implements OnInit {
  constructor(public modoAutomaticoService: ModoAutomaticoService) {}

  ngOnInit() {}

  public alterarModoAutomatico() {
    if (!this.modoAutomaticoService.modoAutomatico) {
      this.modoAutomaticoService.inicializarModoAutomatico();
    } else {
      this.modoAutomaticoService.finalizarModoAutomatico();
    }
  }
}
