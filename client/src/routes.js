import Home from '@/routes/home/Home';
import Login from '@/routes/login/Login';

export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
};

export const ROUTES = {
    HOME: {
        path: PATHS.HOME,
        component: Home,
    },
    LOGIN: {
        path: PATHS.LOGIN,
        component: Login,
    },
};
