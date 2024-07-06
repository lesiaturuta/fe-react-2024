import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { clsx } from 'clsx';

import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './pageNotFound.module.css';

const PageNotFound = () => {
    const theme = useSelector(selectTheme);
    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <h2 className={styles.title}>Page not found.</h2>
            <Link className={styles.link} to={'/'}>
                Go Home !
            </Link>
        </div>
    );
};

export default PageNotFound;
