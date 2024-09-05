import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Admin.css"
import { ToastContainer, toast } from 'react-toastify';

function AdminNavbar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("email") === "palrealstatea@gmail.com") {
    }
    else{navigate("/adminsignin")};
  }, [navigate]);

  const SignOutfunc = () => {
    localStorage.clear();
    navigate("/adminsignin"); 
  };

  return (
    <nav className='flex flex-col md:flex-row justify-center items-center bg-white min-h-[94px] p-4'>
      <div className='flex flex-col md:flex-row items-center gap-4 md:gap-40'>
        <div className="flex items-start ml-1.5 xl">
          <a className="text-[#CF991E] sm:text-[23px] md:text-[25px] text-[27px] font-bold">ME</a>
          <a className="text-[#0056B3] sm:text-[32px] md:text-[34px] text-[36px] tracking-[4.00px] mt-1 font-bold">Palestine</a>
        </div>
      </div>
      
      <ul className='flex flex-col md:flex-row md:gap-9 text-center md:text-left sections mt-5 ml-10 adnav'>
        <li>
          <NavLink to="/admin/advertiesReq" className='text-[#6C757D] hover:text-[#0056B3] text-yellow-600 font-semibold'>Adverties Requests</NavLink>
        </li>
          
        <li>
          <NavLink to="/admin/allproprties" className='text-[#6C757D] hover:text-[#0056B3] font-semibold text-yellow-600'>All Proprties</NavLink>
        </li>
          
        <li>
          <NavLink to="/admin/themessages" className='text-[#6C757D] hover:text-[#0056B3] font-semibold text-yellow-600'>The messages</NavLink>
        </li>
        
        <li>
          <button 
            className="font-bold text-yellow-600"
            onClick={SignOutfunc}
          >
            <div className='bg-blue-600 p-[10px] rounded hover:bg-red-600 duration-200'>
              Sign Out
            </div>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNavbar
