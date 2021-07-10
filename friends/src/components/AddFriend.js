import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const AddFriend = props => {

    const [ newFriend, setNewFriend ] = useState({});

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            id: Date.now(),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('api/friends', newFriend)
        .then(res => props.setUpdate(res))
        .catch(err => console.log(err))
    }
    console.log(newFriend)
    return(
        <div className="add">
            <h2>Add Friends</h2>
            <label>Name: <input type="text" name="name" onChange={handleChange} /></label>
            <label>Email: <input type="text" name="email" onChange={handleChange} /></label>
            <label>Age: <input type="text" name="age" onChange={handleChange} /></label>
            <button onClick={handleSubmit}>Add Friend</button>
        </div>
    );
}

export default AddFriend;