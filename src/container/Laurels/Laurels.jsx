import React from 'react';
import {images} from "../../constants"
import './Laurels.css';
import Award from '../../components/Award/Award';

const Laurels = () => (
  <div className='app__laurel app__bg' id='awards'>
    <div className='app__laurel-img'>
      <img src={images.logo} alt="laurel" />
    </div>
    <div className='app__laurel-content'>
        <div className='app__laurel-content_para'>
            <div className='app__laurel-content_para-contentA'>
                <p className='p__cormorant'>Awards & recognition</p>
                <img src={images.spoon} alt="" className='spoon__img'/>
                <h2 className='headtext__cormorant'>Our Laurels</h2>
            </div>
            <div className='app__laurel-content_para-contentB'>
              <Award photo={images.award02} heading={"Bib Gourmond"} paragraph={"Lorem ipsum dolor sit amet, consectetur."}/>
              <Award photo={images.award01} heading={"Rising Star"} paragraph={"Lorem ipsum dolor sit amet, consectetur."}/>
            </div>
            <div className='app__laurel-content_para-contentC'>
              <Award photo={images.award05} heading={"AA Hospitality "} paragraph={"Lorem ipsum dolor sit amet, consectetur."}/>
              <Award photo={images.award03} heading={"Outstanding Chef"} paragraph={"Lorem ipsum dolor sit amet, consectetur."}/>
            </div>
        </div>
        <div className='app__laurel-content_img'>
          <img src={images.laurels} alt="" />
        </div>
    </div>
  </div>
);

export default Laurels;
