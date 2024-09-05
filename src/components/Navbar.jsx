import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LandContext } from '../views/PassDataRoute';
import { propertiesType } from './Proprties comp/ProprtiesType';

function Navbar() {
  const data = useContext(LandContext);
  const navigate = useNavigate();
  const [dataproperty, setDataProperty] = useState([]);

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

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className='flex flex-wrap justify-center items-center bg-white min-h-[94px] p-4'>
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-40'>
        {/* Logo */}
        <div className='flex items-start ml-1.5'>
          <a className='text-[#CF991E] text-[24px] sm:text-[27px] md:text-[29px] lg:text-[32px] font-bold'>ME</a>
          <a className='text-[#0056B3] text-[30px] sm:text-[34px] md:text-[36px] lg:text-[40px] tracking-[4px] mt-1 font-bold'>
            Palestine
          </a>
        </div>

        {/* Navbar Links */}
        <ul className='flex flex-col md:flex-row md:gap-6 lg:gap-9 text-center md:text-left sections mt-5'>
          <li>
            <NavLink to='/' onClick={scrollTop} className='text-[#6C757D] hover:text-[#0056B3] font-medium'>
              Home
            </NavLink>
          </li>

          <li className='relative'>
            <button onClick={toggleDropdown} className='text-[#6C757D] hover:text-[#0056B3] font-medium focus:outline-none'>
              Properties
            </button>
            {dropdownVisible && (
              <ul className='absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-[200px] z-10'>
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
            <NavLink onClick={scrollTop} to='/contact' className='text-[#6C757D] hover:text-[#0056B3] font-medium'>
              Contact us
            </NavLink>
          </li>

          <li>
<button className='adv'>
            <NavLink
              onClick={scrollTop}
              to='/create'
              className='flex items-center justify-center w-full sm:w-[150px] lg:w-[210px] h-[40px] bg-[#FF7900] text-white rounded hover:bg-[#ff8c2b] transition-all'
            >
              Advertise a Property
            </NavLink>
            </button>
          </li>

          <li>
            <div className='font-semibold text-amber-500 mt-[5px] underline'>
              <NavLink to='/adminsignin'>Admin</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
