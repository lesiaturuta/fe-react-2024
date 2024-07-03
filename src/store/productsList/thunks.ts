import { createAsyncThunk } from '@reduxjs/toolkit';

import type { GetProductsParameters } from '@/interface';
import { setProducts } from '@/store/productsList/productsList.ts';
import getData from '@/utils/getData';

export const getProductsThunk = createAsyncThunk('productsList/getProducts', async ({ url }: GetProductsParameters, { dispatch }) => {
    const products = await getData(url);
    dispatch(setProducts(products));
    return products;
});
