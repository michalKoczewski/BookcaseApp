import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpasswordPage } from './userpassword.page';

const routes: Routes = [
  {
    path: '',
    component: UserpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpasswordPageRoutingModule {}
