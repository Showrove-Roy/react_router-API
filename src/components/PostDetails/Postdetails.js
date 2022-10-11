import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const postDetails = useLoaderData();
    const {userId, title, body } = postDetails;
    const authorID = useNavigate();
    const handel = () => {
        authorID(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Here is single post</h1>
            <h1>{title}</h1>
            <p>{body}</p>
            <button onClick={handel}>Author</button>
            <Link to={`/friend/${userId}`}><button>author</button></Link>
        </div>
    );
};

export default Postdetails;