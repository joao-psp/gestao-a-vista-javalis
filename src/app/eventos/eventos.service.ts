import { Injectable } from '@angular/core';
import { Evento } from '@app/shared/models/evento.model';
import { GoogleSpreadsheetsService } from '@app/shared/services/google-spreadsheets.service';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public eventos = new Array<Evento>();

  constructor(private googleSpreadsheetsService: GoogleSpreadsheetsService) {}

  public obterEventos() {
    return this.googleSpreadsheetsService
      .obterDados(environment.spreadsheetIdBurndown, environment.rangeEventos)
      .pipe(
        map((listaDados: { values: Array<any> }) => {
          const dadosEventos = listaDados.values;
          // tslint:disable-next-line: forin
          const eventos = new Array<Evento>();
          for (let index = 1; index < dadosEventos.length; index++) {
            const dado = dadosEventos[index];
            const evento = new Evento(dado[0], dado[1], dado[2], dado[3]);
            eventos.push(evento);
          }
          return eventos;
        })
      );
  }
}
