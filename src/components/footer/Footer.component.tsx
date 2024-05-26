import { clsx } from 'clsx';

import fb from '@/assets/icons/socialMedia/fb.svg';
import instagram from '@/assets/icons/socialMedia/insta.svg';
import linkedin from '@/assets/icons/socialMedia/linkedin.svg';
import FooterIcons from '@/components/footerIcons/FooterIcons.component.tsx';
import { MY_NAME, URL_FB, URL_INSTAGRAM, URL_LINK_IN, URL_PROJECT } from '@/config/config.ts';

import styles from './footer.module.css';

const socialMedia = [
    { icon: fb, url: URL_FB },
    { icon: instagram, url: URL_INSTAGRAM },
    { icon: linkedin, url: URL_LINK_IN },
];

const Footer = ({ theme }: { theme: string }) => (
    <footer
        className={clsx(styles.footer, {
            light_theme: theme === 'light',
            dark_theme: theme === 'dark',
        })}
    >
        <div className={styles.horizontalLine}></div>
        <div className={styles.content}>
            <FooterIcons className={styles.social_items} media={socialMedia} />
            <p className={styles.description}>
                Made with 💗 on course{' '}
                <a href={URL_PROJECT} className={styles.link}>
                    I&apos;Intro to ReactI&apos; from Masters Academy in {new Date().getFullYear()}
                </a>
                , by {MY_NAME}
            </p>
        </div>
    </footer>
);
export default Footer;
