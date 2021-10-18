import API from '@/lib/request';

const USERS_URLS = {
    LOGIN: `/users/login`,
};

export const postLogIn = (payload) => {
    return API.post(USERS_URLS.LOGIN, payload);
};
