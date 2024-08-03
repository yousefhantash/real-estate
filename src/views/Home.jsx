import React from 'react'
import Navbar from '../components/Navbar'
import FindP from '../components/FindP'
import Platform from '../components/Platform'
import withWarpper from '../HOC/withWarpper'



  function Home() {
  return (
    <div>
      <Navbar/>
      <FindP/>
      <Platform/>
    </div>
  )
}


const WarppedHome = withWarpper(Home) ;
export default WarppedHome ;