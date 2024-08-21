import React from 'react'
import "./OverView.css";
import { Link, NavLink } from 'react-router-dom';
import Ow2Sell from "../../images/Recentlyaddedproperties/Home-OverView/OW2sell.png";

function Selling() {
  return (
    <div className='bg-white shadow p-6 flex flex-col items-center hover:scale-110 duration-300 '>

    <img src={Ow2Sell} alt="Sell a property" className='mx-auto my-2'/>
    <h2 className='text-center font-bold text-lg'>Selling a property</h2>
    <p className=' mx-14 pb-8'>
    Whether you are bidding to sell your
property in installments or opting to sell it
for cash, we can help you make a
successful sale.
    </p>           

       <NavLink  to="/create">
    <button className='my-14 px-10 py-2 bg-custom-blue rounded text-white hover:bg-orange-400 duration-300 bg-orange-500	'>
    Advertise a property          </button>
    </NavLink >
  </div>  )
}

export default Selling