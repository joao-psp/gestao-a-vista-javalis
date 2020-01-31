import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';
import { EventoComponent } from './evento/evento.component';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventosRoutingModule } from './eventos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    EventosRoutingModule
  ],
  declarations: [EventosComponent, EventoComponent]
})
export class EventosModule {}
