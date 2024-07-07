import axios from 'axios';
import Cookies from 'js-cookie';

import type { AccessTokenResponse, TokensResponse } from '@/interface';

let timer: ReturnType<typeof setInterval>;

// save cookies
export const setCookie = (name: string, value: string, days?: number): void => {
    if (days) {
        Cookies.set(name, value, { expires: days, path: '/' });
    } else {
        Cookies.set(name, value, { path: '/' });
    }
};

// get cookies
export const getCookie = (name: string): string | undefined => Cookies.get(name);

// clean all cookies
export const eraseAllCookies = (): void => {
    const cookies = Cookies.get();
    for (const cookie in cookies) {
        if (cookies.hasOwnProperty(cookie)) {
            Cookies.remove(cookie);
            clearInterval(timer);
        }
    }
};

export const fetchTokens = async (email: string, password: string): Promise<void> => {
    try {
        const response = await axios.post<TokensResponse>(
            'https://ma-backend-api.mocintra.com/api/v1/auth/login',
            {
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
        const data = response.data;
        if (data.access_token && data.refresh_token) {
            setCookie('access_token', data.access_token, 1);
            setCookie('refresh_token', data.refresh_token, 7);
            if (timer) clearInterval(timer);
            timer = setInterval(() => {
                try {
                    refreshAccessToken();
                } catch (error) {
                    console.error('Ошибка при обновлении токена:', error);
                }
            }, 2000);
        }
    } catch (error) {
        console.error('Error authorization user', error);
        eraseAllCookies();
        clearInterval(timer);
        throw error;
    }
};

export const refreshAccessToken = async (): Promise<void> => {
    const refreshToken = getCookie('refresh_token');
    try {
        const response = await axios.post<AccessTokenResponse>(
            'https://ma-backend-api.mocintra.com/api/v1/auth/refresh-token',
            {
                refreshToken,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        const data = response.data;
        if (data.access_token && data.refresh_token) {
            setCookie('access_token', data.access_token, 1);
            setCookie('refresh_token', data.refresh_token, 7);
        }
    } catch (error) {
        console.error('Error update access_token:', error);
        eraseAllCookies();
        clearInterval(timer);
        throw error;
    }
};

export const verifyUser = async (): Promise<void> => {
    try {
        const response = await axios.get<AccessTokenResponse>('https://ma-backend-api.mocintra.com/api/v1/auth/verify', {
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${getCookie('access_token')}`,
            },
        });

        const data = response.data;
        if (data.access_token && data.refresh_token) {
            setCookie('access_token', data.access_token, 1);
            setCookie('refresh_token', data.refresh_token, 7);
        }
    } catch (error) {
        console.error('Error update access_token:', error);
        eraseAllCookies();
        clearInterval(timer);
        throw error;
    }
};
