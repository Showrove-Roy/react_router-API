import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetails = useLoaderData();
    const {name, email, phone , website , username} = friendDetails;
    return (
        <div>
            <h1>All to know about this friend</h1>

            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>User Name: {username}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default FriendDetails;