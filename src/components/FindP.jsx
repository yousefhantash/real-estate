import React from 'react';


function FindP() {
  return (
    <div className="flex items-center justify-center bg-[#DEEFF9] h-[280px]  w-[full] ">

        <div className=" min-h-[77px]  flex flex-col items-start gap-4 ">

            <p className=" text-[#646D7C] text-2xl ">
            Find a property...
            </p>
            <div  className="flex justify-center gap-8	min-w-[156px] min-h-[36px]  rounded  px-3.5 py-4  border bg-white ">
            
            <select id="CityField"  className="w-40  h-9 rounded border text-[#6C757D] ">
              <option value="arabic">All Cities</option>
            </select>
            <select id="LocationField"  className="min-w-40 h-9  rounded border text-[#6C757D]">
              <option value="arabic">All Locations</option>
            </select>
            <select id="ProparitesField"  className="min-w-40 h-9  rounded border text-[#6C757D]">
              <option value="arabic">All Proparites</option>
            </select>
            <select id="OfferTypeField"  className="min-w-40 h-9  rounded border text-[#6C757D]">
              <option value="arabic">All Offers</option>
            </select>
       
                <button  className="min-w-40 h-9 rounded  bg-[#0E88E2] text-white">Search</button>
            </div>
     

        </div>


    </div>
     
  )
}


export default FindP ;