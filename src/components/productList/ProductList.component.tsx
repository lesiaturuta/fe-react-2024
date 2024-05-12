import ProductCard from '@/components/productCard/ProductCard.component.tsx';
import type Product from '@/interface/product.ts';

import styles from './productList.module.css';

const ProductList = ({
    products,
    increaseCounter,
    decrementCounter,
}: {
    products: Product[];
    increaseCounter: () => void;
    decrementCounter: () => void;
}) => (
    <ul className={styles.products}>
        {products.map((product: Product) => (
            <ProductCard product={product} increaseCounter={increaseCounter} decrementCounter={decrementCounter} key={product.id} />
        ))}
    </ul>
);

export default ProductList;
