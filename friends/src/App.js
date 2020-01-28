import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
//import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

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
        <Switch>
          <PrivateRoute path="/friendlist" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
