import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { OneOnOneComponent } from './one-on-one/one-on-one.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'one-on-one',
      component: OneOnOneComponent,
      data: { title: extract('OneOnOne') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OneOnOneRoutingModule {}
