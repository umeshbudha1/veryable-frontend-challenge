import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserAccordion from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAccordion />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))