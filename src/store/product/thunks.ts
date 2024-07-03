import { createAsyncThunk } from '@reduxjs/toolkit';

import type { GetProductParameters } from '@/interface';
import { setProduct } from '@/store/product/productSelect.ts';
import getData from '@/utils/getData';

export const getProductThunk = createAsyncThunk('product/getProduct', async ({ id }: GetProductParameters, { dispatch }) => {
    const product = await getData(`https://ma-backend-api.mocintra.com/api/v1/products/${id}`);
    dispatch(setProduct(product));
    return product;
});
