import React, { useContext, useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import { LandContext } from '../views/PassDataRoute'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import PropsItem from '../components/Recently_Added/PropsItem';

function Allproprties() {
  const data=useContext(LandContext)
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const [currentPage, setCurrentPage] = useState(parseInt(getQueryParam('page')) || 1);

  const listingsPerPage =4;
  const totalPages = Math.ceil(data.length / listingsPerPage);
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = data.slice(indexOfFirstListing, indexOfLastListing);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const page = parseInt(getQueryParam('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);
  return (
    <div>
        <AdminNavbar/>
<div className='w-[70%] mx-auto'>

        <p className="font-bold text-lg my-10 text-[#0056B3] tracking-widest ">
All Properties
        </p>
        {currentListings.length === 0 ? (
          <p className="text-center text-gray-600">No properties available.</p>
        ) : (
          <>
            {currentListings.map((item, index) => (
              <PropsItem item={item} key={item.propertyId} />
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