import { createSlice } from "@reduxjs/toolkit";
import { fetchSubreddits } from "../Reddit/Reddit";

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.subreddits = action.payload;
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default subredditsSlice.reducer;
