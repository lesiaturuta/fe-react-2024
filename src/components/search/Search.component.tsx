import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { clsx } from 'clsx';

import search from '@/assets/icons/search.svg';
import type { CategoryName } from '@/interface';

import styles from './search.module.css';

const Search = ({
    theme,
    getProductsById,
    getSortByName,
    getSearchValue,
}: {
    theme: string;
    getProductsById: (name: CategoryName) => void;
    getSortByName: (name: string) => void;
    getSearchValue: (value: string) => void;
}) => {
    const nameSelect: string[] = ['Price (High - Low)', 'Price (Low - High)', 'Newest', 'Oldest'];

    const [selectedSort, setSelectedSort] = useState<string>(nameSelect[0]);
    const [nameCategory, setNameCategory] = useState<string>('');
    const [isOpenDropDropDown, setIsOpenDropDropDown] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const selectCategory = (name: CategoryName) => {
        const newName = name === nameCategory ? '' : name;
        setNameCategory(newName);
        getProductsById(newName);
    };

    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.search}>
                <input className={styles.search_input} type="text" value={searchValue} onChange={handleChange} placeholder="Search..." />
                <button
                    className={styles.btn_icon}
                    onClick={() => {
                        getSearchValue(searchValue);
                    }}
                >
                    <img className={styles.icon} src={search} alt="" />
                </button>
            </div>
            <div className={styles.change}>
                <div className={styles.buttons}>
                    <button
                        onClick={() => selectCategory('Electronics')}
                        className={clsx(styles.btn, styles.mr_10, { [styles.btn_active]: nameCategory === 'Electronics' })}
                    >
                        Electronics
                    </button>
                    <button
                        onClick={() => selectCategory('Shoes')}
                        className={clsx(styles.btn, styles.mr_10, { [styles.btn_active]: nameCategory === 'Shoes' })}
                    >
                        Shoes
                    </button>
                    <button
                        onClick={() => selectCategory('Clothes')}
                        className={clsx(styles.btn, { [styles.btn_active]: nameCategory === 'Clothes' })}
                    >
                        Clothes
                    </button>
                </div>
                <div className={styles.sort}>
                    <span className={styles.sort_name}>Sort by:</span>

                    <div className={clsx(styles.drop_down)}>
                        <div
                            className={clsx({
                                [styles.select_background]: isOpenDropDropDown,
                            })}
                        >
                            <button
                                className={clsx({
                                    [styles.select_btn_background]: isOpenDropDropDown,
                                    [styles.select]: true,
                                })}
                                onClick={() => setIsOpenDropDropDown(!isOpenDropDropDown)}
                            >
                                {selectedSort}
                            </button>
                        </div>

                        <ul
                            className={clsx({
                                [styles.drop_down_content]: isOpenDropDropDown,
                            })}
                        >
                            {isOpenDropDropDown &&
                                nameSelect.map(
                                    (option, index) =>
                                        selectedSort !== option && (
                                            <li key={index}>
                                                <button
                                                    className={styles.select_btn}
                                                    onClick={() => {
                                                        setSelectedSort(option);
                                                        setIsOpenDropDropDown(false);
                                                        getSortByName(option);
                                                    }}
                                                >
                                                    {option}
                                                </button>
                                            </li>
                                        ),
                                )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
