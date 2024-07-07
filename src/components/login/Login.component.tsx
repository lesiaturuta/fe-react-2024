import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clsx } from 'clsx';
import validator from 'validator';

import ic_hide from '@/assets/icons/hide.svg';
import ic_show from '@/assets/icons/show.svg';
import { selectTheme } from '@/store/theme/selectors';
import { fetchTokens } from '@/utils/authUser';

import styles from './login.module.css';

const Login = () => {
    const theme = useSelector(selectTheme);
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const inputReference = useRef<HTMLInputElement>(null);

    const changeInputType = () => {
        setIsShow(!isShow);
        if (inputReference.current) {
            inputReference.current.type = isShow ? 'password' : 'text';
        }
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            getSubmit();
        }
    };

    const validateForm = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validator.isEmail(email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getSubmit = () => {
        fetchTokens(email, password)
            .then(() => navigate('/'))
            .catch((error) => {
                console.error('Ошибка авторизации:', error);
                setEmail('');
                setPassword('');
                alert('Error authorization user');
            });
    };

    return (
        <div
            className={clsx(styles.main, {
                light_theme: theme === 'light',
                dark_theme: theme === 'dark',
            })}
        >
            <div className={styles.container}>
                <div className={styles.about}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.title}>Login</div>

                        <div className={styles.inputs}>
                            <input
                                className={styles.input_login}
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                            <div className={styles.input_pass_container}>
                                <input
                                    className={styles.input_pass}
                                    ref={inputReference}
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    required
                                />
                                {errors.password && <span className={styles.c}>{errors.password}</span>}
                                <img
                                    onClick={changeInputType}
                                    className={styles.ic_show}
                                    src={isShow ? ic_hide : ic_show}
                                    alt="Show/Hide Icon"
                                />
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button type="submit" className={styles.btn_login}>
                                Login
                            </button>
                            <button className={styles.btn_sign_up}>Sign up</button>
                        </div>
                    </form>
                </div>
                <div className={styles.image}></div>
            </div>
        </div>
    );
};

export default Login;
