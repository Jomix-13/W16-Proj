// frontend/src/components/LoginFormPage/index.js
import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [Demo, setDemo] = useState([]);


useEffect(()=>{
  const errorHandler =[]
  if(!credential) errorHandler.push('please enter your username or email')
  if(!password) errorHandler.push('please enter your password')
  setErrors(errorHandler)
},[credential,password])

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className='error'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <ul>
        <label className='loginLable'>
          Username or Email
          <input
            className='loginInput'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            />
        </label>
      </ul>
      <ul>
        <label className='loginLable'>
          Password
          <input
            className='loginInput'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </label>
      </ul>
      <button 
        disabled={errors.length ? true : false}
        type="submit">
        Log In
      </button>
      {/* <button type="submit">Demo User</button> */}
      {/* <button type="submit" value>
        Demo User
      </button> */}
    </form>
  );
}

export default LoginFormPage;