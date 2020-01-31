import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { OkrsComponent } from './okrs.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'okrs',
      component: OkrsComponent,
      data: { title: extract('Okrs') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OkrsRoutingModule {}
