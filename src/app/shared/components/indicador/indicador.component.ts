import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent implements OnInit {
  @Input() cor: 'perigo' | 'atencao' | 'sucesso' | 'desligado' = 'perigo';

  constructor() {}

  ngOnInit() {}
}
