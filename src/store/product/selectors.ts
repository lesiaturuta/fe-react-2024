import type Product from '@/interface/product.ts';

export const selectProduct = (state: { productSelect: { productSelect: Product } }) => state.productSelect.productSelect;
