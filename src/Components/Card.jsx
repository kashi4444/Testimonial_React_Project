import React from 'react'
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa";
const Card = (props) => {
  let review = props.review;
  return (
    <div className='card_container'>
        <div className='image_container'>
            <img src={review.image} className='image'></img>
            <div className='shadow_div'></div>
        </div>
        <div className='name_div'>
            <p className='name'>{review.name}</p>
        </div>
        <div className='name_div'>  
            <p className='job'>{review.job}</p>
        </div>
        <div className='comma'><FaQuoteLeft/></div>
        <div className='text_div'>{review.text}</div>
        <div className='comma'><FaQuoteRight/></div>
    </div>
  )
}

export default Card