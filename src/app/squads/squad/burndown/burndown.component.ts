import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  OnChanges
} from '@angular/core';
import { Burndown } from '@app/shared/models/burndown.model';
import { SquadsService } from '@app/squads/squads.service';

@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.scss']
})
export class BurndownComponent implements OnChanges {
  @ViewChild('canvasElement', { read: ElementRef, static: true })
  canvasElement: ElementRef;
  @Input() burndown: Burndown;
  public chartLabels: string[] = [];
  public chartData: any = [{ data: [] }];
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    layout: {
      padding: {
        bottom: 0,
        right: 0,
        left: 0,
        top: 0
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          stacked: true,
          display: false
        }
      ]
    }
  };

  constructor(private squadsService: SquadsService) {}

  ngOnChanges() {
    if (this.burndown) {
      this.inicializarGrafico();
    }
  }

  private inicializarGrafico() {
    const restanteRealSemAtraso = this.burndown.diasBurndown.map(
      d => d.restanteRealSemAtraso
    );
    const restantePrevistoSemReal = this.burndown.diasBurndown.map(
      d => d.restantePrevistoSemReal
    );
    const adiantamento = this.burndown.diasBurndown.map(d => d.adiantamento);
    const atraso = this.burndown.diasBurndown.map(d => d.atraso);
    const labels = this.burndown.diasBurndown.map(d => d.data.toLocaleString());

    this.chartLabels = labels;
    this.chartData = [
      this.obterDataSet(
        'Restante real',
        restanteRealSemAtraso,
        '#170F5E',
        '#353980'
      ),
      this.obterDataSet(
        'Restante previsto',
        restantePrevistoSemReal,
        '#060023',
        '#27234f'
      ),
      this.obterDataSet('Adiantamento', adiantamento, '#33AF3F', '#005B39'),
      this.obterDataSet('Atraso', atraso, '#5E0F0F', '#E62929')
    ];
  }

  private obterDataSet(
    label: string,
    data: number[],
    corInicial: string,
    corFinal: string
  ) {
    return {
      label,
      data,
      backgroundColor: this.obterGradiente(corInicial, corFinal),
      borderWidth: 0,
      borderColor: 'transparent',
      pointRadius: 0,
      lineTension: 0
    };
  }

  private obterGradiente(corInicial: string, corFinal: string) {
    const context = this.canvasElement.nativeElement.getContext('2d');
    const gradientColor = context.createLinearGradient(0, 150, 150, 0);
    gradientColor.addColorStop(0, corInicial);
    gradientColor.addColorStop(1, corFinal);
    return gradientColor;
  }
}
