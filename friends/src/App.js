import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">

      <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendlist">Friend List</Link>
        </li>
      </ul>
      </Router>
        <Login />
    </div>
  );
}

export default App;
