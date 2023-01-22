import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <>
      <h1>Here are {posts.length} Posts</h1>
      <div className="container">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export default Posts;
