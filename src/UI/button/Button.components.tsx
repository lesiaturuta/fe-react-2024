import type ButtonInterface from '@/interface/button.ts';

import styles from './button.module.css';

const Button = ({ name = '', backgroundColor = '#111', textColor = '#FFF', icon, className }: ButtonInterface) => (
    <button className={`${styles.button} ${className}`} type="reset" style={{ background: backgroundColor, color: textColor }}>
        {icon && <img className={styles.icon} src={icon} alt="Icon" />} {}
        {name}
    </button>
);

export default Button;
