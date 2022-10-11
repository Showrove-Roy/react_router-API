import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate(`/post/${id}`);
    };
    return (
        <div className='post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Go Details</button></Link>
            <button onClick={handelNavigate}>Show Details</button>
        </div>
    );
};

export default Post;