import { createAsyncThunk } from "@reduxjs/toolkit";

export const redditFetch = createAsyncThunk(
    'reddit/fetchPosts',
    async (subreddit) => {
        try {
            const response = await fetch(`https://www.reddit.com/r/pics/${subreddit}.json`);
            if(!response) {
                throw new Error('Failed to fetch posts')
            }
            const json = await response.json();
            return json.data.children.map((post) => post.data);
        } catch(e) {
            throw new Error('Failed to fetch posts');
        }       
    }
);

export const fetchSubreddits = createAsyncThunk(
    'reddit/subreddits',
    async () => {
        try {
            const response = await fetch(`https://www.reddit.com/subreddits.json`);
            if (!response.ok) {
                throw new Error('Failed to fetch subreddits');
            }
            const json = await response.json();
            return json.data.children.map((subreddit) => subreddit.data);
        } catch (error) {
            throw new Error('Failed to fetch subreddits');
        }
    }
);