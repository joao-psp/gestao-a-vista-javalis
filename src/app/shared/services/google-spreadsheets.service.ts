import { Injectable } from '@angular/core';
import { GoogleApiService } from 'ng-gapi';
import { from, Subject, Observable, Observer, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable()
export class GoogleSpreadsheetsService {
  private gapi: any;
  private gapiInicializado = false;
  private aoInicializarGapi: Subject<any> = new Subject();

  constructor(public gapiService: GoogleApiService) {}

  public inicializar() {
    this.gapiService.onLoad().subscribe(() => {
      this.gapi = window['gapi'];
      this.gapi.load('client:auth2', this.inicializarClient.bind(this));
    });
  }

  public obterDados(spreadsheetId: string, range: string) {
    return new Observable(observer => {
      if (this.gapiInicializado) {
        this.retornarChamadaGapi(spreadsheetId, range, observer);
      }

      this.aoInicializarGapi.subscribe(() =>
        this.retornarChamadaGapi(spreadsheetId, range, observer)
      );
    });
  }

  private retornarChamadaGapi(
    spreadsheetId: string,
    range: string,
    observer: Subscriber<any>
  ) {
    return from(
      this.gapi.client.sheets.spreadsheets.values.get({ spreadsheetId, range })
    )
      .pipe(map((response: { result: any }) => response.result))
      .subscribe(result => {
        observer.next(result);
        observer.complete();
      });
  }

  private inicializarClient() {
    const clientConfig = {
      apiKey: environment.apiKey,
      discoveryDocs: [
        'https://sheets.googleapis.com/$discovery/rest?version=v4'
      ],
      scope: ['https://www.googleapis.com/auth/spreadsheets.readonly'].join(' ')
    };

    this.gapi.client.init(clientConfig).then(() => {
      this.gapiInicializado = true;
      this.aoInicializarGapi.next();
    });
  }
}
