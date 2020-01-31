import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { SquadsComponent } from './squads.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'squads',
      component: SquadsComponent,
      data: { title: extract('Squads') }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SquadsRoutingModule {}
