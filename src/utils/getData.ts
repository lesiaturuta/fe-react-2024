import axios from 'axios';

const postData = async (url: string, method: string = 'GET') => {
    try {
        const response = await axios(url, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error occurred during HTTP request:', error);
        throw error;
    }
};

export default postData;
