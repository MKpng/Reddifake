import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        title: ['The Quick Brown Fox',
                'Jumped Over the Lazy Dog',
                'Lorem Ipsum Dolor',
                'Sit Amet Consectetur',
                'Adipiscing Elit Sed',
                ],
        image: [
            'IMG 1',
            'IMG 2', 
            'IMG 5',
            'IMG 4',
            'IMG 3'
        ],
    },
    reducers: {
        addTitle: (state,action) => {
            state.title = action.payload;
        },
        addImg: (state, action) => {
            state.img = action.payload;
        }
    }
});

export default postSlice.reducer;
export const selectPost = state => state.post.title;
export const selectImg = state => state.post.image;
export const { addTitle, addImg } = postSlice.actions;