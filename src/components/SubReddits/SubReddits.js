import React, { useEffect } from 'react';
import './SubReddits.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubreddits } from '../Reddit/Reddit';

export function SubReddits() {
    const dispatch = useDispatch();
    const subreddits = useSelector((state) => state.subreddits.subreddits);
    const isLoading = useSelector((state) => state.subreddits.isLoading);

    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='subReddits'>
            <h2>Subreddits</h2>           
            <ul className="subreddits-list">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className='sub-pages'
                    >
                        <button
                            className='subreddit-button'
                            type="button"
                            //onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                            <img
                                src={subreddit.icon_img || `https://api.adorable.io/avatars/25/${subreddit.display_name}`} 
                                className="subreddit-icon"
                                style={{ border: `3px solid ${subreddit.primary_color}` }}
                            />
                            <span className='icon-name'>{subreddit.display_name}</span>
                        </button>
                    </li>
                ))}
            </ul>   
        </div>
    );
}
