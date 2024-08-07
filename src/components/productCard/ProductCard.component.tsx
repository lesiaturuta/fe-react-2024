import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { clsx } from 'clsx';

import IconCart from '@/assets/icons/IconCart.component.tsx';
import type Product from '@/interface/product.ts';
import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './productCard.module.css';

const ProductCard = ({
    product,
    increaseCounter,
    decrementCounter,
}: {
    product: Product;
    increaseCounter: () => void;
    decrementCounter: () => void;
}) => {
    const theme = useSelector(selectTheme);
    const [isCart, setIsCart] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem(product.id.toString());
        if (storedValue !== null) {
            const isProductInCart = JSON.parse(storedValue);
            setIsCart(isProductInCart);
        }
    }, [product.id]);

    const changeCart = () => {
        setIsCart(!isCart);
        localStorage.setItem(product.id.toString(), JSON.stringify(!isCart));
        isCart ? decrementCounter() : increaseCounter();
    };

    return (
        <li
            className={clsx({
                [styles.product]: true,
            })}
        >
            <div className={styles.container}>
                <div className={styles.container_img}>
                    <img className={styles.img} src={product.images[0]} alt="" />
                </div>
                <Link to={`/product/${product.id}`} className={styles.title}>
                    {product.title}
                </Link>
                <div className={styles.price_and_cart}>
                    <div>
                        <span className={styles.price}>{product.price}</span>
                        <span className={styles.currency}> ₴</span>
                    </div>

                    <div className={styles.cart} onClick={changeCart}>
                        <IconCart color={theme === 'light' ? '#111' : '#FFF'} />
                        {isCart && (
                            <div className={styles.select_cart}>
                                <span className={styles.save_cart}>1</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ProductCard;
