import React from 'react'
import FindP from '../components/FindP'
import Navbar from '../components/Navbar'
import Platform from '../components/Platform'
import Footer from '../components/Footer/Footer'
import RecaddedData from '../components/Recently_Added/RecaddedData'
import PropertyList from "../components/Properitylisthomepage/PropertyList"


  export default function Home() {
  return (
    
    <div>
      <Navbar/>
      <FindP/>
      <Platform/>
      <PropertyList/>
      <RecaddedData/>
      <Footer/>

    </div>
  )
}


