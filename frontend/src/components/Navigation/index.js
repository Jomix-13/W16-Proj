import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  // const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logoutUser());
  // };
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
      <ul>
        <NavLink to="/login">Log In</NavLink>
      </ul>
      <ul>
        <NavLink to="/signup">Sign Up</NavLink>
      </ul>
      </>
    );
  }

  return (
    <>
    <div className="topnav">
      <ul>
        <NavLink exact to="/">Home</NavLink>
      </ul>
      {/* <ul>
          <button onClick={logout}>Log Out</button>
      </ul> */}
            <input type="text" placeholder="Search..">
      </input>
        {isLoaded && sessionLinks}
    </div>
    </>
  );
}

export default Navigation;