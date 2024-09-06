import { NavLink } from 'react-router-dom'
import item1 from "../../images/Recentlyaddedproperties/Home-OverView/images.jpeg";
import btn_icon from "../../images/Recentlyaddedproperties/Vector.png";
import React, { createContext, useContext, useRef } from 'react';

function PropsItem(props) {
    const {item,url}=props;
  return (
  
              
    <div key={item.id} className='grid bg-white mt-24 shadow-xl' >

    <div  className="grid md:grid-cols-4 sm:grid-cols-1 px-3 py-3 border-r-8 border-custom-blue items-center">
      <div><img src={item1} alt="Property" className=' sm:mx-auto ' /></div>
      <div className='md:my-[1px] my-8 '>
        <h1 className='text-custom-blue text-xl'>{item.address}</h1>
        <div className='flex items-center text-zinc-400'>
          <span className='flex items-center mr-4'>
            <svg fill="#0E88E2" viewBox="0 0 48 48" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
              <path d="M0 0h48v48h-48z" fill="none"></path>
            </svg>
            {item.city}
                            </span>
          <span className='flex items-center'>
            <svg fill="#0E88E2" height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M7,26H25a1,1,0,0,0,1-1V19a1,1,0,0,0-1-1H14V7a1,1,0,0,0-1-1H7A1,1,0,0,0,6,7V25A1,1,0,0,0,7,26Zm7-6h2v1a1,1,0,0,0,2,0V20h2v1a1,1,0,0,0,2,0V20h2v4H14ZM8,8h4v2H11a1,1,0,0,0,0,2h1v2H11a1,1,0,0,0,0,2h1v2H8ZM8,20h4v4H8Z"></path>
            </svg>
            {item.space} {" "}{item.measurementUnit}
          </span>
        </div>
      </div>
      <div className='md:my-2 my-8 '>
        <h1 className='mx-4 text-custom-blue text-xl '>Services</h1>
        <div className='flex'>
          <div className='h-20 w-0.5 bg-gray-200'></div>
          <div className='flex my-3'>
            <svg fill="#0E88E2" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,1.78,1.43,9.18l1.14,1.64L4,9.82V22H20V9.82l1.43,1,1.14-1.64Zm-.17,15.77-1.66-1.1,1.54-2.32-2-2,2.46-3.68,1.66,1.1-1.54,2.32,2,2Z"></path>
            </svg>
            <p className='text-zinc-400'>{item.services.map((item,index)=>{return <span key={index}>{item}/</span>})}</p>
          </div>
        </div>
      </div>
      <div className=''>
      <NavLink to={url} state={item}
      className=' rec-det-btn flex lg:w-40 lg:h-15'  >
        <button className='mx-auto'><img src={btn_icon} alt="Details " /> Details</button>
        </NavLink>
      </div>
    </div>
</div>
  )
}

export default PropsItem
