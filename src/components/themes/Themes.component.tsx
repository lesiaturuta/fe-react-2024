import { useSelector } from 'react-redux';

import IconMoon from '@/assets/icons/IconMoon.component.tsx';
import IconSun from '@/assets/icons/IconSun.component.tsx';
import stylesHeader from '@/components/header/header.module.css';
import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './themes.module.css';

const ThemesComponent = ({ changeTheme }: { changeTheme: (name: string) => void }) => {
    const theme = useSelector(selectTheme);
    return (
        <div className="main">
            <div className={stylesHeader.themes}>
                <button onClick={() => changeTheme('light')} className={styles.theme_btn}>
                    <IconSun color={theme === 'light' ? '#fff' : '#656565'} />
                </button>
                <div className={stylesHeader.verticalLine}></div>
                <button onClick={() => changeTheme('dark')} className={styles.theme_btn}>
                    <IconMoon color={theme === 'dark' ? '#fff' : '#656565'} />
                </button>
            </div>
        </div>
    );
};
export default ThemesComponent;
