import React, { useEffect } from 'react'
import FindP from '../components/FindP'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'
import Platform from '../components/Platform'
import PropertyList from "../components/Properitylisthomepage/PropertyList"
import OverView from '../components/RealEstateOverView/OverView'
import RecaddedData from '../components/Recently_Added/RecaddedData'

  export default function Home() {
    useEffect(()=>{    localStorage.clear()
    },[])
  return (
    
    <div>
      <Navbar/>
      <FindP/>
      <Platform/>
      <PropertyList/>
      <RecaddedData/>
      <OverView/>
      <Footer/>

    </div>
  )
}


