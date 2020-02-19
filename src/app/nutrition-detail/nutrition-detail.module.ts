import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutritionDetailPageRoutingModule } from './nutrition-detail-routing.module';

import { NutritionDetailPage } from './nutrition-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutritionDetailPageRoutingModule
  ],
  declarations: [NutritionDetailPage]
})
export class NutritionDetailPageModule {}
