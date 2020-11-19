import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      list: [],
    }

  }

  handleChange(val) {
    this.setState({
      userInput: val,
    })
  }

  updateList(val) {
    this.setState({
      list: [...this.state.list, val],
      userInput: '',
    })

  }


  render() {
    let displayedList = this.state.list.map((el, i, arr) => {
      return <Todo key={i} word={el} />
    })
    return (
      <div className="App" >
        <h1>My to-do list:</h1>
        <input
          value={this.state.userInput}
          placeholder="Log a task"
          onChange={(e) => this.handleChange(e.target.value)} />
        <button onClick={() => this.updateList(this.state.userInput)}>add</button>
        <div>{displayedList}</div>
      </div>
    )
  }



}

export default App;
