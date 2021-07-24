import {useDispatch,useSelector} from 'react-redux'
import * as NewBusiness from '../../store/business'
import { useHistory, useParams } from 'react-router'
import { NavLink } from 'react-router-dom'

function Singelbus(){

    const dispatch = useDispatch()
    const {businessId} = useParams()
    const history = useHistory()

    const sessionUser = useSelector((state) => state.session.user);

    const business = useSelector(state => state.businesses.oneBusiness);  
    // const business = businesses.find(business => business.id === Number(businessId))

    return(
        <>
            {sessionUser && sessionUser.id === business.ownerId && (    
                <div className='container'>
                    <button 
                    type='button'
                    onClick={
                        () => {dispatch(NewBusiness.DeleteBusiness(business))
                        history.push('/')
                        }
                    }
                    className='small'>
                    Delete Business
                    </button>

                    <button 
                    className='small'>
                    <NavLink to={`/update/${businessId}`}>update Business</NavLink>
                    </button>
                </div>
            )}
        </> 
    )
}
export default Singelbus