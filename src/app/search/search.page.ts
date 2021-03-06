import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { first } from 'rxjs/operators';
import { SearchResult, IFood } from '../search-result';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit {
	public searchResult: SearchResult | void;
	constructor(private _router: Router, private _foodService: FoodService) { }

	ngOnInit() { }

	public handleSearchResultClick(food: IFood): void {
		this._router.navigate(['/nutrition-detail'], { queryParams: { foodId: food.fdcId } });
	}

	public handleSearchInput($event: any): void {
		const query = $event.target.value || ''
		this._foodService.search(query)
			.pipe(first())
			.subscribe(() => {
				const jsonString = this._foodService.storage.getItem('searchResult');
				this.searchResult = new SearchResult(JSON.parse(jsonString));
			});
	}
}
