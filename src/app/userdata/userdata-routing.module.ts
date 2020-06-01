import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdataPage } from './userdata.page';

const routes: Routes = [
  {
    path: '',
    component: UserdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdataPageRoutingModule {}
