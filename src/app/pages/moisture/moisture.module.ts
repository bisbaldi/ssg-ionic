import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoisturePageRoutingModule } from './moisture-routing.module';

import { MoisturePage } from './moisture.page';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      BrowserModule,
    MoisturePageRoutingModule
  ],
  declarations: [MoisturePage]
})
export class MoisturePageModule {}
