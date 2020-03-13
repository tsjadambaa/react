import React from "react";

import { Post } from "../post";

import "./style.css";
export const PostList = props => (
  <div className="post-list">
    {props.posts.map(el => (
      <Post key={el.id} post={el} />
    ))}
  </div>
);
