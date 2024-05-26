import { useState } from 'react';

import { clsx } from 'clsx';

import IconCart from '@/assets/icons/IconCart.component.tsx';
import logOut from '@/assets/icons/log_Out.svg';
import logo from '@/assets/icons/logo.svg';
import burger from '@/assets/icons/menu_Duo_LG.svg';
import userAddIcon from '@/assets/icons/user_Add.svg';
import ThemesComponent from '@/components/themes/Themes.component.tsx';
import Button from '@/UI/button/Button.components.tsx';

import styles1 from '../productCard/productCard.module.css';
import styles from './header.module.css';

const Header = ({
    amountCart,
    toggleCurrentPage,
    theme,
    changeTheme,
}: {
    amountCart: number;
    toggleCurrentPage: (products: string) => void;
    theme: string;
    changeTheme: (name: string) => void;
}) => {
    const [activeNavItem, setActiveNavItem] = useState<string>('About');

    const handleNavClick = (navItem: string) => {
        toggleCurrentPage(navItem);
        setActiveNavItem(navItem);
    };

    return (
        <header className={styles.header}>
            <img className={styles.mr_49} src={logo} alt="logo" />
            <ThemesComponent theme={theme} changeTheme={changeTheme} />
            <nav className={styles.nav}>
                <ul className={styles.nav__items}>
                    <li className={clsx(styles.nav__item, styles.mr_49)}>
                        <button
                            className={clsx({
                                [styles.nav__link]: true,
                                [styles.nav__link__active]: activeNavItem === 'About',
                            })}
                            onClick={() => handleNavClick('About')}
                        >
                            About
                        </button>
                    </li>
                    <li className={styles.nav__item}>
                        <button
                            type="button"
                            className={clsx({
                                [styles.nav__link]: true,
                                [styles.nav__link__active]: activeNavItem === 'Products',
                            })}
                            onClick={() => handleNavClick('Products')}
                        >
                            Products
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <div className={styles.cart}>
                    <IconCart />
                    {amountCart > 0 && (
                        <div className={styles1.select_cart}>
                            <span className={styles.save_cart}>{amountCart}</span>
                        </div>
                    )}
                </div>
                <Button className={styles.mr_10} name="Login" backgroundColor="#333" icon={logOut} />
                <Button name="Sign up" backgroundColor="#EF4934" icon={userAddIcon} />
            </div>
            <div className={styles.cart_and_burger}>
                <div className={styles.cart}>
                    <IconCart />
                    {amountCart > 0 && (
                        <div className={styles1.select_cart}>
                            <span className={styles.save_cart}>{amountCart}</span>
                        </div>
                    )}
                </div>
                <img className={styles.burger} src={burger} alt="burger" />
            </div>
        </header>
    );
};
export default Header;
