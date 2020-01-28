import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
//import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <NavLink to="/login" activeClassName="selected">Login</NavLink>
          <NavLink to="/friendlist" activeClassName="selected">Friend List</NavLink>
        </nav>
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
