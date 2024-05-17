import ProductCard from '@/components/productCard/ProductCard.component.tsx';
import type Product from '@/interface/product.ts';

import styles from './productList.module.css';

const ProductList = ({
    products,
    increaseCounter,
    decrementCounter,
    theme,
}: {
    products: Product[];
    increaseCounter: () => void;
    decrementCounter: () => void;
    theme: string;
}) => (
    <ul className={`${styles.products} ${theme === 'light' ? styles.light_theme : styles.dark_theme}`}>
        {products.map((product: Product) => (
            <ProductCard
                theme={theme}
                product={product}
                increaseCounter={increaseCounter}
                decrementCounter={decrementCounter}
                key={product.id}
            />
        ))}
    </ul>
);

export default ProductList;
