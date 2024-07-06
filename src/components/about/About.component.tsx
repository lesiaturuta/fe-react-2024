import { useSelector } from 'react-redux';

import { clsx } from 'clsx';

import { selectTheme } from '@/store/theme/selectors.ts';

import styles from './about.module.css';

const About = () => {
    const theme = useSelector(selectTheme);
    const name = 'Lesia';
    return (
        <main
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.container}>
                <div className={styles.about}>
                    <h1 className={clsx(styles.about__title, styles.mt_60)}>About me</h1>
                    <p className={clsx(styles.about__text, styles.mt_60)}>
                        Hi! My name is {name} and I&apos;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                        like React, HTML, CSS, JavaScript and Git version control system.
                    </p>
                    <p className={clsx(styles.about__text, styles.mt_30)}>
                        {' '}
                        This page was developed during the course &apos;Intro to React&apos; from Masters Academy in 2024.
                    </p>
                    <p className={clsx(styles.about__text, styles.mt_30)}>
                        This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my
                        own small project for the portfolio.
                    </p>
                    <p className={clsx(styles.about__text, styles.mt_30)}>
                        You can contact me via [social network name] and check out my GitHub.
                    </p>
                </div>
                <div className={styles.image}></div>
            </div>
        </main>
    );
};

export default About;
