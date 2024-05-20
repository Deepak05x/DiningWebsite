import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, recipe}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-items'>
      <div className='app__menuitem-items_name'>
        <h4>{title}</h4>
        <div></div>
        <p>{price}</p>
      </div>
      <p>{recipe}</p>
    </div>
  </div>
);

export default MenuItem;
