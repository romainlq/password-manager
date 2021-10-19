import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postLogIn, getUser } from './UserApi';

const initialState = {
    username: '',
    authenticated: false,
    loading: false,
    error: '',
    token: '',
};

export const logIn = createAsyncThunk('user/logIn', async (userInfos) => {
    const payload = {
        username: userInfos.username,
        password: userInfos.password,
    };
    const response = await postLogIn(payload);
    // console.log(response.data);
    return response.data;
});

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await getUser();
    console.log(response);
    return response.data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = '';
            state.authenticated = false;
            state.username = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.pending, (state) => {
                state.loading = true;
                state.token = '';
                state.authenticated = false;
            })
            .addCase(logIn.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.loading = false;
                state.authenticated = true;
                state.token = user.token;
                state.username = user.username;
                localStorage.setItem('token', user.token);
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loading = false;
                state.error = 'error'; // TODO: handle error properly
            })
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                console.log(payload);
                // const { user } = payload;
                state.loading = false;
                // state.authenticated = true;
                // state.token = user.token;
                // state.username = user.username;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = 'error'; // TODO: handle error properly
            });
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
