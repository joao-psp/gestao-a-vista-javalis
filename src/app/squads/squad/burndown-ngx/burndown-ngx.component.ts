import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as shape from 'd3-shape';
import { Burndown } from '@app/shared/models/burndown.model';

@Component({
  selector: 'app-burndown-ngx',
  templateUrl: './burndown-ngx.component.html',
  styleUrls: ['./burndown-ngx.component.scss']
})
export class BurndownNgxComponent implements OnChanges {
  @Input() burndown: Burndown;
  data: any = [];
  curve = shape.curveLinear;

  constructor() {}

  ngOnChanges() {
    if (this.burndown) {
      const previstos: any = [];
      const reais: any = [];
      this.burndown.diasBurndown.forEach(d => {
        if (d.data) {
          if (d.restantePrevisto || d.restantePrevisto === 0) {
            previstos.push({ name: d.data, value: d.restantePrevisto });
          }
          if (d.restanteReal || d.restanteReal === 0) {
            reais.push({ name: d.data, value: d.restanteReal });
          }
        }
      });

      this.data = [
        { name: 'Previsto', series: previstos },
        { name: 'Real', series: reais }
      ];
    }
  }
}
