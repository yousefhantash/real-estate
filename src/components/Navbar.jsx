import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className='flex flex-col md:flex-row justify-center items-center bg-white min-h-[94px] p-4'>
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-40'>
        <div className="flex items-start ml-1.5 xl">
          <a className="text-[#CF991E] sm:text-[23px] md:text-[25px] text-[27px] font-bold">ME</a>
          <a className="text-[#0056B3] sm:text-[32px] md:text-[34px] text-[36px] tracking-[4.00px] mt-1 font-bold">Palestine</a>
        </div>

        <ul className='flex flex-col md:flex-row md:gap-9 text-center md:text-left sections mt-5 '>
          
          <li>
            <NavLink to="/" className='text-[#6C757D] hover:text-[#0056B3] font-medium'>Home</NavLink>
          </li>
          
          <li className='relative'>
            <button 
              onClick={toggleDropdown} 
              className='text-[#6C757D] hover:text-[#0056B3] font-medium focus:outline-none'
            >
              Properties
            </button>
            {dropdownVisible && (
              <ul className='absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-[200px]'>
                <li><NavLink to="/property" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>All Properties</NavLink></li>
                <li><NavLink to="/property/land" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Land</NavLink></li>
                <li><NavLink to="/property/house" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>House</NavLink></li>
                <li><NavLink to="/property/apartment" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Apartment</NavLink></li>
                <li><NavLink to="/property/penthouse-apartment" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Penthouse Apartment</NavLink></li>
                <li><NavLink to="/property/villa" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Villa</NavLink></li>
                <li><NavLink to="/property/office" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Office</NavLink></li>
                <li><NavLink to="/property/shop" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Shop</NavLink></li>
                <li><NavLink to="/property/storage" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Storage</NavLink></li>
                <li><NavLink to="/property/building" className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'>Building</NavLink></li>
              </ul>
            )}
          </li>
         <li>     <NavLink to="/contact" className='text-[#6C757D] hover:text-[#0056B3] font-medium'>Contact us</NavLink></li>

<li>

  <button className="adv">
   <NavLink to="/create" className='flex items-center justify-center  w-[210px] h-[35px] bg-[#FF7900] text-white rounded'>
     Advertise a Property
    </NavLink>
  </button>
</li>
  <li>
      
    <div className='font-semibold text-amber-500 mt-[5px] underline'> <NavLink to="/adminsignin">Admin</NavLink></div>
    </li>
          </ul>
    
      </div>
    </nav>
  );
}
export default Navbar;