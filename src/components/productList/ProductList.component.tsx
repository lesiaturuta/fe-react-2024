import ProductCard from '@/components/productCard/ProductCard.component.tsx';
import Search from '@/components/search/Search.component.tsx';
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
    <div className={`${styles.main} ${theme === 'light' ? styles.light_theme : styles.dark_theme}`}>
        <div className={styles.search}>
            <Search theme={theme} />
        </div>
        <ul className={styles.products}>
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
    </div>
);

export default ProductList;
