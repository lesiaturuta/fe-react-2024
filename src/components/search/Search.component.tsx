import React from 'react';

import search from '@/assets/icons/search.svg';

import styles from './search.module.css';

const Search = ({ theme }: { theme: string }) => {
    const nameSelect: string[] = ['Price (High - Low)', 'Price (Low- High)', 'Newest', 'Oldest'];

    const [selectedSort, setSelectedSort] = React.useState<string>(nameSelect[0]);
    return (
        <div className={`${styles.main} ${theme === 'light' ? styles.light_theme : styles.dark_theme}`}>
            <div className={styles.search}>
                <input className={styles.search_input} type="text" placeholder="Search..." />
                <button className={styles.btn_icon}>
                    <img className={styles.icon} src={search} alt="" />
                </button>
            </div>
            <div className={styles.change}>
                <div className={styles.buttons}>
                    <button className={`${styles.btn} ${styles.mr_10}`}>Electronics</button>
                    <button className={`${styles.btn} ${styles.mr_10}`}>Shoes</button>
                    <button className={styles.btn}>Clothes</button>
                </div>
                <div className={styles.sort}>
                    <span className={styles.sort_name}>Sort by:</span>

                    <div className={styles.drop_down}>
                        <button className={styles.select}>{selectedSort}</button>
                        <div className={styles.drop_down_content}>
                            {selectedSort !== nameSelect[0] && (
                                <button className={styles.select_btn} onClick={() => setSelectedSort(nameSelect[0])}>
                                    Price (High - Low)
                                </button>
                            )}
                            {selectedSort !== nameSelect[1] && (
                                <button className={styles.select_btn} onClick={() => setSelectedSort(nameSelect[1])}>
                                    Price (Low- High)
                                </button>
                            )}
                            {selectedSort !== nameSelect[2] && (
                                <button className={styles.select_btn} onClick={() => setSelectedSort(nameSelect[2])}>
                                    Newest
                                </button>
                            )}
                            {selectedSort !== nameSelect[3] && (
                                <button className={styles.select_btn} onClick={() => setSelectedSort(nameSelect[3])}>
                                    Oldest
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
