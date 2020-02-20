export class SearchResult {
    public foods: IFood[];
    constructor(o: ISearchResult) {
        this.foods = o.foods;
    }
}

export interface ISearchResult {
    foods: IFood[];
}

export interface IFood {
    fdcId: number;
    description: string;
}
