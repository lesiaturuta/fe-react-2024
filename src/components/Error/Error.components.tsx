import { useSelector } from 'react-redux';

import { clsx } from 'clsx';

import { selectTheme } from '@/store/theme/selectors.ts';

import styles from '../pageNotFound/pageNotFound.module.css';

const Error = ({ message = 'Unknown error' }: { message?: string }) => {
    const theme = useSelector(selectTheme);
    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <h2 className={styles.title}>{message}</h2>
        </div>
    );
};

export default Error;
