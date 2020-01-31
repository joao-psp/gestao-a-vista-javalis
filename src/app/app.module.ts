import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoreModule } from '@app/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { SquadsModule } from './squads/squads.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SquadsService } from './squads/squads.service';
import { GoogleSpreadsheetsService } from './shared/services/google-spreadsheets.service';
import { OneOnOneModule } from './one-on-one/one-on-one.module';
import { OkrsModule } from './okrs/okrs.module';
import { ModoAutomaticoService } from './shared/services/modo-automatico.service';
import { EventosModule } from './eventos/eventos.module';

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SquadsModule,
    EventosModule,
    OneOnOneModule,
    OkrsModule,
    AppRoutingModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: {}
    })
  ],
  declarations: [AppComponent],
  providers: [
    SquadsService,
    GoogleSpreadsheetsService,
    ModoAutomaticoService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
