import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'

import * as NewBusiness from '../../store/business'

const STATES =[
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
]
function UpdateBusinessForm() {

    const {id} = useParams()
    const businesses = useSelector(state => Object.values(state.businesses));  
    const business = businesses.find(business => business.id === Number(id))

    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory()
    const dispatch = useDispatch()
        
    const [title, setTitle] = useState(business.title)
    const [description, setDescription] = useState(business.description)
    const [address, setAddress] = useState(business.address)
    const [city, setCity] = useState(business.city)
    const [state, setState] = useState(business.state)
    const [zipCode, setZipCode] = useState(business.zipCode)
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        const errorHandler =[]

        if(!title) errorHandler.push('please enter business name')
        if(!description) errorHandler.push('please enter business description')
        if(!address) errorHandler.push('please enter business street address')
        if(!city) errorHandler.push('please enter city name')
        if(!zipCode || zipCode.length !== 5) errorHandler.push('please enter valid Zip Code')

        setErrors(errorHandler)
    },[title,description,address,city,zipCode])

    // useEffect(()=>{
    //     dispatch(NewBusiness.EditBusiness())
    // },[dispatch])


    const handleSubmit = (e) => {
        const ownerId = sessionUser.id
        const payLoad ={ownerId,title,description,address,city,state,zipCode}
        history.push('/')
        return dispatch(NewBusiness.EditBusiness(payLoad))
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`)
      };

    return(
        <form 
            onSubmit={handleSubmit}
        >
             <ul className='errors'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
            </ul>

            <label> Business Name
                <input
                placeholder='Business Name'
                className='signupInput'
                type="text"
                value={business.title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </label>
           
            <label> Business Description
                <input
                placeholder='Business Description'
                className='signupInput'
                type="text"
                value={business.description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>

            <label> image
                <input
                placeholder='entee image url'
                className='signupInput'
                type="text"
                // value={business.state}
                // onChange={(e) => setDescription(e.target.value)}
                />
            </label>
              
            <label> Street address
                <input
                placeholder='Street address'
                className='signupInput'
                type="text"
                value={business.address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </label>

            <label> City
                <input
                placeholder='City'
                className='signupInput'
                type="text"
                value={business.city}
                onChange={(e) => setCity(e.target.value)}
                />
            </label>

            <div className='statediv'> State
                <select
                    value={business.state}
                    onChange={(e) => setState(e.target.value)}
                    >
                    {STATES.map(state => (
                        <option
                        key={state}
                        >
                        {state}
                    </option>
                    ))}
                </select>
            </div>

            <label> zip Code
                <input
                placeholder='zip Code'
                className='signupInput'
                type="text"
                value={business.zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                />
            </label>

        <button 
            type="submit"
            disabled={errors.length ? true : false}
            >
                 Update Business
        </button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>    
    )


}

export default UpdateBusinessForm
