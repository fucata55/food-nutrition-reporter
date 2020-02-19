import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutritionDetailPage } from './nutrition-detail.page';

describe('NutritionDetailPage', () => {
  let component: NutritionDetailPage;
  let fixture: ComponentFixture<NutritionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
