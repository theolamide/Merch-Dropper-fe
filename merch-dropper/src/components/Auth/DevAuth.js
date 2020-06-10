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

    const toggleForm = e =>{
        setNewUser(!newUser)
    }

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
            .then( res => {
                axios.get(`http://localhost:5032/api/users/email/${credentials.email}`)
                .then(res =>{
                    console.log('get email res', res.data)
                    localStorage.setItem("profile", JSON.stringify(res.data));
                    localStorage.setItem("id", res.data.id);
                    history.push("/stripe-setup")
                })
                .catch(err =>{
                    console.log('error in DevAuth', err)
                })
            }
            )
            .catch(err=>{
                alert(err)
                setNewUser(false);
            })
        } else {
            axios.post("http://localhost:5032/api/auth/login", credentials)
            .then(res =>{
                localStorage.setItem("token", res.data.token);
                axios.get(`http://localhost:5032/api/users/email/${credentials.email}`)
                .then(res =>{
                    console.log('get email res', res.data)
                    localStorage.setItem("profile", JSON.stringify(res.data));
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
    console.log(credentials)
    return (
        <div>
            <button onClick={toggleForm}>Toggle Login/Register</button>
            {newUser ? 
                <FormDiv>
                    <div>Register</div>
                    <form className='register' onSubmit={onSubmit}>
                        <label>Email</label>
                        <input name='email'onChange={handleChanges}/>
                        <label>Password</label>
                        <input name='password' onChange={handleChanges}/>
                        <button type='submit'>Register</button>
                    </form>
                </FormDiv>
                :
                <FormDiv>
                <div>Login</div>
                <form className='login' onSubmit={onSubmit}>
                    <label>Email</label>
                    <input name='email' onChange={handleChanges}/>
                    <label>Password</label>
                    <input name='password' onChange={handleChanges}/>
                    <button type='submit'>Login</button>
                </form>
                </FormDiv> }
        </div>
    )
};

export default DevAuth;