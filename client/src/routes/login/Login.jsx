import { Center } from '@chakra-ui/react';
import LoginForm from '@/components/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'wouter';
import { PATHS } from '@/routes';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { logIn } from '@/modules/user/UserSlice';

const Login = () => {
    const authenticated = useSelector((state) => state.user.authenticated);
    const loading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();


    const [_, setLocation] = useLocation();

    useEffect(() => {
        if (authenticated && !loading) {
            setLocation(PATHS.HOME);
        }
    }, [authenticated, loading]);

    const submitLogin = async (username, password) => {
        dispatch(logIn({ username, password }))
            .then(unwrapResult)
            .then(() => setLocation(PATHS.HOME));
    };

    return (
        <Center marginLeft="auto" marginRight="auto" height="100%">
            <LoginForm submitLogin={submitLogin}/>
        </Center>
    );
};

export default Login;
