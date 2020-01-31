import { Component, Input } from '@angular/core';
import { Colaborador } from '@app/shared/models/colaborador.model';
import { GlideOptions } from '@app/shared';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent {
  @Input() squadId: number;
  @Input() colaboradores: Colaborador[] = [];
  public glideOptions: GlideOptions = {
    animationDuration: 2000,
    hoverpause: true,
    type: 'carousel',
    gap: 0,
    autoplay: 6000
  };

  constructor() {}
}
