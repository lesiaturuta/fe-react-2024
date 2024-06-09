import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '@/components/about/About.component.tsx';
import LayoutComponent from '@/components/LayoutComponent/LayoutComponent.tsx';
import { useResize } from '@/components/myHooks/use-resize';
import PageNotFound from '@/components/pageNotFound/PageNotFound.components.tsx';
import ProductList from '@/components/productList/ProductList.component.tsx';
import ProductPageComponent from '@/components/ProductPage/ProductPage.component.tsx';
import { PagesContext } from '@/context/PagesContext.tsx';
import type Product from '@/interface/product.ts';
import getData from '@/utils/getData.ts';

import './App.css';

const App = () => {
    let defaultTheme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (localStorage.getItem('theme')) {
        defaultTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }

    const [amountCart, setAmountCart] = useState<number>(0);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [filterProducts, setFilterProducts] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [theme, setTheme] = useState<string>(defaultTheme);
    const [step, setStep] = useState<number>(10);

    const [pagination, setPagination] = useState<{ start: number; end: number }>({ start: 0, end: step });
    const [totalPages, setTotalPages] = useState<number>(0);
    const [numberPage, setNumberPage] = useState<number>(1);

    const changeTheme = (name: string) => {
        name === 'light' ? setTheme('light') : setTheme('dark');
        localStorage.setItem('theme', name === 'light' ? 'light' : 'dark');
    };

    useEffect(() => {
        getData('https://ma-backend-api.mocintra.com/api/v1/products')
            .then((data) => {
                setAllProducts(data);
                updateLocalCart(data);
                setFilterProducts(data);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const totalProducts = filterProducts.length;
        setProducts(getProductsByIndex(filterProducts, pagination.start, pagination.end));
        setNumberPage(pagination.end / step);
        setTotalPages(Math.ceil(totalProducts / step));
        if (Math.ceil(totalProducts / step) < pagination.end / step && Math.ceil(totalProducts / step) > 0 && pagination.end / step > 0) {
            setPagination({
                start: (Math.ceil(totalProducts / step) - 1) * step,
                end: (Math.ceil(totalProducts / step) - 1) * step + step,
            });
            setNumberPage(Math.ceil(totalProducts / step));
        }
    }, [pagination.end, filterProducts, pagination.start, step]);

    const width = useResize().width;
    useEffect(() => {
        if (width > 1500) {
            const newPagination = { start: 0, end: 10 };
            setStep(10);
            setPagination(newPagination);
        } else if (width > 1220) {
            const newPagination = { start: 0, end: 8 };
            setStep(8);
            setPagination(newPagination);
        } else if (width > 890) {
            const newPagination = { start: 0, end: 6 };
            setStep(6);
            setPagination(newPagination);
        } else if (width > 575) {
            const newPagination = { start: 0, end: 4 };
            setStep(4);
            setPagination(newPagination);
        }
    }, [width]);

    const getProductsByIndex = (productsArray: Product[], start: number, end: number) => productsArray.slice(start, end);
    const getProductsByCategory = (name: string) => {
        setFilterProducts(allProducts.filter((product) => product.category.name === name));
    };

    const getSortByName = (name: string) => {
        switch (name) {
            case 'Price (High - Low)': {
                setFilterProducts(allProducts.sort((a, b) => a.price - b.price));
                setProducts(getProductsByIndex(filterProducts, pagination.start, pagination.end));
                break;
            }
            case 'Price (Low - High)': {
                setFilterProducts(allProducts.sort((a, b) => b.price - a.price));
                setProducts(getProductsByIndex(filterProducts, pagination.start, pagination.end));
                break;
            }
            case 'Newest': {
                setFilterProducts(allProducts.sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime()));
                setProducts(getProductsByIndex(filterProducts, pagination.start, pagination.end));
                break;
            }
            case 'Oldest': {
                setFilterProducts(allProducts.sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()));
                setProducts(getProductsByIndex(filterProducts, pagination.start, pagination.end));
                break;
            }
        }
    };

    const updateLocalCart = (data: Product[]) => {
        let count: number = 0;
        data.forEach((product: Product) => {
            if (localStorage.getItem(product.id.toString()) === 'true') {
                count++;
            }
        });
        setAmountCart(count);
    };

    const increaseCounter = () => {
        setAmountCart(amountCart + 1);
    };

    const decrementCounter = () => {
        setAmountCart(amountCart - 1);
    };

    const increasePage = () => {
        setPagination({
            start: pagination.start + step,
            end: pagination.end + step,
        });
    };

    const decrementPage = () => {
        setPagination({
            start: pagination.start - step,
            end: pagination.end - step,
        });
    };

    return (
        <div className="body">
            <PagesContext.Provider value={{ page: numberPage, maxPages: totalPages }}>
                <Routes>
                    <Route path={'/'} element={<LayoutComponent theme={theme} amountCart={amountCart} changeTheme={changeTheme} />}>
                        <Route path={'/'} index element={<About theme={theme} />} />
                        <Route
                            path={'/products'}
                            element={
                                <ProductList
                                    theme={theme}
                                    products={products}
                                    increasePage={increasePage}
                                    decrementPage={decrementPage}
                                    increaseCounter={increaseCounter}
                                    decrementCounter={decrementCounter}
                                    getProductsByCategory={getProductsByCategory}
                                    getSortByName={getSortByName}
                                />
                            }
                        />
                        <Route path={'/product/:id'} element={<ProductPageComponent theme={theme} />} />{' '}
                    </Route>
                    <Route path={'*'} element={<PageNotFound theme={theme} />} />
                </Routes>
            </PagesContext.Provider>
        </div>
    );
};

export default App;
