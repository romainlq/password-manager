import API from '@/lib/request';

const PASSWORDS_URLS = {
    BASE: `/passwords`,
};

export const postPassword = (payload) => {
    return API.post(PASSWORDS_URLS.BASE, payload);
};

export const putPassword = (payload) => {
    return API.put(PASSWORDS_URLS.BASE, payload);
};
export const getPasswords = () => {
    return API.get(PASSWORDS_URLS.BASE);
};
export const deletePassword = (payload) => {
    return API.put(PASSWORDS_URLS.BASE, payload);
};
