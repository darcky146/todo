import React, { Component } from 'react';
import './App.css';
import TodosContainer from './components/TodosContainer'

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="header">
            <h1>Render new header</h1>
          </div>
          <TodosContainer />
        </div>
        <div className="custom"></div>
    );
  }
}

export default App;