import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpanelPage } from './userpanel.page';

const routes: Routes = [
  {
    path: '',
    component: UserpanelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpanelPageRoutingModule {}
