import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminPage from './AdminPage';
import updateData from '../API/Put';

function Admin() {

  const handleAccept = (id,) => {
     const resp=updateData(``,{isApproved:true})
    // Logic for handling accept
  };

  const handleRefuse = () => {

  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto">
        <AdminPage />
          <p className="font-bold text-lg my-10 text-[#0056B3] tracking-widest">
            Property Advertise Requests:
          </p>
        <div className="shadow-xl p-4">

          <div className="grid grid-cols-1 md:grid-cols-8 gap-4 px-3 py-3 border-r-8 border-custom-blue items-center my-[2em]">

            <div className="col-span-2">Property Name</div>
            <div className="col-span-2">Property Description</div>
            <div className="col-span-1">Other Info</div>
            <div className="col-span-1">Additional Info</div>
            
            <div className="col-span-1 flex justify-center md:justify-end space-x-2">
              <button
                onClick={handleAccept}
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
          </div>
        </div>

        {/*  */}


      </div>
    </>
  );
}

export default Admin;
