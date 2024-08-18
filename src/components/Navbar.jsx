import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    
<nav className='flex flex-col md:flex-row justify-center items-center bg-white  min-h-[94px] p-4' >

<div className='  flex flex-col md:flex-row items-center gap-4 md:gap-44  '>

<div className="flex items-start ml-1.5 xl   ">
<a className="text-[#CF991E] sm:text-[23px] md:text-[25px] text-[27px] font-bold "> ME</a>
<a className="text-[#0056B3] sm:text-[32px] md:text-[34px] text-[36px] tracking-[4.00px] mt-1 font-bold _">Palestine</a>
</div>

<ul className='flex flex-col md:flex-row md:gap-9 text-center md:text-left sections'>
  <li><NavLink to="/" className='text-[#6C757D] hover:text-[#0056B3] font-medium '>Home</NavLink></li>
  <li><NavLink to="2" className='text-[#6C757D] hover:text-[#0056B3] font-medium'>Properties</NavLink></li>
  <li><NavLink to="/contact" className='text-[#6C757D] hover:text-[#0056B3] font-medium'>Contact Us</NavLink></li>
</ul>

<div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0">
 

  <button className="adv">
   <NavLink to="/create" className='flex items-center justify-center  w-[210px] h-[35px] bg-[#FF7900] text-white rounded'>
     Advertise a Property
    </NavLink>
  </button>

</div>
</div>
</nav>
    
  )
}

 export default Navbar ; 