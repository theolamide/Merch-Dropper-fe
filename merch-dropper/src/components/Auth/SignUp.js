 import React, { useState } from 'react';
 import { connect } from 'react-redux';
 import { postUser } from '../../actions';
 
 const initialCredentials = {
     first_name: '',
     last_name: '',
     username: '',
     password: '',
     seller: true,
     stripe_account: '',
     address1: '',
     city: '',
     state: '',
     zip_code: '',
     country: '',
     email: ''
 };

 function SignUp({ postUser, history }) {

    const [credentials, setCredentials] = useState(initialCredentials);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const callSignUp = e => {
        e.preventDefault();
        postUser(credentials, history);
        
    };

    return (
        <div className='signup-container'>
            <h2>Create an Account to Sell Merchandise</h2>
            <form onSubmit={callSignUp}>
                <input 
                    name='first_name'
                    type='text'
                    value={credentials.first_name}
                    placeholder='First Name'
                    onChange={handleChange}
                />
                <input 
                    name='last_name'
                    type='text'
                    value={credentials.last_name}
                    placeholder='Last Name'
                    onChange={handleChange}
                />
                <input 
                    name='username'
                    type='text'
                    value={credentials.username}
                    placeholder='Username'
                    onChange={handleChange}
                />
                <input 
                    name='password'
                    type='password'
                    value={credentials.password}
                    placeholder='password'
                    onChange={handleChange}
                />
                <input 
                    name='stripe_account'
                    type='text'
                    value={credentials.stripe_account}
                    placeholder='Stripe Account #'
                    onChange={handleChange}
                />
                <input 
                    name='address1'
                    type='text'
                    value={credentials.address1}
                    placeholder='Mailing Address'
                    onChange={handleChange}
                />
                <input 
                    name='city'
                    type='text'
                    value={credentials.city}
                    placeholder='City'
                    onChange={handleChange}
                />
                <input 
                    name='state'
                    type='text'
                    value={credentials.state}
                    placeholder='State'
                    onChange={handleChange}
                />
                <input 
                    name='zipcode'
                    type='number'
                    value={credentials.zip_code}
                    placeholder='Zipcode'
                    onChange={handleChange}
                />
                <input 
                    name='country'
                    type='text'
                    value={credentials.country}
                    placeholder='Country'
                    onChange={handleChange}
                />
                <input 
                    name='email'
                    type='email'
                    value={credentials.email}
                    placeholder='email'
                    onChange={handleChange}
                />
                <button>Sign Up</button>
            </form>
        </div>
    )

};

const mapStateToProps = state => {
  let register = state.RegisterReducer

  return {
      isFetching: register.isFetching,
      error: register.error
  }
};

export default connect(mapStateToProps, { postUser })(SignUp);