import React, { useContext, useEffect, useRef, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { LandContext } from '../views/PassDataRoute'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import PropsItem from '../components/Recently_Added/PropsItem';
import Delete from '../API/Delete';

function Allproprties() {
  const [data,setData]=useState(useContext(LandContext))
  const originaldata=useContext(LandContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [propertyId, setPropertyId] = useState();
const ref=useRef()
  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };




  const handleDelete=async(id)=>{
    try{

      setData((prevData) => prevData.filter((item) => item.propertyId !== id));
      const resp=await Delete(`api/Property/Admin/DeleteProperty/${id}`)
    }
catch(error){


}
  }

  const [currentPage, setCurrentPage] = useState(parseInt(getQueryParam('page')) || 1);

  const listingsPerPage =4;
  const totalPages = Math.ceil(data.length / listingsPerPage);
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = data.slice(indexOfFirstListing, indexOfLastListing);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

const searchByid=(e)=>{
  e.preventDefault(); 
  if(propertyId!==""){
    setData(originaldata.filter((item) => item.propertyId.toString() === propertyId)); 
    }else{
setData(originaldata)
  }
setPropertyId("")
}


  useEffect(() => {
    const page = parseInt(getQueryParam('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);
  return (
    <div>
        <AdminNavbar/>

        <form onSubmit={searchByid} className='flex justify-center '>
 <input type="text" placeholder='  Enter The Property Id:' className='rounded-md mr-[10px] border-black border-2' value={propertyId} onChange={(e)=>{setPropertyId(e.target.value)}}/>
  <input type="submit" value="search" className='bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-700 duration-300 text-white cursor-pointer'/>
</form>

<div className='w-[70%] mx-auto'>

        <p className="font-bold text-lg my-10 text-[#0056B3] tracking-widest ">
All Properties
        </p>
        {currentListings.length === 0 ? (
          <p className="text-center text-gray-600">No properties available.</p>
        ) : (
          <>
            {currentListings.map((item, index) => (
            <>
            <PropsItem item={item} url={`/property/Admin/${item.name}`} key={item.propertyId} />
            <div className='flex justify-center mb-4'>

            <button
                onClick={() =>handleDelete(item.propertyId)}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-400 duration-300 text-white"
                >
                Delete
              </button>      
                </div>      </>
            ))}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              />
          </>
        )}
    </div>
        </div>
  )
}

export default Allproprties