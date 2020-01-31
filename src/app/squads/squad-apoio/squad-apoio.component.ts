import { Component, OnInit, Input } from '@angular/core';
import { SquadApoio } from '@app/shared/models/squad-apoio.model';

@Component({
  selector: 'app-squad-apoio',
  templateUrl: './squad-apoio.component.html',
  styleUrls: ['./squad-apoio.component.scss']
})
export class SquadApoioComponent implements OnInit {
  @Input() squadApoio: SquadApoio;

  constructor() {}

  ngOnInit() {}
}
