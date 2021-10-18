import React,{useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {SingleBusinesses} from '../../store/0business'



import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);

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

  let history = useHistory()
  const [search, setSearch] = useState("");

  const businesses = useSelector(state => state.business.allBusinessess)
  const searchTitle = businesses.filter(business => business.title.toLowerCase().includes(search.toLowerCase()));
  const searchCity= businesses.filter(business => business.city.toLowerCase().includes(search.toLowerCase()));
  const searchDescription= businesses.filter(business => business.description.toLowerCase().includes(search.toLowerCase()));


  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutUser());
    history.push('/')
  };

  const onSubmit = (e) => {
    e.preventDefault()
  } 

  const toPage = (e) => {
    e.preventDefault();
      if(e.target.value.includes('business')) {
        
        setSearch('')
        const businessId = (e.target.value.slice(8))
        dispatch(SingleBusinesses(businessId))
        return history.push(`/${businessId}`);
    } 
  }

  return (

    <div className='navbutts'>
    <div className='navbutts2'>
      <div className="topnav">
        <NavLink exact to="/home">Home</NavLink>
      </div>
      {!sessionUser ? 
        <div className='navbutts2'>
          <div className='topnav'>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
          <div className='topnav'>
            <NavLink to="/login">Log In</NavLink>
          </div>
        </div>
        :
        <div className='navbutts2'>
          <div className='topnav'>
              <button onClick={logout}>Log Out</button>
          </div>
          <div className='topnav'>
              <NavLink to={'/new'}> Add a business</NavLink>
          </div>
        </div>
      }
      </div>
            {sessionUser ? 
          <div className='username'>
          Welcome {sessionUser.username}
          </div>
          : 
          <div className='username'></div>}


        <div className='i2'>
            <div className='searchbar2'>
                <form onSubmit={onSubmit}>
                    <input
                        id="myInput2"
                        className='nav-search-input2'
                        type='text'
                        name='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search...'>
                    </input>
                    {search &&
                        <select className='search-results2' onChange={toPage} size={searchTitle.length + searchDescription.length + searchCity.length  + 3}>
                          <option className='search-results-title'>Business Name [{searchTitle.length } result(s)]</option>
                            {searchTitle.map(business => (
                              <option key={business.id} value={'business' + business.id}>{business.title} - {business.description}</option>
                            ))}
                          <option className='search-results-title'>Business type [{searchDescription.length } result(s)]</option>
                            {searchDescription.map(business => (
                              <option key={business.id} value={'business' + business.id}>{business.description} - {business.title}</option>
                            ))}
                          <option className='search-results-title'>City [{searchCity.length } result(s)]</option>
                            {searchCity.map(business => (
                              <option key={business.id} value={'business' + business.id}>{business.city} ({business.address}, {business.state}, {business.Zipcode}) - {business.title} {business.description}</option>
                            ))}
                        </select>
                    }
                </form>
            </div>
        </div>
    </div>
  );
}

export default Navigation;