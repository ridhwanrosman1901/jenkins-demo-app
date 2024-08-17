import React from 'react';
import { Link } from 'react-router-dom';
import ('./App.css')

function App() {
  return (
    <div className="App">
      <h1>Welcome to Jenkins Demo App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/form">Submit Data</Link>
          </li>
          <li>
            <Link to="/data">View Data</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
