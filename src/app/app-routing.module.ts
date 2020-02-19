import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule)
	},
  {
    path: 'nutrition-detail',
    loadChildren: () => import('./nutrition-detail/nutrition-detail.module').then( m => m.NutritionDetailPageModule)
  }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
