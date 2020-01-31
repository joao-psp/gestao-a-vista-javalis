import { Component, OnInit } from '@angular/core';
import { GlideOptions } from '@app/shared';
import { Okrable } from '@app/shared/models/okrable.model';
import { OkrsService } from './okrs.service';

@Component({
  selector: 'app-okrs',
  templateUrl: './okrs.component.html',
  styleUrls: ['./okrs.component.scss']
})
export class OkrsComponent implements OnInit {
  public okrables: Okrable[] = [];
  public glideOptions: GlideOptions = {
    animationDuration: 1000,
    keyboard: true,
    hoverpause: true,
    type: 'carousel',
    gap: 64,
    autoplay: 10000
  };

  constructor(private okrsService: OkrsService) {}

  public ngOnInit(): void {
    this.okrsService
      .listarOkrables()
      .subscribe(okrables => (this.okrables = okrables));
  }
}
