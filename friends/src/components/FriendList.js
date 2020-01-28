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
        <div className="container">
            <h1>Friend List</h1>
            <main>
                <div className="friends">
                    {friends.map(friend => (
                        <div key={friend.id}>
                            <p className="name">{friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                    ))}
                </div>
                <AddFriend setUpdate={setUpdate}/>
            </main>
        </div>
    );
}

export default FriendList;