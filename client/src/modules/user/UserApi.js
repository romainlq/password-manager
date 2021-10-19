import API from '@/lib/request';

const USERS_URLS = {
    LOGIN: `/users/login`,
    USER: '/user',
};

export const postLogIn = (payload) => {
    return API.post(USERS_URLS.LOGIN, payload);
};

export const getUser = () => {
    return API.get(USERS_URLS.USER);
};
