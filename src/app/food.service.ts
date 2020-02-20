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
  public storage: Storage = window.localStorage;
  constructor(private _http: HttpClient) { }

  public search(query: string): Observable<void> {
    const params = {
      api_key: this._apiKey,
      generalSearchInput: query
    }
    this.storage.clear();
    return this._http.get<ISearchResult | void>(this._searchUrl, { params })
      .pipe(
        first(),
        map(res => this.storage.setItem('searchResult', JSON.stringify(res)))
      )
  }

  public getDetail(foodId: number): Observable<void> {
    const params = {
      api_key: this._apiKey
    }
    this.storage.clear();
    return this._http.get<IFoodDetail | void>(this._url + foodId, { params })
      .pipe(
        first(),
        map(res => this.storage.setItem('foodDetail', JSON.stringify(res)))
      )

  }
}
