import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '@app/material.module';
import { SquadsRoutingModule } from './squads-routing.module';
import { SquadsComponent } from './squads.component';
import { SquadComponent } from './squad/squad.component';
import { BurndownComponent } from './squad/burndown/burndown.component';
import { ChartsModule } from 'ng2-charts';
import { PlanoDeAcoesComponent } from './squad/plano-de-acoes/plano-de-acoes.component';
import { ColaboradoresComponent } from './shared/colaboradores/colaboradores.component';
import { TecnologiasComponent } from './squad/tecnologias/tecnologias.component';
import { RitosComponent } from './shared/ritos/ritos.component';
import { SharedModule } from '@app/shared';
import { FatosRelevantesComponent } from './squad/fatos-relevantes/fatos-relevantes.component';
import { SquadApoioComponent } from './squad-apoio/squad-apoio.component';
import { ClienteComponent } from './squad-apoio/cliente/cliente.component';
import { BurndownNgxComponent } from './squad/burndown-ngx/burndown-ngx.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    SquadsRoutingModule,
    ChartsModule,
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    SquadsComponent,
    SquadComponent,
    BurndownComponent,
    PlanoDeAcoesComponent,
    ColaboradoresComponent,
    TecnologiasComponent,
    RitosComponent,
    FatosRelevantesComponent,
    SquadApoioComponent,
    ClienteComponent,
    BurndownNgxComponent
  ]
})
export class SquadsModule {}
