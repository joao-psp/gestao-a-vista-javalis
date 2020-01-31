import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { IndicadorComponent } from './components/indicador/indicador.component';
import { SeletorComponent } from './components/seletor/seletor.component';
import { GlideComponent } from './components/glide/glide.component';
import { GlideElementComponent } from './components/glide/glide-element/glide-element.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [
    LoaderComponent,
    IndicadorComponent,
    SeletorComponent,
    GlideComponent,
    GlideElementComponent,
    LoadingComponent
  ],
  exports: [
    LoaderComponent,
    IndicadorComponent,
    SeletorComponent,
    GlideComponent,
    GlideElementComponent,
    LoadingComponent
  ]
})
export class SharedModule {}
