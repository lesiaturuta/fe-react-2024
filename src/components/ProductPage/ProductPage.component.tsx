import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { clsx } from 'clsx';

import cart from '@/assets/icons/cart.svg';
import ChevronLeft from '@/assets/icons/ChevronLeft.component.tsx';
import ChevronRight from '@/assets/icons/ChevronRight.component.tsx';
import type Product from '@/interface/product.ts';
import Button from '@/UI/button/Button.components.tsx';
import getData from '@/utils/getData.ts';

import styles from './productPage.module.css';

const ProductPageComponent = ({ theme }: { theme: string }) => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [maxIndexImages, setMaxIndexImages] = useState<number>(0);
    const [mainImg, setMainImg] = useState<number>(0);

    useEffect(() => {
        getData(`https://ma-backend-api.mocintra.com/api/v1/products/${id}`)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        let indexImages = 0;
        if (product !== null && product.images.length > 0) {
            indexImages = product.images.length;
        }
        setMaxIndexImages(indexImages);
    }, [product]);
    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.container}>
                <div className={styles.main_images_container}>
                    <div className={styles.images}>
                        {product?.images.map((image, index) => (
                            <img
                                src={image}
                                key={image}
                                onClick={() => setMainImg(index)}
                                alt=""
                                className={clsx(styles.image, index > 0 ? styles.mt_25 : '')}
                            />
                        ))}
                    </div>
                    <div className={styles.main_image_container}>
                        <button className={clsx(styles.btn_left)} onClick={() => mainImg - 1 >= 0 && setMainImg(mainImg - 1)}>
                            <ChevronLeft color={theme === 'light' ? '#111' : '#FFF'} />
                        </button>
                        <div className={styles.main_image}>
                            <img className={styles.main_image} src={product?.images[mainImg]} alt="" />
                        </div>
                        <button className={clsx(styles.btn_right)} onClick={() => maxIndexImages - 1 > mainImg && setMainImg(mainImg + 1)}>
                            <ChevronRight color={theme === 'light' ? '#111' : '#FFF'} />
                        </button>
                    </div>
                </div>

                <div className={styles.info}>
                    <Link to={'/products'} className={styles.btn_home}>
                        <ChevronLeft color={theme === 'light' ? '#656565' : '#FFF'} />
                        <span className={styles.btn_home_text}>Back</span>
                    </Link>
                    <h2 className={styles.title}>{product?.title}</h2>
                    <div className={styles.category}>{product?.category.name}</div>
                    <p className={styles.description}>{product?.description}</p>
                    <div className={styles.price_and_button}>
                        <div>
                            <span className={styles.price}>{product?.price}</span>
                            <span className={styles.currency}>₴</span>
                        </div>
                        <Button name="Add to cart" backgroundColor="#EF4934" icon={cart} widthIcon={18} heightIcon={18} />
                    </div>
                </div>

                <div className={styles.info_mobile}>
                    <div className={styles.price_product}>
                        <span className={styles.price}>{product?.price}</span>
                        <span className={styles.currency}>₴</span>
                    </div>
                    <h2 className={styles.title}>{product?.title}</h2>
                    <div className={styles.category}>{product?.category.name}</div>
                    <p className={styles.description}>{product?.description}</p>
                    <div className={styles.price_and_button}>
                        <Link to={'/products'} className={styles.btn_home}>
                            <ChevronLeft color={theme === 'light' ? '#656565' : '#FFF'} />
                            <span className={styles.btn_home_text}>Back</span>
                        </Link>
                        <Button
                            className={styles.btn_cart}
                            name="Add to cart"
                            backgroundColor="#EF4934"
                            icon={cart}
                            widthIcon={18}
                            heightIcon={18}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPageComponent;
