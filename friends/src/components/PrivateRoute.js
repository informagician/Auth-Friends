import React from 'react';
import FriendList from './FriendList';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    if(localStorage.getItem('token')){
        return <Route component={FriendList} />
    } else {
        return <Redirect to="/login" />
    }
}

export default PrivateRoute;