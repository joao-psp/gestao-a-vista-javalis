import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneOnOneComponent } from './one-on-one/one-on-one.component';
import { MaterialModule } from '@app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OneOnOneRoutingModule } from './one-on-one-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OneOnOneComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    FlexLayoutModule,
    OneOnOneRoutingModule
  ]
})
export class OneOnOneModule {}
