import React, { useContext, useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminPage from './AdminPage';
import updateData from '../API/Put';
import PropsItem from '../components/Recently_Added/PropsItem';
import { LandContext } from '../views/PassDataRoute';
import Pagination from '../components/Pagination/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function Admin() {
  const data = useContext(LandContext);
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const [currentPage, setCurrentPage] = useState(parseInt(getQueryParam('page')) || 1);

  const listingsPerPage = 7;
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




  const handleAccept = (id) => {
    const resp = updateData(``, { isApproved: true });
    // Logic for handling accept
  };

  const handleRefuse = () => {
    // Logic for handling refuse
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto">
        <AdminPage />
        <p className="font-bold text-lg my-10 text-[#0056B3] tracking-widest">
          Property Advertise Requests:
        </p>

        {currentListings.map((item) => (
          <React.Fragment key={item.propertyId}>
            <PropsItem item={item} />
            <div className="flex justify-center my-1 ">
              <button
                onClick={() => handleAccept(item.propertyId)}
                className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-400 duration-300 text-white"
              >
                Accept
              </button>

              <button
                onClick={handleRefuse}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-400 duration-300 text-white"
              >
                Refuse
              </button>
            </div>
          </React.Fragment>
        ))}

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default Admin;
