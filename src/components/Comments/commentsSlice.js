import { createSlice, createSelector } from "@reduxjs/toolkit";
import React from "react";

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: [
        'hrfevuionfvuerfibnvuirefnbviuerbvuibnertiver',
        'ijgerfnbvuinberuvnerivnierunviuoernvnerver',
        'gnerviuoeroiregjvfnmeorifjnmgv',
    ],
    reducers: {
        addComment: (state, action) => {
            state = action.payload;
        }
    },
});

export default commentsSlice.reducer;
export const selectComment = state => state.comments;
export const { addComment } = commentsSlice.actions;