import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Here is all posts</h1>
      <div className="postContainer">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
