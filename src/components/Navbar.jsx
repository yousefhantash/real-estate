import React from 'react';

function Navbar() {
  return (
    
<nav className=' flex justify-center w-[full] rounded-t-lg bg-white min-h-[94px]' >
  
<div className='  gap-44 flex justify-center items-center  '>

<div className="ml-1.5 flex items-start xl   ">
<a className="text-[#CF991E] sm:text-[23px] md:text-[25px] text-[27px] font-bold "> ME</a>
<a className="text-[#0056B3] sm:text-[32px] md:text-[34px] text-[36px] tracking-[4.00px] mt-1 font-bold _">Palestine</a>
</div>

<ul className='flex justify-center items-center gap-9'>
  <li><a className='text-[#0056B3] font-medium '>Home</a></li>
  <li><a className='text-[#6C757D]'>Properties</a></li>
  <li><a className='text-[#6C757D]'>Conect Us</a></li>
</ul>

<div className="flex justify-center gap-2">
 
  <button className="min-w-[135px] min-h-[35px] text-[#6C757D] border rounded " >
   Languages
  </button>

  <button className="w-[200px] h-[34px] bg-[#FF7900] text-white rounded">
    Advertise a Property
  </button>

</div>
</div>
</nav>
    
  )
}

 export default Navbar ; 