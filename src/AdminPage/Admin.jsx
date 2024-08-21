import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';

function Admin() {
 return (
 <>
 <div className='container mx-auto'>

 <div className="flex items-start ml-1.5 xl   justify-center my-[2em]">
    <h1 className="text-[#CF991E] sm:text-[23px] md:text-[55px] text-[33px] font-bold "> ME</h1>
    <h1 className="text-[#0056B3] sm:text-[32px] md:text-[60px] text-[36px] tracking-[4.00px] mt-1 font-bold _">Palestine</h1>
    </div>
    <div className='shadow-xl '>




<h1 className='text-3xl text-center font-bold tracking-wide	'><span className='text-[#CF991E] '>Admin</span> <span className='text-[#0056B3]'>Page</span></h1>

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