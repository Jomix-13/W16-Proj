import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';


// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  // const dispatch = useDispatch();
  const dispatch = useDispatch();

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
      <div className='navbutts'>
      <ul className='navbutt'>
        <NavLink to="/login">Log In</NavLink>
      </ul>
      <ul className='navbutt'>
        <NavLink to="/signup">Sign Up</NavLink>
      </ul>
      </div>
    );
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
  };

  return (
    // <>
    // <div className="topnav">
    //   <ul>
    //     <NavLink exact to="/">Home</NavLink>
    //   </ul>
    //   {/* <ul>
    //       <button onClick={logout}>Log Out</button>
    //   </ul> */}
    //         <input className='searchinput' type="text" placeholder="Search..">
    //   </input>
    //     {isLoaded && sessionLinks}
    // </div>
    // </>
    <div className='navbutts'>
      <div className="topnav">
        <NavLink exact to="/">Home</NavLink>
      </div>
      {!sessionUser ? 
        <div className='navbutts'>
          <div className='topnav'>
            <NavLink to="/login">Log In</NavLink>
          </div>
          <div className='topnav'>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
        :
        // <ProfileButton className='topnav2' user={sessionUser}/>
        <div className='navbutts'>
          <div className='topnav'>
              <NavLink to={'/new'}> Add a buiness</NavLink>
          </div>
          <div className='topnav'>
              <button onClick={logout}>Log Out</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Navigation;