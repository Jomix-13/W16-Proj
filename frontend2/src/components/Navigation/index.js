import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

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
        {isLoaded && sessionLinks}
      <input type="text" placeholder="Search..">
      </input>
    </div>
    </>
  );
}

export default Navigation;