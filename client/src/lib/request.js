import axios from 'axios';
import Cookies from 'universal-cookie';

const CONFIG = {
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        Accept: 'application/json;version=0.0',
        'Content-Type': 'application/json',
    },
};

const instance = axios.create({ ...CONFIG });

instance.interceptors.request.use((config) => {
    const cookies = new Cookies();
    const token = cookies.get('koa.sess');

    return {
        ...config,
        withCredentials: true,
        headers: {
            Authorization: `Token ${token}`,
        },
    };
});

const API = {
    get: instance.get,
    post: instance.post,
    delete: instance.delete,
    put: instance.put,
};

export default API;
