import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'

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
function NewBusinessForm() {

    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory()
    const dispatch = useDispatch()
        
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState(STATES[0])
    const [zipCode, setZipCode] = useState('')
    const [errors, setErrors] = useState([])
    const [image, setImage] = useState('')

    useEffect(()=>{
        const errorHandler =[]

        if(!title.length) errorHandler.push('please enter business name')
        if(!description.length) errorHandler.push('please enter business description')
        if(!image.length) errorHandler.push('please enter business image')
        if(!address.length) errorHandler.push('please enter business street address')
        if(!city.length) errorHandler.push('please enter city name')
        if(!zipCode.length || zipCode.length !== 5) errorHandler.push('please enter valid Zip Code')

        setErrors(errorHandler)
    },[title,description,address,city,zipCode])


    const handleSubmit = () => {
        const ownerId = sessionUser.id
        history.push('/')
        return dispatch(NewBusiness.addBusiness({ownerId,title,description,image,address,city,state,zipCode}))
    }

    return(
        <>
            <div className='formcontainer'>  
                <form className='form'
                onSubmit={handleSubmit}
            >
                <ul className='errors'>
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
                    placeholder='Please enter image url'
                    className='loginInput'
                    type="text"
                    src={image}
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

                <div className='statediv'> State
                    <select
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
                disabled={errors.length ? true : false}
                type="submit"
                >
                Add Business
                </button>
            </form>  
        </div>
    </>  
    )


}

export default NewBusinessForm
