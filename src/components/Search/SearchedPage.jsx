import React from 'react'
import Properties from '../../views/Properties'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar';
import FindP from '../FindP';
import AllOffers from '../../images/Properties/AllOffers.png';
import Pagination from '../Pagination/Pagination';


function SearchedPage() {

const location=useLocation();
const dataReceived=location.state;
console.log(dataReceived)


    return (
    <div>
 
<Properties/>
    </div>
  )
}

export default SearchedPage