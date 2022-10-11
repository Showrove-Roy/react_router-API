import React from 'react';
import './post.css';

const Post = ({ post }) => {
    const {title,body} = post;
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;