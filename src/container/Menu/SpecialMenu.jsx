import React from 'react';
import { images } from '../../constants';
import './SpecialMenu.css';
import  MenuItem  from '../../components/Menuitem/MenuItem';

const SpecialMenu = () => (
  <div className='app__specialmenu section__padding flex__center' id='menu'>
    <div className='app__specialmenu-content flex__center'>
        <p className='p__cormorant'>Menu that fits you palatte</p>
        <img src={images.spoon} alt="spoon" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
    </div>
    <div className='app__specialmenu-menu'>
        <div className='app__specialmenu-menu_contentA'>
            <h1 className='p__cormorant'>Wine & Beer</h1>
            <div className='app__specialmenu-menu_contentA-items'>
            <MenuItem title={"Chapel Shiraz"} price={"$56"} recipe={"AU | Bottle"}/> 
            <MenuItem title={'Catena Malbec'} price={'$59'} recipe={"AR | Bottle"}/> 
            <MenuItem title={"La Vieille Rosé"} price={"$44"} recipe={"FR | 750 ml"}/> 
            <MenuItem title={"Rhino Pale Ale"} price={"$31"} recipe={"CA | 750 ml"}/> 
            <MenuItem title={"Irish Guinness"} price={"$26"} recipe={"IE | 750 ml"}/> 
            </div>
        </div>

        <div className='app__specialmenu-menu_image'>
            <img src={images.menu} alt="" />
        </div>

        <div className='app__specialmenu-menu_contentB'>
            <h1 className='p__cormorant'>Cocktails</h1>
                <div className='app__specialmenu-menu_contentA-items'>
                <MenuItem title={"Chapel Shiraz"} price={"$56"} recipe={"AU | Bottle"}/> 
                <MenuItem title={'Catena Malbec'} price={'$59'} recipe={"AR | Bottle"}/> 
                <MenuItem title={"La Vieille Rosé"} price={"$44"} recipe={"FR | 750 ml"}/> 
                <MenuItem title={"Rhino Pale Ale"} price={"$31"} recipe={"CA | 750 ml"}/> 
                <MenuItem title={"Irish Guinness"} price={"$26"} recipe={"IE | 750 ml"}/> 
                </div>
        </div>
          
    </div>
    <div className='app__specialmenu-button'>
      <button className="custom__button app__specialmenu-button_btn" type='button'>View More</button>
      <div className='app__specialmenu-button_img'>
        <img src={images.menu} alt="" />
      </div>
      <button className='custom__button app__specialmenu-button_btn2' type='button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
