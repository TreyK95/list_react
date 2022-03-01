import React, { Component } from "react";
import "./App.css";

class App extends Component {
  //state = a plain JS object, in this case an array of objects
  state = {
    todos: [
      { id: 1, name: "Learn Rails", complete: true },
      { id: 2, name: "Learn React", complete: false },
      { id: 3, name: "Graduate DPL", complete: false },
      { id: 4, name: "Get a job", complete: false },
    ],
  };
  //a function we create that lets us loop through the todos inside state. We can then return JSX for each todo
  renderTodos = () => {
    const { todos } = this.state;
    //key is a special attribute that is needed by React each elements needs a key that is unique ot that loop
    return todos.map((todo) => <li key={todo.id}>{todo.name}</li>);
  };

  render() {
    return (
      <div>
        <ul>{this.renderTodos()}</ul>
      </div>
    );
  }
}

export default App;
