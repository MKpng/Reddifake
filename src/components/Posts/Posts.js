import React, { useState } from 'react';
import './Posts.css';
import { useSelector } from 'react-redux';
import { selectPost, selectImg } from './postSlice';
import { selectComment } from '../Comments/commentsSlice';

export function Posts() {
    const [clicks, setClicks] = useState({});
    const posts = useSelector(selectPost);
    const images = useSelector(selectImg);
    const comments = useSelector(selectComment);
    
    const handleClick = (index) => {
        setClicks({
            ...clicks,
            [index]: !clicks[index]
        });
    }

    return (
        <div>
            {posts.map((post, index) => (
                <div className={`posts ${clicks[index] ? 'showComments' : ''}`} key={index}>
                    <div className='post'>
                        <h2 className='post-title'>{post}</h2>
                        <div className='img-div'>
                            <img src={images[index]} alt={post} />
                        </div>
                        <button className='comment' onClick={() => handleClick(index)}>
                            <i className="fas fa-comment"></i>
                        </button>
                    </div>
                    {clicks[index] && (
                        <div className='com-div'>
                            {comments.map((comment, commentIndex) => (
                                <div className='comments-section' key={commentIndex}>{comment}</div>
                            ))}
                        </div>
                    )}                    
                </div>
            ))}
        </div>
    );
}
