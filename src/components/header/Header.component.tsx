import cart from '@/assets/icons/cart.svg';
import logOut from '@/assets/icons/log_Out.svg';
import logo from '@/assets/icons/logo.svg';
import burger from '@/assets/icons/menu_Duo_LG.svg';
import moon from '@/assets/icons/moon.svg';
import sun from '@/assets/icons/sun.svg';
import userAddIcon from '@/assets/icons/user_Add.svg';
import Button from '@/UI/button/Button.components.tsx';

import styles from './header.module.css';

const Header = () => (
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
                    <a className={`${styles.nav__link} ${styles.nav__link__active}`} href={' '}>
                        About
                    </a>
                </li>
                <li className={styles.nav__item}>
                    <a className={styles.nav__link} href={' '}>
                        Products
                    </a>
                </li>
            </ul>
        </nav>
        <div className={styles.buttons}>
            <img className={styles.cart} src={cart} alt="cart" />
            <Button className={styles.mr_10} name="Login" backgroundColor="#333" icon={logOut} />
            <Button name="Sign up" backgroundColor="#EF4934" icon={userAddIcon} />
        </div>
        <div className={styles.cart_and_burger}>
            <img className={styles.cart} src={cart} alt="cart" />
            <img className={styles.burger} src={burger} alt="burger" />
        </div>
    </header>
);
export default Header;
