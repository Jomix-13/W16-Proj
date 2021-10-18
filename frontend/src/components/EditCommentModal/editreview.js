import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';


import {EditReview} from '../../store/0review'
import {getReviews} from '../../store/0review'

import './editreview.css'
const EditReviewForm = ({ setShowModal,id}) => {
  
  const dispatch = useDispatch();
  const reviews = useSelector(state => state.review.allReviews);
let rev = reviews.filter(rev=>rev.id === id)
console.log(id,rev)
console.log(id,rev[0].answer,rev.rating)

  const [review,setReview] = useState(rev[0].answer)
  const [rating,setRating] = useState(rev[0].rating)
  const [errors,setErrors] = useState([])

  useEffect(() => {
    const errorHandler=[]
    if(!review) errorHandler.push('Review can not be blank')
    if(review?.length < 10) errorHandler.push('Your review needs to be more than 10 charachters')
    if(rating < 1 || rating > 5 || !rating ) errorHandler.push('Rating value must be between 1-5')
    setErrors(errorHandler)
  },[review, rating,dispatch])

//   const id = revieww.id
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      id,
      review,
      rating,
    };
    let updatedReview = await dispatch(EditReview(payload));
    if (updatedReview) {
    dispatch(getReviews())
    //   hideForm(false);
    setShowModal(false);
    }else{
    setShowModal(true)
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    // hideForm(false);
  };

  return (
    <section className="form-content">
    {/* <section className="edditReviewForm"> */}
      <form onSubmit={handleSubmit}>
      <div className='form-error-div'>
      <ul className='error'>
            {!!errors && errors.map(error=>(
                <li key={error}>{error}</li>
            ))}
      </ul>
      </div>
      <div className='form-all-inputs-container'>
      <textarea
      // className='signupInput'
      className='form-input'
      type="text"
      value={review}
      onChange={(e) => setReview(e.target.value)}
      />
      <input
      // className='reviewInput'
      className='form-input'
      type="number"
      max='5'
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      />
      </div>
      <div className='modalbuttons'>
      <div>
        <button 
        type="submit"
        disabled={errors.length ? true : false}
        >
          Update Review
        </button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
      </div>
      </form>
    </section>
    );
};

export default EditReviewForm;

// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchEditQuestion } from "../../store/questions"
// import Errors from "../errors"

// import './editreview.css'

// const EditQuestionForm = ({ setShowModal,id} ) => {

//     const home = useSelector(state => state.homesReducer.home)
//     const [editquestionErrors, setEditQuestionErrors] = useState(false);


//     const qqqq = home.questionswuserid

    
//     function ww(){
//         return home.questionswuserid.filter((ee)=>{
//             if(ee.id === id){
//                 return ee
//             }
//         })
//     }
    
//     const [question,setQuestion] = useState(ww()[0].question)

//     const dispatch = useDispatch()
//     const onSubmit = async(e) =>{
//         e.preventDefault()
//         const payload = {
//             question,
//             homeId: home.id
//         }

//         const success = await dispatch(fetchEditQuestion(payload,id))

//         if (success){
//             setShowModal(false);
//         }else{
//             setEditQuestionErrors(true)
//         }
        

//     }

//     return (
//         <div className='form-div'>
//             <form onSubmit={onSubmit}>
//                 <div className='form-content'>
//                     <div className='form-all-inputs-container'>
//                         <div className='form-h3-container'>
//                             {/* <h3 className='form-h3'>Login</h3> */}
//                         </div>
//                         <div >
//                             {editquestionErrors ? <Errors></Errors> : null }
//                             <div className='form-input-container'>
//                                 <label className='form-label' >Question</label>
//                                 <input
//                                     className='form-input'
//                                     type='text'
//                                     value={question}
//                                     onChange={e=>setQuestion(e.target.value)}
//                                 >
//                                 </input>
//                             </div>
//                             <div>
//                                 <button className='button' type="submit">Submit</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
            

//     )
// }

// export default EditQuestionForm