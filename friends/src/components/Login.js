import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {

    const [ credentials, setCredentials ] = useState({});

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push('/friendlist') // why?
        })
        .catch(err => console.log(err))
    }
    console.log(credentials)
    return(
        <div className="login">
            <h2>Login Friends</h2>
            <label>Username: <input type="text" name="username" onChange={handleChange} /></label>
            <label>Password: <input type="password" name="password" onChange={handleChange} /></label>
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default Login;