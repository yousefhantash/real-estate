import React, { createContext, useEffect, useState } from 'react'
import RecentlyAdded from './RecentlyAdded.jsx';
import RealestateOverView from './../RealEstateOverView/OverView.jsx'
import axios from 'axios';
import error404Image from './../../images/Recentlyaddedproperties/error404.png';


// to send the data from dummy json in here to the addedproprties

function RecaddedData() {
 



  return (
     <>
     <RecentlyAdded />
    <RealestateOverView />  
    </>
  )
}

export default RecaddedData