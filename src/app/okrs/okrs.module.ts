import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OkrsRoutingModule } from './okrs-routing.module';
import { OkrsComponent } from '../okrs/okrs.component';
import { SharedModule } from '@app/shared';
import { OkrComponent } from './okr/okr.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    OkrsRoutingModule,
    SharedModule
  ],
  declarations: [OkrsComponent, OkrComponent]
})
export class OkrsModule {}
