import { Link } from 'react-router-dom';

import { clsx } from 'clsx';

import styles from './pageNotFound.module.css';

const PageNotFound = ({ theme }: { theme: string }) => (
    <>
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <h2 className={styles.title}>Page not found.</h2>
            <Link className={styles.link} to={'/fe-react-2024/'}>
                Go Home !
            </Link>
        </div>
    </>
);

export default PageNotFound;
