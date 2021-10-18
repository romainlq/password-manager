import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postLogIn } from './UserApi';

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
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loading = false;
                error: 'error'; // TODO: handle error properly
            });
    },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
