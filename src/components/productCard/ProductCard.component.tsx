import { useEffect, useState } from 'react';

import cart from '@/assets/icons/cart.svg';
import type Product from '@/interface/product.ts';

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
        if (!isCart) {
            increaseCounter();
        } else if (isCart) {
            decrementCounter();
        }
    };

    return (
        <li className={styles.product}>
            <div className={styles.container}>
                <div className={styles.container_img}>
                    <img className={styles.img} src={product.images[0]} alt="" />
                </div>
                <p className={styles.title}>{product.title}</p>
                <div className={styles.price_and_cart}>
                    <div>
                        <span className={styles.price}>{product.price}</span>
                        <span className={styles.currency}> ₴</span>
                    </div>

                    <div className={styles.cart} onClick={changeCart}>
                        <div
                            className={styles.cart_button}
                            style={{
                                backgroundImage: `url(${cart})`,
                            }}
                        ></div>
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
