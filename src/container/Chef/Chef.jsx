import React from 'react';
import {images} from "../../constants"
import './Chef.css';

const Chef = () => (
  <div className='app__chef section__padding flex__center app__bg'>
      <div className='app__chef-img'>
          <img src={images.chef} alt="" />
      </div>
      <div className='app__chef-content'>
          <div className='app__chef-content_title'>
            <h4 className='p__cormorant' id='chef__word'>Chef’s Word</h4>
            <img src={images.spoon} alt="" className='spoon__img'/>
            <h1 className='headtext__cormorant'>What we believe in</h1>
          </div>
          <div className='app__chef-content-paragraph'>
            <div className='app__chef-content_first' id='chef__title'>
                <img src={images.quote} alt="" />
                <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit</p>
            </div>
            <p className='p__opensans'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
          </div>
          <div className='app__chef-content-name'>
            <h2 className="headtext__cormorant" id='chef__name'>Kevin Luo</h2>
            <p className='p__opensans' id='chef__founder'>Chef & Founder</p>
          </div>
          <div className='app__chef-content-sign'>
            <img src={images.sign} alt="" />
          </div>
      </div>
  </div>
);

export default Chef;
