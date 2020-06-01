import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdataPageRoutingModule } from './userdata-routing.module';

import { UserdataPage } from './userdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdataPageRoutingModule
  ],
  declarations: [UserdataPage]
})
export class UserdataPageModule {}
