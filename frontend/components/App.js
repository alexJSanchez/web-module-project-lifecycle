import React from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
      message: "",
    };
  }
  //handlers
  handleAdd = (e) => {
    e.preventDefault();
    const todo = { id: Date.now(), name: this.state.newTodo, completed: false };
    this.setState({ ...this.state, todos: [...this.state.todos, todo]});
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ ...this.state, newTodo: e.target.value });
  };

  getTodos = () => {
    axios
      .get(URL)
      .then((res) => res.data)
      .then((todos) =>
        this.setState({
          ...this.state,
          todos: todos.data,
          message: todos.message,
        })
      )
      .catch((err) => console.log("oh no bro", err));
  };
  componentDidMount() {
    this.getTodos();
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
        <form>
          <input onChange={this.handleChange} />
          <button onClick={this.handleAdd}>Add</button>
        </form>
        <button>Clear</button>
      </>
    );
  }
}
