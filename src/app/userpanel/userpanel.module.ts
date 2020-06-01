import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserpanelPageRoutingModule } from './userpanel-routing.module';

import { UserpanelPage } from './userpanel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserpanelPageRoutingModule
  ],
  declarations: [UserpanelPage]
})
export class UserpanelPageModule {}
