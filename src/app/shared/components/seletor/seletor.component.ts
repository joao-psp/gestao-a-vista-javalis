import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.scss']
})
export class SeletorComponent implements OnInit {
  @Input() opcoes: string[] = [];
  @Input() opcaoSelecionada: number;
  @Output() opcaoSelecionadaChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  public aoSelecionarOpcao(indice: number) {
    this.opcaoSelecionada = indice;
    this.opcaoSelecionadaChange.next(indice);
  }
}
