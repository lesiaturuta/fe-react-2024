import { useState } from 'react';

import cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/log_Out.svg';
import logo from '@/assets/icons/logo.svg';
import burger from '@/assets/icons/menu_Duo_LG.svg';
import moon from '@/assets/icons/moon.svg';
import sun from '@/assets/icons/sun.svg';
import userAddIcon from '@/assets/icons/user_Add.svg';
import Button from '@/UI/button/Button.components.tsx';

import styles1 from '../productCard/productCard.module.css';
import styles from './header.module.css';

const Header = ({ amountCart, nav }: { amountCart: number; nav: (products: string) => void }) => {
    const [activeNavItem, setActiveNavItem] = useState<string>('About');

    const handleNavClick = (navItem: string) => {
        nav(navItem);
        setActiveNavItem(navItem);
    };

    return (
        <header className={styles.header}>
            <img className={styles.mr_49} src={logo} alt="logo" />
            <div className={styles.themes}>
                <img src={sun} alt="sun" />
                <div className={styles.verticalLine}></div>
                <img src={moon} alt="moon" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__items}>
                    <li className={`${styles.nav__item} ${styles.mr_49}`}>
                        <a
                            className={`${styles.nav__link} ${activeNavItem === 'About' && styles.nav__link__active}`}
                            href="#"
                            onClick={() => handleNavClick('About')}
                            role="button"
                        >
                            About
                        </a>
                    </li>
                    <li className={styles.nav__item}>
                        <a
                            className={`${styles.nav__link} ${activeNavItem === 'Products' && styles.nav__link__active}`}
                            href="#"
                            onClick={() => handleNavClick('Products')}
                            role="button"
                        >
                            Products
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <div className={styles.cart}>
                    <div
                        className={styles.cart_button}
                        style={{
                            backgroundImage: `url(${cart})`,
                        }}
                    ></div>
                    {amountCart && (
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
                    <div
                        className={styles.cart_button}
                        style={{
                            backgroundImage: `url(${cart})`,
                        }}
                    ></div>
                    {amountCart && (
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
