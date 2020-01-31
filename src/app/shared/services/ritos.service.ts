import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, timeout } from 'rxjs/operators';
import { GoogleSpreadsheetsService } from '@app/shared/services/google-spreadsheets.service';

@Injectable({
  providedIn: 'root'
})
export class RitosService {
  constructor(private googleSpreadsheetsService: GoogleSpreadsheetsService) {}

  public obterAderencia() {
    const rangeAderencia = 'aderenciatribos';
    const tribo = 'Triforce';

    const colunas = {
      nome: 0,
      aderenciaSnapshot: 2
    };

    return this.googleSpreadsheetsService
      .obterDados(environment.spreadsheetIdRitos, rangeAderencia)
      .pipe(
        timeout(3000),
        map((listaDados: { values: Array<any> }) => {
          const resultadoTribo = listaDados.values.filter(
            linha => linha[colunas.nome] == tribo
          )[0];

          return resultadoTribo[colunas.aderenciaSnapshot].replace(',', '.');
        })
      );
  }
}
