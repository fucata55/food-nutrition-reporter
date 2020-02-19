import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: [ './search.page.scss' ]
})
export class SearchPage implements OnInit {
	constructor(private _router: Router) {}

	ngOnInit() {}

	public handleSearchResultClick($event): void {
		this._router.navigateByUrl('/nutrition-detail');
	}
}
