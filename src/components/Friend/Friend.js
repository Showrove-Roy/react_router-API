import React from "react";
import { Link } from "react-router-dom";
import './Friend.css';

const Friend = ({ friend }) => {
  const { id, name, username, email } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
          <p>{email}</p>
          <p>UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
    </div>
  );
};

export default Friend;
