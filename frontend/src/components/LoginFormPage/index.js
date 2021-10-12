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

  const demoHandler = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.loginUser(
      { credential:'Demo', password:'Demo' }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
    <div className='formcontainer'>  
      <form className='form' onSubmit={handleSubmit}>
        <div className='ediv'>
        <ul className='error'>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        </div>
        <div className='inputdiv'>
          <label className='loginLable'>
            Username or Email
            <input
              placeholder="Username or Email"
              className='loginInput'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              />
          </label>
          <label className='loginLable'>
            Password
            <input
              placeholder="Password"
              className='loginInput'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </label>
          </div>
        <button 
          disabled={errors.length ? true : false}
          type="submit">
          Log In
        </button>
        {/* <button type="submit">Demo User</button> */}
        <button type="button" onClick={demoHandler}>Demo User</button>
      </form>
    </div>
    </>
  );
}

export default LoginFormPage;