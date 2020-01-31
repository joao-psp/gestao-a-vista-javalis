import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fatos-relevantes',
  templateUrl: './fatos-relevantes.component.html',
  styleUrls: ['./fatos-relevantes.component.scss']
})
export class FatosRelevantesComponent implements OnInit {
  @Input() fatosRelevantes: string[] = [];

  constructor() {}

  ngOnInit() {}
}
