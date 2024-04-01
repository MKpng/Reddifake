import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postReducer from "./components/Posts/postSlice";
import commentsReducer from "./components/Comments/commentsSlice";
import SubRedditsReducer from "./components/SubReddits/SubRedditsSlice";

const rootReducer = combineReducers({
    subreddits: SubRedditsReducer,
    post: postReducer,
    comments: commentsReducer
})

export const store = configureStore({
    reducer: rootReducer,
});
