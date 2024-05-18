import search from '@/assets/icons/search.svg';

import styles from './search.module.css';

const Search = ({ theme }: { theme: string }) => (
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
                <select className={`${styles.select} ${styles.height_40px}`} name="user_profile_color_1">
                    <option className={styles.select_item} value="1">
                        Price (High - Low)
                    </option>
                    <option className={styles.select_item} value="2">
                        Price (Low- High)
                    </option>
                    <option className={styles.select_item} value="3">
                        Newest
                    </option>
                    <option className={styles.select_item} value="4">
                        Oldest
                    </option>
                </select>
            </div>
        </div>
    </div>
);

export default Search;
