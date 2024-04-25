import styles from './button.module.css';

interface ButtonInterface {
    name?: string;
    backgroundColor?: string;
    textColor?: string;
    icon?: string;
    className?: string;
}

const Button = ({ name = '', backgroundColor = '#111', textColor = '#FFF', icon, className }: ButtonInterface) => (
    <button className={`${styles.button} ${className}`} type="reset" style={{ background: backgroundColor, color: textColor }}>
        {icon && <img className={styles.icon} src={icon} alt="Icon" />} {}
        {name}
    </button>
);

export default Button;
