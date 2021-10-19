import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@/modules/user/UserSlice';
import passwordSlice from '@/modules/password/PasswordSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        password: passwordSlice,
    },
});

export default store;
