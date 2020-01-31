import { Component, OnInit, Input } from '@angular/core';
import { Squad } from '@app/shared/models/squad.model';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {
  @Input() squad: Squad;
  public opcaoSelecionada = 0;

  constructor() {}

  ngOnInit() {}
}
