import { clsx } from 'clsx';

import styles from '../pageNotFound/pageNotFound.module.css';

const Error = ({ theme, message = 'Unknown error' }: { theme: string; message?: string }) => (
    <div
        className={clsx(styles.main, {
            light_theme: theme === 'light',
            dark_theme: theme === 'dark',
        })}
    >
        <h2 className={styles.title}>{message}</h2>
    </div>
);

export default Error;
