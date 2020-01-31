import { Component, OnInit, Input } from '@angular/core';
import { Okrable } from '@app/shared/models/okrable.model';

@Component({
  selector: 'app-okr',
  templateUrl: './okr.component.html',
  styleUrls: ['./okr.component.scss']
})
export class OkrComponent implements OnInit {
  @Input() okrable: Okrable;

  constructor() {}

  ngOnInit() {}
}
