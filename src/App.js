import React, { Component } from 'react';
import Users from './users.jsom';

class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Hello React</h1>
          {Users.map(user => (
        <li key={user.id}>{user.firstName}</li>
      ))}
        </div>
      )
    }
  }

export default App