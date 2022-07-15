import React from "react";

const URL = "http://localhost:9000/api/todos";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(todos=> this.setState({...this.state, todos: todos.data}))
  }
  render() {
    return (<>
         {this.state.todos.map(todos => <p key={todos.id}>{todos.name}</p>)}
    </>);
  }
}
