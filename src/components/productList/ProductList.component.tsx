import { clsx } from 'clsx';

import PaginationComponent from '@/components/pagination/Pagination.component.tsx';
import ProductCard from '@/components/productCard/ProductCard.component.tsx';
import Search from '@/components/search/Search.component.tsx';
import type Product from '@/interface/product.ts';

import styles from './productList.module.css';

const ProductList = ({
    products,
    increaseCounter,
    decrementCounter,
    increasePage,
    decrementPage,
    theme,
    getProductsByCategory,
    getSortByName,
}: {
    products: Product[];
    increaseCounter: () => void;
    decrementCounter: () => void;
    increasePage: () => void;
    decrementPage: () => void;
    theme: string;
    getProductsByCategory: (name: string) => void;
    getSortByName: (name: string) => void;
}) => (
    <div
        className={clsx(styles.main, {
            light_theme: theme === 'light',
            dark_theme: theme === 'dark',
        })}
    >
        <div className={styles.search}>
            <Search theme={theme} getProductsByCategory={getProductsByCategory} getSortByName={getSortByName} />
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
        <div className={styles.pagination}>
            <PaginationComponent increasePage={increasePage} decrementPage={decrementPage} theme={theme} />
        </div>
    </div>
);

export default ProductList;
