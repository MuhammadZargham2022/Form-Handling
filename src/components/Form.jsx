import React, { useState } from 'react'
import './Form.scss'

const Form = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUserName = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    const getEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const clickHandle = (e) => {
        e.preventDefault();
        console.log(`Name: ${userName}`);
        console.log(`Email: ${email}`);
        console.log(`Password : ${password}`);
    }
    return (
        <>
            <div className="container">
                <form id="form" className="form">
                    <h2>Registration</h2>
                    <div className="form-control">
                        <label >Username</label>
                        <input type="text" id="username" placeholder="Enter username" onChange={getUserName} />
                    </div>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="text" id="email" placeholder="Enter email" onChange={getEmail} />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" id="password" placeholder="Enter password" onChange={getPassword} />
                    </div>
                    <div className="form-control">
                        <label >Confirm password</label>
                        <input type="password" id="password2" placeholder="Renter your password" />
                    </div>
                    <button type="submit" onClick={clickHandle}>Submit</button>
                </form>
            </div>

        </>
    )
}

export default Form