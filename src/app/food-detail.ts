export class FoodDetail {
	public name: string;
	public nutrients: Nutrient[];
	constructor(o: IFoodDetail) {
		this.name = o.description;
		this.nutrients = o.foodNutrients.map((foodNutrient) => new Nutrient(foodNutrient));
	}
}

export class Nutrient {
	public name: string;
	public amount: number;
	public unit: string;
	constructor(o: INutrient) {
		this.name = o.nutrient.name;
		switch (o.nutrient.unitName) {
			case 'mg':
				this.amount = o.amount / 1000;
				this.unit = 'g';
				break;
			default:
				this.amount = o.amount;
				this.unit = o.nutrient.unitName;
		}
	}
}

export interface IFoodDetail {
	description: string;
	foodNutrients: INutrient[];
}

export interface INutrient {
	amount: number;
	nutrient: {
		name: string;
		unitName: string;
	};
}
