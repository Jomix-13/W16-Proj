import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom'

import * as NewBusiness from '../../store/business'

import './LoginForm.css'

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
    const dispatch = useDispatch()
    const {id} = useParams()
    
    useEffect(()=>{
        dispatch(NewBusiness.SingleBusinesses(id))
    },[dispatch])

    const business = useSelector(state => state.businesses.oneBusiness);

    
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory()
    
        
    const [title, setTitle] = useState(business.title)
    const [description, setDescription] = useState(business.description)
    const [address, setAddress] = useState(business.address)
    const [city, setCity] = useState(business.city)
    const [state, setState] = useState(business.state)
    const [zipCode, setZipCode] = useState(business.zipCode)
    const [image, setImage] = useState(business.image)
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        const errorHandler =[]

        if(!title) errorHandler.push('please enter business name')
        if(!description) errorHandler.push('please enter business description')
        if(!image) errorHandler.push('please enter business image')
        if(!address) errorHandler.push('please enter business street address')
        if(!city) errorHandler.push('please enter city name')
        if(!zipCode || zipCode.length !== 5) errorHandler.push('please enter valid Zip Code')

        setErrors(errorHandler)
    },[business])



    const handleSubmit = (e) => {
        e.preventDefault();
        const ownerId = sessionUser.id
        const payLoad ={id,ownerId,title,description,image,address,city,state,zipCode}
        dispatch(NewBusiness.EditBusiness(payLoad))
        history.push(`/${business.id}`)
        return
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        // history.push(`/${business.id}`)
      };
    return(
    <>
        <div className='formcontainer'>  
            <form className='form'
                onSubmit={handleSubmit}
            >
                <ul className='error'>
                {!!errors && errors.map(error=>(
                    <li key={error}>{error}</li>
                ))}
                </ul>
                <label className='loginLable'> Business Name
                    <input
                    placeholder='Business Name'
                    className='loginInput'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                            
                <label className='loginLable'> Business Description
                    <input
                    placeholder='Business Description'
                    className='loginInput'
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label className='loginLable'> image
                    <input
                    placeholder='enter image url'
                    className='loginInput'
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                
                <label className='loginLable'> Street address
                    <input
                    placeholder='Street address'
                    className='loginInput'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </label>

                <label className='loginLable'> City
                    <input
                    placeholder='City'
                    className='loginInput'
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </label>

                <div className='loginLable'> State
                    <select
                        className='loginInput'
                        value={state}
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

                <label className='loginLable'> zip Code
                    <input
                    placeholder='zip Code'
                    className='loginInput'
                    type="text"
                    value={zipCode}
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
        </div>
    </>  
    )


}

export default UpdateBusinessForm
