import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FindP from '../components/FindP';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination/Pagination';
import PropertyList from '../components/Properitylisthomepage/PropertyList';
import PropsItem from '../components/Recently_Added/PropsItem';
import AllOffers from '../images/Properties/AllOffers.png';
import { LandContext } from './PassDataRoute';

export default function Properties() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const data=location.state;

  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const [currentPage, setCurrentPage] = useState(parseInt(getQueryParam('page')) || 1);

  const listingsPerPage = 4;
  const totalPages = Math.ceil(data.length / listingsPerPage);
  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = data.slice(indexOfFirstListing, indexOfLastListing);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  useEffect(() => {
    const page = parseInt(getQueryParam('page')) || 1;
    setCurrentPage(page);
  }, [location.search]);

  return (
    <div>
      <Navbar />
      <FindP />
      <div className='flex flex-col justify-center items-center bg-slate-400 p-6'>
        <h1 className='text-white text-[20px] p-4'>Properties</h1>
        <h1 className='text-white text-[40px] p-4'>{}</h1>
        <p className='text-white p-4'></p>
      </div>      <div className="container mx-auto p-4">
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
      <PropertyList />
      <Footer />
    </div>
  );
}