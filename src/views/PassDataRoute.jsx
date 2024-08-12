import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Details from '../components/Detailspage/Details'
import axios from 'axios';
import error404Image from './../images/Recentlyaddedproperties/error404.png';
import { getdata } from '../API/api';


//  i made this whole page to pass the data to all pages through the work 

export const LandContext=createContext();

function PassDataRoute() {
     // data for the data from dummby json and the loading to wait till the page till its load and then it appers and the error if there is a problem in the link or in the data itself
  const [data, setData] = useState([]);
  const [loading,Setloading]=useState(true);
  const [error, setError] = useState(null);


  // we got here the fake api calls from dummby json 

  useEffect(() => {
const getData=async()=>{
try{

  const result=await getdata();
  setData(result);
}
catch{
  setError("Failed to get data")
}
finally {
  Setloading(false);
}
}
getData();

  }, []);

console.log(data)
 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
           <LandContext.Provider value={data}> 
                    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties/post/:title" element={<Details />} />
    </Routes>
    </BrowserRouter>
    </LandContext.Provider>

    </div>
  )
}

export default PassDataRoute
