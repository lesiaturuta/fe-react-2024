import { NavLink } from 'react-router-dom';

import { clsx } from 'clsx';

import cart from '@/assets/icons/cart.svg';
import IconCart from '@/assets/icons/IconCart.component.tsx';
import logOut from '@/assets/icons/log_Out.svg';
import logo from '@/assets/icons/logo.svg';
import burger from '@/assets/icons/menu_Duo_LG.svg';
import ThemesComponent from '@/components/themes/Themes.component.tsx';
import Button from '@/UI/button/Button.components.tsx';

import styles1 from '../productCard/productCard.module.css';
import styles from './header.module.css';

const Header = ({ amountCart, theme, changeTheme }: { amountCart: number; theme: string; changeTheme: (name: string) => void }) => (
    <header className={styles.header}>
        <img className={styles.mr_49} src={logo} alt="logo" />
        <ThemesComponent theme={theme} changeTheme={changeTheme} />
        <nav className={styles.nav}>
            <ul className={styles.nav__items}>
                <li className={clsx(styles.nav__item, styles.mr_49)}>
                    <NavLink to="/" end className={({ isActive }) => clsx(styles.nav__link, { [styles.nav__link__active]: isActive })}>
                        About
                    </NavLink>
                </li>
                <li className={styles.nav__item}>
                    <NavLink to="/products" className={({ isActive }) => clsx(styles.nav__link, { [styles.nav__link__active]: isActive })}>
                        Products
                    </NavLink>
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
            <Button name="Sign up" backgroundColor="#EF4934" icon={cart} />
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
export default Header;
