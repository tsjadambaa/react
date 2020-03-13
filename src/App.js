import React, { Component } from "react";

import { PostList } from "./components/post-list";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(rejected => {
        console.log(rejected);
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}
