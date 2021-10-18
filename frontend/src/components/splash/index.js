
// import { useDispatch, useSelector } from 'react-redux'
// import './splashpage.css'
// import { fetchAllHomes } from '../../store/home'
// import { useEffect, useState } from 'react'

import './splash.css'
// import { useHistory } from 'react-router'
const SplashPage = () =>{

//     const [search, setSearch] = useState('')


//     const homes = useSelector(state => state.homesReducer.homes)
//     const searchHomes = homes.filter(home => home.stAddress.toLowerCase().includes(search.toLowerCase()));
//     const searchCity= homes.filter(home => home.city.toLowerCase().includes(search.toLowerCase()));
//     // const searchZip = homes.filter(home => home.zipCode.includes(search));


//     const dispatch = useDispatch()
//     const history = useHistory()

//     useEffect(()=>{
//         dispatch(fetchAllHomes())
//     },[dispatch])

//     const onSubmit = (e) => {
//         e.preventDefault()
//     }

//     const toPage = (e) => {
//         e.preventDefault();
//         if (e.target.value.includes('Results')){
//             return
//         } else if (e.target.value.includes('home')) {
//             setSearch('')
//             const homeId = (e.target.value.slice(4))
//             return history.push(`/homes/${homeId}`);
//         } else {
//             setSearch('')
//             return history.push(`/spots/${e.target.value}`);
//         }
//     }

return (
    <div>
        {/* <div className='slogen'>
        Find the Best Businesses in Town
        </div> */}
        <div className='logoimg'>
            <img src='https://i.imgur.com/Xq6DdgH.png' alt=""/>
        </div>
            <div className='i'>
        </div>
    </div>
    )
}

export default SplashPage