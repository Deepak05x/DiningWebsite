import React from 'react';
import {images} from "../../constants"
import './Gallery.css';

const Gallery = () => (
  <div className='app__gallery'>
      <div className='app__gallery-content'>
        <p className='p__cormorant'>Instgram</p>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-img'>
        <img src={images.gallery01} alt="" />
        <img src={images.gallery02} alt="" />
        <img src={images.gallery03} alt="" />
        <img src={images.gallery04} alt="" />
      </div>
  </div>
);

export default Gallery;
