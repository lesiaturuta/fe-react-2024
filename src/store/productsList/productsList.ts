import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsList: [],
    },
    reducers: {
        setProducts(state, action) {
            state.productsList = action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
