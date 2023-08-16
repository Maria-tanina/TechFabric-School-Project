import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    loading: false,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setUsers,
    setLoading
} = usersSlice.actions;
export default usersSlice.reducer;
