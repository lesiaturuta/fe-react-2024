import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
    name: 'products',
    initialState: {
        getPaginationPage: { page: 0, maxPages: 0 },
    },
    reducers: {
        setPaginationPage(state, action) {
            state.getPaginationPage = action.payload;
        },
    },
});

export const { setPaginationPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
