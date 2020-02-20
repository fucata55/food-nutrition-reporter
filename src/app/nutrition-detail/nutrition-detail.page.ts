import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first, map, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { FoodDetail } from '../food-detail';

@Component({
  selector: 'app-nutrition-detail',
  templateUrl: './nutrition-detail.page.html',
  styleUrls: ['./nutrition-detail.page.scss'],
})
export class NutritionDetailPage implements OnInit {
  public content: FoodDetail | void
  constructor(private _route: ActivatedRoute, private _foodService: FoodService) { }

  ngOnInit() {
    this._getQuery()
      .pipe(
        first(),
        flatMap(foodId => this._getFoodDetail(+foodId)),
      )
      .subscribe(res => this.content = res)
  }

  private _getQuery(): Observable<string> {
    return this._route.queryParamMap
      .pipe(
        map(paramMap => paramMap.get('foodId'))
      )
  }

  private _getFoodDetail(foodId: number) {
    return this._foodService.getDetail(foodId)
      .pipe(
        map(res => res)
      )
  }
}
