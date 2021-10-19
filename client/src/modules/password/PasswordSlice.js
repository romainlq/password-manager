import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
    postPassword,
    getPasswords,
    putPassword,
    deletePassword,
} from './PasswordApi';

const initialState = {
    passwords: [],
    loading: false,
};

export const createPassword = createAsyncThunk(
    'password/createPassword',
    async (newPassword) => {
        const response = await postPassword(newPassword);
        return response.data;
    }
);

export const fetchPasswords = createAsyncThunk(
    'password/fetchPasswords',
    async () => {
        const response = await getPasswords();
        return response.data;
    }
);

export const updatePassword = createAsyncThunk(
    'password/updatePassword',
    async (newPassword) => {
        const response = await putPassword(newPassword);
        return response.data;
    }
);

export const removePassword = createAsyncThunk(
    'password/removePassword',
    async (passwordId) => {
        const response = await deletePassword(passwordId);
        return response.data;
    }
);

export const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        resetPasswords: (state) => {
            state.passwords = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPassword.fulfilled, (state, { payload }) => {
                state.loading = false;
            })
            .addCase(createPassword.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchPasswords.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPasswords.fulfilled, (state, { payload }) => {
                const { passwords } = payload;
                state.loading = false;
                state.passwords = [...passwords];
            })
            .addCase(fetchPasswords.rejected, (state) => {
                state.loading = false;
            })
            .addCase(removePassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(removePassword.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(removePassword.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { resetPasswords } = passwordSlice.actions;

export default passwordSlice.reducer;
