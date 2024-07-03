export type CategoryName = 'Electronics' | 'Shoes' | 'Clothes' | '';

export interface Category {
    electronics: number;
    shoes: number;
    clothes: number;
}

export interface GetProductsParameters {
    url: string;
}

export interface GetProductParameters {
    id: string;
}
