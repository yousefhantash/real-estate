import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LandContext } from "../../views/PassDataRoute";
import { propertiesType } from "../Proprties comp/ProprtiesType";

export default function Footer(){
  const data=useContext(LandContext)
  const navigate=useNavigate();
  const [dataproperty,setDataProperty]=useState([]);

  const getDataByType = (propType) => {
    const cityData = data.filter((item) => propType === item.propertyType);
    setDataProperty(cityData);
    setTimeout(() => {
      navigate(`/property/${propType}`, { state: cityData });
    }, 0);
      window.scrollTo(0, 0)

  };

   const scrollTop=()=>{
    window.scrollTo(0, 0)
  }
    return (
      
    <div className="m-0 p-0 box-border">
      <footer className="w-full bg-customBeige mx-auto p-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        <div className='ml-[37px] px-[15px]'>
          <h2 className="text-[24px] mb-[8px] text-customDarkGray">Contact Us</h2>
          <p className="mb-[16px] text-gray-600">We are here to help and answer your questions, and we are always happy to hear from you.</p>
          <p className="mb-[16px] text-customDarkGray">Email:<br/> support@palestine.io</p>
          <div className="flex space-x-4 py-[8px]">
            <a href="https://www.linkedin.com/company/palestine-io"><img src='https://palestine.io/images/linkedin-copy.svg' className="fab fa-linkedin w-[24px] h-[24px]" alt="at"></img></a>
            <a href="https://facebook.com/palestine.io"><img src='https://palestine.io/images/facebook-circular-logo.svg' className="fab fa-facebook w-[24px] h-[24px]"alt="at" ></img></a>
          </div>
        </div>
        <div className='mx-[37px] px-[15px]'>
  <h2 className="text-[24px] text-customDarkGray mb-[8px]">Properties</h2>
  <nav>
    <ul className="space-y-2 pb-[20px]">

      {propertiesType.map((item,index)=>{return <button key={item.index} className="text-gray-600 hover:underline py-[4px] w-full" onClick={()=>{getDataByType(item.Type)}}><li className="" >{item.Type}</li></button>})}
    </ul>
  </nav>
</div>
        <div className='mx-[37px] px-[15px]'>
  <h2 className="text-[24px] text-customDarkGray mb-[8px]">Website</h2>
  <nav>
    <ul className="space-y-2">
      <li><NavLink onClick={scrollTop} to="/about" className="text-gray-600 hover:underline py-[4px]">About</NavLink></li>
      <li><NavLink onClick={scrollTop} to="/policy" className="text-gray-600 hover:underline py-[4px]">Privacy Policy</NavLink></li>
      <li><NavLink onClick={scrollTop} to="/terms" className="text-gray-600 hover:underline py-[4px]">Terms and Use</NavLink></li>
      <li><NavLink onClick={scrollTop} to="/contact" className="text-gray-600 hover:underline py-[4px]">Contact Us</NavLink></li>
    </ul>
  </nav>
</div>
        <div className='mx-[37px] px-[15px] mr-[37px] w-[80%]'>
          <h2 className="text-[24px] text-customDarkGray mb-[8px]">Subscribe</h2>
          <p className="mb-[16px] text-gray-600">Enter your email to get notified about our new Real Estate.</p>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Email" className="w-full px-[12px] py-[6px] border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            <button type="submit" className="px-[12px] py-[6px] bg-blue-500 text-white rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700">Subscribe</button>
          </form>
        </div>
      </div>
      </footer>
      <div className="text-[14px] w-full mx-auto  mt-[0px] mb-[10px] pt-[20px] pb-[20px] text-center text-gray-600 bg-white rounded-b-xl">
        © 2024 <span className='text-blue-600 py-[8px] hover:text-sky-300 '>Palestine.</span> All rights reserved.
      </div>
    </div> 
    );
    }
    