import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '@app/shared/models/evento.model';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {
  @Input() evento: Evento;

  constructor() {}

  ngOnInit() {}
}
