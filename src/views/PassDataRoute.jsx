import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getdata } from '../API/api'
import Details from '../components/Detailspage/Details'
import Signin from "./../Admin-signinpage/Signin"
import Admin from "./../AdminPage/Admin"
import Home from './Home'
import Policy from './Policy'
import Terms from './Terms'
//  i made this whole page to pass the data to all pages through the work 
import AdvertiseProperty from "./../components/AdvertiseProprtiespage/AdvertiseProperty"
import About from './About'
import Contactus from './Contactus'
import Properties from './Properties'
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
      <Route path="/property" element={<Properties/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/properties/post/:title" element={<Details />} />
      <Route path="/create" element={<AdvertiseProperty/>}/>
      <Route path="/adminsignin" element={<Signin/>}/>
      <Route path="/admin" element={<Admin/>}/>
      
    </Routes>
    </BrowserRouter>
    </LandContext.Provider>

    </div>
  )
}

export default PassDataRoute
