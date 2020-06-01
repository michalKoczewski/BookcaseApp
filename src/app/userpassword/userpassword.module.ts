import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpasswordPageRoutingModule } from './userpassword-routing.module';

import { UserpasswordPage } from './userpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpasswordPageRoutingModule
  ],
  declarations: [UserpasswordPage]
})
export class UserpasswordPageModule {}
