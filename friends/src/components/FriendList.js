import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

const FriendList = () => {

    const [ friends, setFriends ] = useState([])
    const [ update, setUpdate ] = useState();

    useEffect(() => {
        
        axiosWithAuth().get('api/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [update])
    
    return(
        <div>
            <h2>Friend List</h2>
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            ))}
            <AddFriend setUpdate={setUpdate}/>
        </div>
    );
}

export default FriendList;