import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { FoodDetail, IFoodDetail } from './food-detail';
import { ISearchResult, SearchResult } from './search-result';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private readonly _url: string = 'https://api.nal.usda.gov/fdc/v1/'
  private readonly _searchUrl: string = `${this._url}/search`
  private readonly _apiKey: string = 'jAR3Dd1SkmumMDSTGsu4ayV1JtnOQ8wr174CGxmH'
  constructor(private _http: HttpClient) { }

  public search(query: string): Observable<SearchResult> {
    const params = {
      api_key: this._apiKey,
      generalSearchInput: query
    }
    return this._http.get<ISearchResult | void>(this._searchUrl, { params })
      .pipe(
        first(),
        map(res => res ? new SearchResult(res) : new SearchResult({ foods: [] }))
      )
  }

  public getDetail(foodId: number): Observable<FoodDetail | void> {
    const params = {
      api_key: this._apiKey
    }
    return this._http.get<IFoodDetail | void>(this._url + foodId, { params })
      .pipe(
        first(),
        map(res => res ? new FoodDetail(res) : null)
      )

  }
}
