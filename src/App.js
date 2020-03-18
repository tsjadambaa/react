import React, { Component } from "react";

import { PostList } from "./components/post-list";
import { SearchBox } from "./components/search-box";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      searchField: ""
    };
  }
  onSearchChanged = event => {
    this.setState({ searchField: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(rejected => {
        console.log(rejected);
      });
  }
  render() {
    const { posts, searchField } = this.state;
    const filterPosts = posts.filter(el =>
      el.title.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Posts</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <PostList posts={filterPosts} />
      </div>
    );
  }
}
