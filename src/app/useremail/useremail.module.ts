import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UseremailPageRoutingModule } from './useremail-routing.module';

import { UseremailPage } from './useremail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UseremailPageRoutingModule
  ],
  declarations: [UseremailPage]
})
export class UseremailPageModule {}
