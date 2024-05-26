import React, { useContext } from 'react';

import { clsx } from 'clsx';

import ChevronLeft from '@/assets/icons/ChevronLeft.component.tsx';
import ChevronRight from '@/assets/icons/ChevronRight.component.tsx';
import { PagesContext } from '@/context/PagesContext.tsx';

import styles from './Pagination.module.css';

const PaginationComponent = ({
    increasePage,
    decrementPage,
    theme,
}: {
    increasePage: () => void;
    decrementPage: () => void;
    theme: string;
}) => {
    const { page, maxPages } = useContext(PagesContext);
    const color = theme === 'dark' ? '#FFF' : '#000';
    return (
        <div className={styles.main}>
            <button className={clsx(styles.btn, styles.mr_5)} disabled={page === 1} onClick={decrementPage}>
                <ChevronLeft color={page === 1 ? '#CCC' : color} />
            </button>
            <div className={clsx(styles.page, styles.mr_5)}>{page}</div>
            <button className={styles.btn} disabled={page === maxPages} onClick={increasePage}>
                <ChevronRight color={page === maxPages ? '#CCC' : color} />
            </button>
        </div>
    );
};

export default PaginationComponent;
