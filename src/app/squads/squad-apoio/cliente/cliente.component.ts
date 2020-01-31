import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '@app/shared/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  @Input() cliente: Cliente;

  constructor() {}

  ngOnInit() {}
}
