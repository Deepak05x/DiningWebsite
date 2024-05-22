import React from 'react';
import meal_video from "../../assets/meal.mp4"

import './Intro.css';

const Intro = () => (
  <div className='app__video'>
      <video controls loop><source src={meal_video} type="video/mp4"/></video>
  </div>
);

export default Intro;
