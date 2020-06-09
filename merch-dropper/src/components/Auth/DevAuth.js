import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`;

const DevAuth = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [newUser, setNewUser] = useState(true)

    const handleChanges = e =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(newUser){
            axios.post("http://localhost:5032/api/auth/register", credentials)
            setNewUser(false);
        } else {
            axios.post("http://localhost:5032/api/auth/login", credentials)
            .then(res =>{
                localStorage.setItem("token", res.data.token);
                axios.get(`http://localhost:5032/api/users/email/${credentials.email}`)
                .then(res =>{
                    console.log(res)
                    localStorage.setItem("profile", JSON.stringify(res));
                    localStorage.setItem("id", res.data.id);
                    history.push("/dashboard")
                })
                .catch(err =>{
                    console.log('error in DevAuth', err)
                })
            })
            .catch(err =>{
                console.log('error in DevAuth', err)
            })
        }

    }

    return (
        <div>
            <button>Toggle Login/Register</button>
            {newUser ? 
                <FormDiv>
                    <div>Register</div>
                    <form className='register' onSubmit={onSubmit}>
                        <input name='email'/>
                        <input name='password'/>
                        <button type='submit' />
                    </form>
                </FormDiv>
                :
                <FormDiv>
                <div>Login</div>
                <form className='login' onSubmit={onSubmit}>
                    <input name='email'/>
                    <input name='password'/>
                    <button type='submit' />
                </form>
                </FormDiv> }
        </div>
    )
};

export default DevAuth;