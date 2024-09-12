import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Admin.css';
import { ToastContainer, toast } from 'react-toastify';

function AdminNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('email') === 'palrealstatea@gmail.com') {
      // User is authenticated
    } else {
      navigate('/adminsignin');
    }
  }, [navigate]);

  const SignOutfunc = () => {
    localStorage.clear();
    toast.success("sign out successfully!"); 

    navigate('/adminsignin');
  };

  return (
    
    <nav className='flex flex-col lg:flex-row justify-center items-center bg-white min-h-[94px] p-4'>
      <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-40'>
        <div className='flex items-start ml-1.5'>
          <a className='text-[#CF991E] text-[24px] sm:text-[27px] lg:text-[32px] font-bold'>RE</a>
          <a className='text-[#0056B3] text-[30px] sm:text-[34px] lg:text-[40px] tracking-[4px] mt-1 font-bold'>
            Palestine
          </a>
        </div>
      </div>


    
    
    
      <ul className='flex flex-col lg:flex-row lg:gap-9 text-center lg:text-left sections mt-5 ml-10 adnav'>
        <li>
          <NavLink to='/admin/advertiesReq' className='text-yellow-600 hover:text-[#0056B3] font-semibold'>
            Advertise Requests
          </NavLink>
        </li>

        <li>
          <NavLink to='/admin/allproprties' className='text-yellow-600 hover:text-[#0056B3] font-semibold'>
            All Properties
          </NavLink>
        </li>

        <li>
          <NavLink to='/admin/themessages' className='text-yellow-600 hover:text-[#0056B3] font-semibold'>
FeedBacks         
          </NavLink>
      
        </li>

        <li>
          <button className='font-bold text-yellow-600' onClick={SignOutfunc}>
            <div className='bg-blue-600 p-[10px] rounded hover:bg-red-600 transition duration-200'>
              Sign Out
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
