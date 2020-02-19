import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutritionDetailPage } from './nutrition-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NutritionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionDetailPageRoutingModule {}
