import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
	{
		path: '',
		component: HomePage,
		children: [
			{
				path: '',
				loadChildren: () => import('../search/search.module').then((m) => m.SearchPageModule)
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomePageRoutingModule {}
