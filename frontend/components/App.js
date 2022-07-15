import React from "react";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      message: ""
    };
  }
  componentDidMount() {
    fetch(URL)
      .then((res) => res.json())
      .then((todos) => this.setState({ ...this.state, todos: todos.data, message: todos.message}));
  }
  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <ol>
          {this.state.todos.map((todos) => (
            <li key={todos.id}>{todos.name}</li>
          ))}
        </ol>
      </>
    );
  }
}
