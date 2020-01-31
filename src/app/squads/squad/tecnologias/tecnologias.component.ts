import { Component, OnInit, Input } from '@angular/core';
import { Tecnologia } from '@app/shared/models/tecnologia.model';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  @Input() tecnologias: Tecnologia[] = [];

  constructor() {}

  ngOnInit() {}
}
