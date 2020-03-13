import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }))
      .catch(rejected => {
        console.log(rejected);
      });
    /*fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ robots: json }));*/
  }
  render() {
    console.log(this.state.robots);
    return (
      <div className="App">
        <h1>Hello</h1>
        {this.state.robots.map(el => (
          <div>{el.id + "." + el.title}</div>
        ))}
      </div>
    );
  }
}
