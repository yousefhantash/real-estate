import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LandContext } from '../views/PassDataRoute';
import { propertiesType } from './Proprties comp/ProprtiesType';

function Navbar() {
  const data = useContext(LandContext);
  const navigate = useNavigate();
  const [dataproperty, setDataProperty] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const getDataByCity = (propType) => {
    const cityData = data.filter((item) => propType === item.propertyType);
    setDataProperty(cityData);
    setTimeout(() => {
      navigate(`/property/${propType}`, { state: cityData });
    }, 0);
    window.scrollTo(0, 0);
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };



  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };



  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };



  return (
    <nav className='bg-white  w-full z-20 top-0 start-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex flex-wrap items-center  
      justify-center justify-around
      mx-auto py-4
      
      '>
        <NavLink to="/" className="flex items-center space-x-3">
          <span className='text-[#CF991E] text-[24px] sm:text-[27px] md:text-[29px] lg:text-[32px] font-bold'>RE</span>
          <span className='text-[#0056B3] text-[30px] sm:text-[34px] md:text-[36px] lg:text-[40px] tracking-[4px] mt-1 font-bold'>Palestine</span>
        </NavLink>

        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>



        <div className={`items-center justify-between ${mobileMenuVisible ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white'>
            <li>
              <NavLink to='/' onClick={scrollTop} className="block py-2 px-3 text-[#6C757D] hover:text-[#0056B3]">
                Home
              </NavLink>
            </li>

            <li className='relative'>
              <button onClick={toggleDropdown} className='block py-2 px-3 text-[#6C757D]
              hover:text-[#0056B3]'>
                Properties
              </button>
              {dropdownVisible && (
                <ul className='absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md  '>
                  <li>
                    <NavLink
                      to='/property'
                      state={data}
                      className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'
                    >
                      All Properties
                    </NavLink>
                  </li>
                  {propertiesType.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => getDataByCity(item.Type)}
                        className='block px-4 py-2 text-[#6C757D] hover:text-[#0056B3] hover:bg-gray-100'
                      >
                        {item.Type}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <NavLink onClick={scrollTop} to='/contact' className="block py-2 px-3 text-[#6C757D] hover:text-[#0056B3]">
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink onClick={scrollTop} to='/create' className='block py-2 px-3 bg-[#FF7900] text-white rounded hover:bg-[#ff8c2b]'>


              Advertise a Property


              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
