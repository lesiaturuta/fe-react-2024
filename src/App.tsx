import { useEffect, useState } from 'react';

import AboutComponent from '@/components/about/About.component.tsx';
import FooterComponent from '@/components/footer/Footer.component.tsx';
import HeaderComponent from '@/components/header/Header.component.tsx';
import ProductList from '@/components/productList/ProductList.component.tsx';
import type Product from '@/interface/product.ts';
import getData from '@/utils/getData.ts';

import './App.css';

const App = () => {
    const [amountCart, setAmountCart] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [isProduct, setIsProduct] = useState<boolean>(false);

    useEffect(() => {
        getData('https://ma-backend-api.mocintra.com/api/v1/products')
            .then((data) => {
                let count: number = 0;
                setProducts(data);
                data.forEach((product: Product) => {
                    if (localStorage.getItem(product.id.toString()) === 'true') {
                        count++;
                    }
                });
                setAmountCart(count);
            })
            .catch((error) => console.error(error));
    }, []);

    const increaseCounter = () => {
        setAmountCart(amountCart + 1);
    };

    const decrementCounter = () => {
        setAmountCart(amountCart - 1);
    };

    const nav = (link: String) => {
        switch (link) {
            case 'About': {
                setIsProduct(false);
                break;
            }
            case 'Products': {
                setIsProduct(true);
                break;
            }
            default: {
                break;
            }
        }
    };

    return (
        <div className="body">
            <HeaderComponent amountCart={amountCart} nav={nav} />
            {!isProduct && <AboutComponent />}
            {isProduct && <ProductList products={products} increaseCounter={increaseCounter} decrementCounter={decrementCounter} />}
            <FooterComponent />
        </div>
    );
};

export default App;
