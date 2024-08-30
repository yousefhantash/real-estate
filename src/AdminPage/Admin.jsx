import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';
import Navbar from '../components/Navbar';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminPage from './AdminPage';

function Admin() {
 return (
 <>
<AdminNavbar/>

 <div className='container mx-auto'>

 <AdminPage/>

    <div className='shadow-xl '>





<p className='font-bold text-lg my-10 text-[#0056B3] tracking-widest	 '>Property Advertise Requests:</p>
    <div  className="grid md:grid-cols-8 sm:grid-cols-1 px-3 py-3 border-r-8 border-custom-blue items-center my-[2em] ">
     <img src="" alt="" />
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div>


  

 <button onClick={"handleAccept"} className='bg-green-500 p-[15px] rounded-xl hover:bg-green-400 duration-500 mx-[10px] text-lg font-medium hover:font-semibold hover:scale-110 text-white hover:text-black '>Accept</button>
<button className='bg-red-500 p-[15px] rounded-xl hover:bg-red-400 duration-500 mx-[10px] my-[10px] text-lg font-medium hover:font-semibold hover:scale-110 hover:text-black text-white' onClick={"handleRefuse"}>Refuse</button>
</div>


  </div>



    </div>
      </div>


 </>
  )
}

export default Admin