import React from 'react'
import "./OverView.css";
import { Link, NavLink } from 'react-router-dom';
import Ow3Rent from "../../images/Recentlyaddedproperties/Home-OverView/OW3rent.png";

function Renting() {
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
        <NavLink  to="">
<button className="px-10 py-2 bg-custom-blue rounded text-white hover:bg-blue-400 transition duration-300">
  Find a property to rent
</button>
</NavLink >
  </div>
  )
}

export default Renting