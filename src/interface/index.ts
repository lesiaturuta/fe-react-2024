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

export interface TokensResponse {
    access_token: string;
    refresh_token: string;
}

export interface AccessTokenResponse {
    access_token: string;
    refresh_token: string;
}
