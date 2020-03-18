import React from "react";

import "./style.css";

export const Post = props => (
  <div className="post-container">
    <h2>{props.post.id}</h2>
    <p>{props.post.title}</p>
  </div>
);
