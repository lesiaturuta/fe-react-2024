import type ButtonInterface from '@/interface/button.ts';

import styles from './button.module.css';

const Button = ({
    name = '',
    backgroundColor = '#111',
    textColor = '#FFF',
    icon,
    className,
    widthIcon = 24,
    heightIcon = 24,
    onClick,
}: ButtonInterface) => (
    <button
        className={`${styles.button} ${className}`}
        type="reset"
        style={{ background: backgroundColor, color: textColor }}
        onClick={onClick}
    >
        {icon && <img className={styles.icon} width={widthIcon} height={heightIcon} src={icon} alt="Icon" />}
        {name}
    </button>
);

export default Button;
