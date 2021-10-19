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
    const jwt = localStorage.getItem('token'); // TODO: ???

    return {
        ...config,
        withCredentials: true,
        headers: {
            Authorization: `Token ${jwt}`,
        },
    };
});

const API = {
    get: instance.get,
    post: instance.post,
};

export default API;
