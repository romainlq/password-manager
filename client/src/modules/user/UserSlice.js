import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postLogIn, getUser } from './UserApi';

const initialState = {
    username: '',
    authenticated: false,
    loading: false,
};

export const logIn = createAsyncThunk('user/logIn', async (userInfos) => {
    const payload = {
        username: userInfos.username,
        password: userInfos.password,
    };
    const response = await postLogIn(payload);
    return response.data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await getUser();
    return response.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.authenticated = false;
            state.username = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.authenticated = false;
                state.error = '';
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.loading = false;
                state.authenticated = true;
                state.username = user.username;
                localStorage.setItem('token', user.token);
            })
            .addCase(logIn.rejected, (state) => {
                state.loading = false;
                state.error =
                    'An error has occured. Check that you used the correct username and password.';
            })
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
            });
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
