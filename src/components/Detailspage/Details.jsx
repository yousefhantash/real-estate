import React, { useContext } from 'react'
import Navbar from '../Navbar'
import "./details.css"
import { useLocation } from 'react-router-dom'
import item1 from "../../images/Recentlyaddedproperties/Home-OverView/images.jpeg";
import PropsItem from '../Recently_Added/PropsItem';
import { LandContext } from '../../views/PassDataRoute';
import DetailsBdoy from './DetailsBdoy';

function Details(props) {
  //used use location to take the item from the dummy json from Addedproperties.jsx page and we used the state there in the NavLink for the details button to pass the data here using uselocation
const location=useLocation()
const data=useContext(LandContext)
const item=location.state

const RealData=data.filter((product)=>{
 return product.propertyType==item.propertyType||product.city==item.city
})

  return (
<>
<div className='small-bg-city'></div>
<div className='mx-auto w-[50%]'>
{/*  */}


<h1 className="text-center mt-[40px] mb-[15px] text-custom-midblue capitalize ">{item.address} [Property ID {item.propertyId}]  </h1>
<p className='text-center '>{item.description}</p>
<img src={item1} alt="" className='mx-auto my-[30px] md:w-[301px] md:h-[341px]' />
<DetailsBdoy item={item}/>  


{/**/}



<h1 className='font-semibold mt-10 pt-10  text-2xl text-custom-darkblue'>Related Properties</h1>
{RealData.slice(0,3).map((ele)=>(
<PropsItem key={ele.propertyId} item={ele}/>
))}


<div className="text-[14px] w-full mx-auto  mt-[0px] mb-[10px] pt-[20px] pb-[20px] text-center text-gray-600 bg-white rounded-b-xl">
        © 2024 <span className='text-blue-600 py-[8px] hover:text-sky-300 '>Palestine.</span> All rights reserved.
      </div>
</div>
</>
)
}

export default Details
