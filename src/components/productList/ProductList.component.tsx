import { useSelector } from 'react-redux';

import { clsx } from 'clsx';

import Error from '@/components/Error/Error.components.tsx';
import PaginationComponent from '@/components/pagination/Pagination.component.tsx';
import ProductCard from '@/components/productCard/ProductCard.component.tsx';
import Search from '@/components/search/Search.component.tsx';
import type { CategoryName } from '@/interface';
import type Product from '@/interface/product.ts';
import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './productList.module.css';

const ProductList = ({
    products,
    increaseCounter,
    decrementCounter,
    increasePage,
    decrementPage,
    getProductsById,
    getSortByName,
    getSearchValue,
    nameCategory,
}: {
    products: Product[];
    increaseCounter: () => void;
    decrementCounter: () => void;
    increasePage: () => void;
    decrementPage: () => void;
    getProductsById: (name: CategoryName) => void;
    getSortByName: (name: string) => void;
    getSearchValue: (value: string) => void;
    nameCategory: string;
}) => {
    const theme = useSelector(selectTheme);
    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.search}>
                <Search
                    getProductsById={getProductsById}
                    nameCategory={nameCategory}
                    getSortByName={getSortByName}
                    getSearchValue={getSearchValue}
                />
                {products.length === 0 ? (
                    <Error message={'No product'} />
                ) : (
                    <ul className={styles.products}>
                        {products.map((product: Product) => (
                            <ProductCard
                                product={product}
                                increaseCounter={increaseCounter}
                                decrementCounter={decrementCounter}
                                key={product.id}
                            />
                        ))}
                    </ul>
                )}
            </div>
            <div className={styles.pagination}>
                {products.length > 0 && <PaginationComponent increasePage={increasePage} decrementPage={decrementPage} />}
            </div>
        </div>
    );
};

export default ProductList;
