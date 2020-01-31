import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { Logger, I18nService } from '@app/core';
import { GoogleSpreadsheetsService } from './shared/services/google-spreadsheets.service';
import { Icones } from './shared/constants/icones.constantes';
import { MatIconRegistry } from '@angular/material/icon';

const log = new Logger('App');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private i18nService: I18nService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private googleSpreadsheetsService: GoogleSpreadsheetsService
  ) {}

  ngOnInit() {
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');

    // Setup translations
    this.i18nService.init(
      environment.defaultLanguage,
      environment.supportedLanguages
    );

    this.googleSpreadsheetsService.inicializar();
    this.inicializarIcones();
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

  private inicializarIcones() {
    Icones.forEach(icone => {
      const url = this.sanitizer.bypassSecurityTrustResourceUrl(
        'assets/img/icones' + icone + '.svg'
      );
      this.iconRegistry.addSvgIcon(icone, url);
    });
  }
}
