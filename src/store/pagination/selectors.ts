export const selectPagination = (state: { getPaginationPage: { getPaginationPage: { page: number; maxPages: number } } }) =>
    state.getPaginationPage.getPaginationPage;
