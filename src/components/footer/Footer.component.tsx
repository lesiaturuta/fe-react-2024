import fb from '@/assets/icons/socialMedia/fb.svg';
import instagram from '@/assets/icons/socialMedia/insta.svg';
import linkedin from '@/assets/icons/socialMedia/linkedin.svg';
import FooterIcon from '@/components/footerIcon/FooterIcon.component.tsx';
import { MY_NAME, URL_FB, URL_INSTAGRAM, URL_LINK_IN, URL_PROJECT } from '@/config/config.ts';

import styles from './footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.horizontalLine}></div>
        <div className={styles.content}>
            <FooterIcon
                className={styles.social_items}
                media={[
                    { icon: fb, url: URL_FB },
                    { icon: instagram, url: URL_INSTAGRAM },
                    { icon: linkedin, url: URL_LINK_IN },
                ]}
            />
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
