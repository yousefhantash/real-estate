import React, { useContext } from 'react'
import "./OverView.css";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Ow3Rent from "../../images/Recentlyaddedproperties/Home-OverView/OW3rent.png";
import { LandContext } from '../../views/PassDataRoute';

function Renting() {

  const data = useContext(LandContext);
  const navigate=useNavigate()
    
  
  const searched = () => {
      const searchedData = data.filter((item) => {
        return (
          (item.offerType === "For Rent")
        );
        
      }
    ); 
    setTimeout(() => {
      navigate(`/searched/${"ForRent"}`,{state:searchedData})

    }, 0);

    console.log(searchedData); 
  };




  return (
    <div className='bg-white shadow p-6 flex flex-col items-center hover:scale-110 duration-300 justify'>
    <img src={Ow3Rent} alt="Rent a property" className='mx-auto'/>
    <h2 className='text-center font-bold text-lg'>Renting a property</h2>
    <p className=' mx-14 pb-4'>
    We are working hard to provide a
property for you to rent in an easier and
faster way, one place for everyone in
which to combine the owner and the
tenant.
    </p>
<button onClick={searched} className="px-10 py-2 bg-custom-blue rounded text-white hover:bg-blue-400 transition duration-300">
  Find a property to rent
</button>
  </div>
  )
}

export default Renting