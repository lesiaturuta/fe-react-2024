import React from 'react';

import { clsx } from 'clsx';

import search from '@/assets/icons/search.svg';

import styles from './search.module.css';

const Search = ({ theme }: { theme: string }) => {
    const nameSelect: string[] = ['Price (High - Low)', 'Price (Low- High)', 'Newest', 'Oldest'];

    const [selectedSort, setSelectedSort] = React.useState<string>(nameSelect[0]);
    const [isOpenDropDropDown, setIsOpenDropDropDown] = React.useState<boolean>(false);

    // , setSelectedSort] = React.useState<string>(nameSelect[0]);
    return (
        <div
            className={clsx({
                [styles.main]: true,
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.search}>
                <input className={styles.search_input} type="text" placeholder="Search..." />
                <button className={styles.btn_icon}>
                    <img className={styles.icon} src={search} alt="" />
                </button>
            </div>
            <div className={styles.change}>
                <div className={styles.buttons}>
                    <button className={clsx(styles.btn, styles.mr_10)}>Electronics</button>
                    <button className={clsx(styles.btn, styles.mr_10)}>Shoes</button>
                    <button className={styles.btn}>Clothes</button>
                </div>
                <div className={styles.sort}>
                    <span className={styles.sort_name}>Sort by:</span>

                    <div
                        className={clsx({
                            [styles.drop_down]: true,
                            // [styles.select_background]: isOpenDropDropDown,
                        })}
                    >
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
