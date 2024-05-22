import React from 'react'
import "./Award.css"


const Award = ({photo, heading, paragraph}) => {
  return (
    <div className='app__award'>
        <div className='app__award-img'>
          <img src={photo} alt="" />
        </div>
        <div className='app__award-para'>
          <div className='app__award-para_content'>
            <h4 className='headtext__cormorant' id='heading'>{heading}</h4>
            <p className='p__opensans'>{paragraph}</p>
          </div>
          
        </div>
    </div>
  )
}

export default Award
