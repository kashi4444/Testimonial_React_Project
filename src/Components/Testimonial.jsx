import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft ,FiChevronRight} from "react-icons/fi";
const Testimonial = (props) => {
    let reviews= props.reviews;
    const [index, setIndex]= useState(0);
    let randomIndex= (max, min)=>{
      let random_num= Math.floor(Math.random()*(max-min+1)) + min;
      return random_num;
    } 
    function leftShiftHandler(){
      if(index ==0){
        setIndex(reviews.length-1);
      }else{
        setIndex(index-1);
      }
    }
    function rightShiftHandler(){
      if(index ==reviews.length-1){
        setIndex(0);
      }else{
        setIndex(index+1);
      }
    }
    function surpriseHandler(){
      setIndex(randomIndex(-1,reviews.length));

    }
  return (
    <div className='testimonial_container'>
       <Card review={reviews[index]}></Card>
       <div className='btn_div'>
          <button className='arrow_btn' onClick={leftShiftHandler}><FiChevronLeft/></button>
          <button  className='arrow_btn' onClick={rightShiftHandler}><FiChevronRight/></button>
       </div>
        <div>
          <button className='surprise_btn' onClick={surpriseHandler}>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonial