import React from 'react'
import Ow1Search from "../../images/Recentlyaddedproperties/Home-OverView/OW1search.png";
import "./OverView.css";
import { Link, NavLink } from 'react-router-dom';

function Buying() {
  return (
       <div className='bg-white shadow p-6 flex flex-col items-center hover:scale-110 duration-300'>
    <img src={Ow1Search} alt="Buying a property" className='mx-auto'/>
    <h2 className='text-center font-bold text-lg'>Buying a property</h2>
    <p className=' mx-14 pb-8'>
      Find the property of the future with a quick search engine experience and a simple interface that you won't find anywhere else.
    </p>
    <NavLink  to="">
<button className='my-14  px-10 py-2 bg-custom-blue rounded text-white hover:bg-blue-400 duration-300'>
      Search for a Property
    </button>
    </NavLink >
  </div>

  )
}

export default Buying