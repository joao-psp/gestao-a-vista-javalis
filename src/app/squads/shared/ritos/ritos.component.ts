import { Component, OnInit, Input } from '@angular/core';
import { Rito } from '@app/shared/models/rito.model';
import { Status } from '@app/shared/utils/enums/status.enums';

@Component({
  selector: 'app-ritos',
  templateUrl: './ritos.component.html',
  styleUrls: ['./ritos.component.scss']
})
export class RitosComponent implements OnInit {
  @Input() ritos: Rito[];
  public mapaDeCores = {
    [Status.atrasado]: 'perigo',
    [Status.atencao]: 'atencao'
  };

  constructor() {}

  ngOnInit() {}
}
