import { configureStore } from '@reduxjs/toolkit';

import { paginationReducer } from '@/store/pagination/pagination.ts';
import { productReducer } from '@/store/product/productSelect.ts';
import { productsReducer } from '@/store/productsList/productsList.ts';
import { themeReducer } from '@/store/theme/theme.ts';

const reducer = {
    theme: themeReducer,
    productsList: productsReducer,
    getPaginationPage: paginationReducer,
    productSelect: productReducer,
};

export const store = configureStore({
    reducer,
});
