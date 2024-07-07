import { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { clsx } from 'clsx';

import About from '@/components/about/About.component.tsx';
import Error from '@/components/Error/Error.components.tsx';
import LayoutComponent from '@/components/LayoutComponent/LayoutComponent.tsx';
import Login from '@/components/login/Login.component.tsx';
import { useResize } from '@/components/myHooks/use-resize';
import PageNotFound from '@/components/pageNotFound/PageNotFound.components.tsx';
import ProductList from '@/components/productList/ProductList.component.tsx';
import ProductPageComponent from '@/components/ProductPage/ProductPage.component.tsx';
import type { Category, CategoryName } from '@/interface';
import type Product from '@/interface/product.ts';
import type { AppDispatch } from '@/interface/type.ts';
import { setPaginationPage } from '@/store/pagination/pagination.ts';
import { selectProducts } from '@/store/productsList/selectors.ts';
import { getProductsThunk } from '@/store/productsList/thunks.ts';
import { selectTheme } from '@/store/theme/selectors.ts';
import { setTheme } from '@/store/theme/theme.ts';
import { verifyUser } from '@/utils/authUser.ts';

import './App.css';

const App = () => {
    let defaultTheme: string = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (localStorage.getItem('theme')) {
        defaultTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    }
    const navigate = useNavigate();
    const theme = useSelector(selectTheme);
    const products = useSelector(selectProducts);
    const dispatch = useDispatch<AppDispatch>();

    const categoryId: Category = {
        electronics: 2,
        shoes: 4,
        clothes: 1,
    };

    const [amountCart, setAmountCart] = useState<number>(0);
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [step, setStep] = useState<number>(0);
    const [pagination, setPagination] = useState<{ start: number; end: number }>({ start: 0, end: step });
    const [totalPages, setTotalPages] = useState<number>(0);
    const [numberPage, setNumberPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [idCategory, setIdCategory] = useState<number>(0);
    const [nameCategory, setNameCategory] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [errorMessage] = useState<string>('');
    const [baseUrl, setBaseUrl] = useState<string>('');
    const [isAuthorized, setIsAuthorized] = useState(false); // Состояние для проверки авторизации

    const changeTheme = (newTheme: string) => {
        dispatch(setTheme(newTheme));
    };

    useEffect(() => {
        verifyUser()
            .then(() => {
                setIsAuthorized(true);
            })
            .catch(() => {
                setIsAuthorized(false);
                navigate('/login');
            });
    }, [navigate]);

    useEffect(() => {
        dispatch(setPaginationPage({ page: numberPage, maxPages: totalPages }));
    }, [numberPage, totalPages, dispatch]);

    useEffect(() => {
        if (step === 0 && pagination.start === 0) return;
        let url = `https://ma-backend-api.mocintra.com/api/v1/products?limit=${step}&offset=${pagination.start}`;
        if (idCategory) url = `${url}&categoryId=${idCategory}`;
        if (searchValue.length > 0) url = `${url}&title=${searchValue}`;
        setBaseUrl(url);
    }, [idCategory, pagination, searchValue, step]);

    useEffect(() => {
        setIsLoader(true);
        dispatch(getProductsThunk({ url: baseUrl }));
    }, [baseUrl, dispatch]);

    useEffect(() => {
        dispatch(setTheme(defaultTheme));
    }, [defaultTheme, dispatch]);

    useEffect(() => {
        setAllProducts(products.products || []);
        setTotalProducts(products.total || 0);
        setIsLoader(false);
    }, [products]);

    useEffect(() => {
        allProducts.length > 0 && step && setNumberPage(pagination.end / step);
        allProducts.length > 0 && step && setTotalPages(Math.ceil(totalProducts / step));
        if (
            allProducts.length > 0 &&
            Math.ceil(totalProducts / step) < pagination.end / step &&
            Math.ceil(totalProducts / step) > 0 &&
            pagination.end / step > 0
        ) {
            setPagination({
                start: (Math.ceil(totalProducts / step) - 1) * step,
                end: (Math.ceil(totalProducts / step) - 1) * step + step,
            });
            setNumberPage(Math.ceil(totalProducts / step));
        }
    }, [allProducts, pagination.end, step, totalProducts]);

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

    const getProductsById = (name: CategoryName) => {
        const lowerCaseName = name.toLowerCase() as keyof Category;
        const id = categoryId[lowerCaseName];
        setNameCategory(name);
        setIdCategory(id);
    };

    const getSortByName = (name: string) => {
        switch (name) {
            case 'Price (High - Low)': {
                setAllProducts([...allProducts].sort((a, b) => a.price - b.price));
                break;
            }
            case 'Price (Low - High)': {
                setAllProducts([...allProducts].sort((a, b) => b.price - a.price));
                break;
            }
            case 'Newest': {
                setAllProducts([...allProducts].sort((a, b) => new Date(a.creationAt).getTime() - new Date(b.creationAt).getTime()));
                break;
            }
            case 'Oldest': {
                setAllProducts([...allProducts].sort((a, b) => new Date(b.creationAt).getTime() - new Date(a.creationAt).getTime()));
                break;
            }
        }
    };

    const increaseCounter = () => {
        setAmountCart(amountCart + 1);
    };

    const decrementCounter = () => {
        amountCart > 0 && setAmountCart(amountCart - 1);
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

    const getSearchValue = (name: string) => {
        setSearchValue(name);
    };

    return (
        <div className="body">
            <Routes>
                <Route
                    path={'/'}
                    element={<LayoutComponent amountCart={amountCart} isAuthorized={isAuthorized} changeTheme={changeTheme} />}
                >
                    <Route index element={isAuthorized ? <About /> : <Login />} />
                    {!isAuthorized && <Route path={'products'} element={<Login />} />}
                    {isAuthorized && errorMessage && <Route path={'products'} element={<Error message={errorMessage} />} />}
                    {isAuthorized && !errorMessage && (
                        <Route
                            path={'products'}
                            element={
                                isLoader ? (
                                    <div
                                        className={clsx('loader', {
                                            light_theme: theme === 'light',
                                            dark_theme: theme === 'dark',
                                        })}
                                    >
                                        <BallTriangle
                                            height={100}
                                            width={100}
                                            radius={5}
                                            color="#4fa94d"
                                            ariaLabel="ball-triangle-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    </div>
                                ) : (
                                    <ProductList
                                        products={allProducts}
                                        increasePage={increasePage}
                                        decrementPage={decrementPage}
                                        increaseCounter={increaseCounter}
                                        decrementCounter={decrementCounter}
                                        getProductsById={getProductsById}
                                        getSortByName={getSortByName}
                                        getSearchValue={getSearchValue}
                                        nameCategory={nameCategory}
                                    />
                                )
                            }
                        />
                    )}
                    <Route path={'product/:id'} element={<ProductPageComponent />} />
                    <Route path={'/login'} element={<Login />} />
                </Route>
                <Route path={'*'} element={<PageNotFound />} />
            </Routes>
        </div>
    );
};

export default App;
