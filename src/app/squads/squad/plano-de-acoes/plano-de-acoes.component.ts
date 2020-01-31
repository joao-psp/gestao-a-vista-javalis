import { Component, OnInit, Input } from '@angular/core';
import { PlanoDeAcoes } from '@app/shared/models/plano-de-acoes.model';
import { Squad } from '@app/shared/models/squad.model';
import { SquadsService } from '@app/squads/squads.service';

@Component({
  selector: 'app-plano-de-acoes',
  templateUrl: './plano-de-acoes.component.html',
  styleUrls: ['./plano-de-acoes.component.scss']
})
export class PlanoDeAcoesComponent implements OnInit {
  @Input() planoDeAcoes: PlanoDeAcoes;

  constructor(private squadsService: SquadsService) {}

  ngOnInit() {}
}
