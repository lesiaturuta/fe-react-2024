import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        productSelect: {},
    },
    reducers: {
        setProduct(state, action) {
            state.productSelect = action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;
