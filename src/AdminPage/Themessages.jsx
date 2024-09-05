import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Get from '../API/Get'

function Themessages() {
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Get("/api/Property/Admin/GetAllContacts"); 
        if (Array.isArray(result)) { 
          setData(result);
        } else {
          setData([]); 
        }
      } catch (error) {
        setData([]); 
      }
    };

    fetchData();
  }, []);


  return (
    <div className='mb-20'>
        <AdminNavbar/>
        <div className='mx-auto w-[70%] container mx-auto '>

        <p className="font-bold text-lg my-10 text-[#0056B3] tracking-widest">
Notifications
        </p>

        <div className=''>

        {data.slice().reverse().map((item) => {
  return ( 
    <div key={item.name.concatId} className='grid bg-white mt-24 shadow-2xl'>
      <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-1 px-3 py-3 border-r-8 border-custom-blue items-center">
        <div>
          <h1 className='font-bold text-lg text-[#0056B3] tracking-widest'>Details</h1>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
          <p>City: {item.city}</p>
        </div>
        <div>
          <h1 className='font-bold text-lg text-[#0056B3] tracking-widest'>The message:</h1>
          <p>{item.message}</p>
        </div>
        <div>
          <h1 className='font-bold text-lg text-[#0056B3] tracking-widest'>Submitted at:</h1>
          <p>{item.submittedAt}</p>
        </div>
      </div>
    </div>
  );
})}

    </div>
    </div>
    </div>
  )
}

export default Themessages