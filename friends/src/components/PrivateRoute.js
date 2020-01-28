import React from 'react';
import FriendList from './FriendList';
import Login from './Login';
import { Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    if(localStorage.getItem('token')){
        return <Route component={FriendList} />
    } else {
        return <Route component={Login} />
    }
}

export default PrivateRoute;