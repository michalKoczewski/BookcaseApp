import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsercityPageRoutingModule } from './usercity-routing.module';

import { UsercityPage } from './usercity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsercityPageRoutingModule
  ],
  declarations: [UsercityPage]
})
export class UsercityPageModule {}
