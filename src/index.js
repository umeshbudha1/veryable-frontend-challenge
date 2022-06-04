import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Users from './users/User';

const App = () => <div className="App">
  <Users />
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
