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
  const data = useContext(LandContext);
  const location = useLocation();
  const navigate = useNavigate();

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
      <img className="w-full" src={AllOffers} alt="at" />
      <div className="container mx-auto p-4">
        {currentListings.length === 0 ? (
          <p className="text-center text-gray-600">No properties available.</p>
        ) : (
          <>
            {currentListings.map((item, index) => (
              <PropsItem item={item} key={item.id} />
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