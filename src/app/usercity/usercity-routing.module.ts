import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsercityPage } from './usercity.page';

const routes: Routes = [
  {
    path: '',
    component: UsercityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsercityPageRoutingModule {}
