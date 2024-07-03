import { useSelector } from 'react-redux';

import { clsx } from 'clsx';

import ChevronLeft from '@/assets/icons/ChevronLeft.component.tsx';
import ChevronRight from '@/assets/icons/ChevronRight.component.tsx';
import { selectPagination } from '@/store/pagination/selectors.ts';
import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './Pagination.module.css';

const PaginationComponent = ({ increasePage, decrementPage }: { increasePage: () => void; decrementPage: () => void }) => {
    const theme = useSelector(selectTheme);
    const { page, maxPages } = useSelector(selectPagination);
    const color = theme === 'dark' ? '#FFF' : '#000';
    return (
        <div className={styles.main}>
            <button className={clsx(styles.btn, styles.mr_5)} disabled={page === 1} onClick={decrementPage}>
                <ChevronLeft color={page === 1 ? '#CCC' : color} />
            </button>
            {page - 1 > 0 && (
                <button className={clsx(styles.btn, styles.mr_5)} onClick={decrementPage}>
                    {page - 1}
                </button>
            )}
            <div className={clsx(styles.page, styles.mr_5)}>{page}</div>
            {maxPages >= page + 1 && (
                <button className={clsx(styles.btn, styles.mr_5)} onClick={increasePage}>
                    {page + 1}
                </button>
            )}
            <button className={styles.btn} disabled={page === maxPages} onClick={increasePage}>
                <ChevronRight color={page === maxPages ? '#CCC' : color} />
            </button>
        </div>
    );
};

export default PaginationComponent;
