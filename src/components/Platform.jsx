import React from 'react'

function Platform() {
  return (
    <div className= "bg-[#f5f9ff] grid grid-cols-2 justify-items-center  w-[1310px] " >
        
        <div className="flex items-start justify-center  h-[620px] w-[435px] my-20  ">

          <div className="relative  w-[310px] h-[310px] border-4 border-[#5C94B4] rounded-tr-lg" >
            
            <div className="absolute w-[310px] h-[310px] rounded-tr-lg" style={{ top: '20px', left: '40px' }}>
               <img src="./building.png" alt=""  className="w-[310px] h-[310px] object-cover" />   
            </div>
            
          </div>

        </div>



      <div className=" flex flex-col items-start gap-3.5 self-center  h-[620px] w-[435px] my-20 ">
  
      <div className="text-2xl font-semibold text-[#5C94B4]">
          Palestine Real Estate Platform
        </div>
        
        <div className="text-base text-[#455761]">
          The search for future investment is one of the difficult and <br />
          risky tasks for both the buyer and the seller, and this is <br />
          why the need for a platform that helps in searching and <br />
          knowing the market better and with greater impartiality <br />
          has emerged.
        </div>
        
        <div className="text-base text-[#455761]">
          The Palestine Real Estate Platform is a platform<br />
          specialized in real estate marketing for all types of assets<br />
          inside Palestine. It allows investors and interested parties<br />
          safe access and knowledge of the market in an impartial<br />
          manner. It also provides everyone with the opportunity to<br />
          advertise and market their real estate assets, follow-up<br />
          and organize them, and facilitate the search for them.
        </div>
        
        <div className="text-base text-[#455761]">
          The first task of the platform is to deliver your ad to the <br />
          largest number of views and give your ad enough time to <br />
          appear.
        </div>
        
      <div className="text-base text-[#455761]">
          Finally, we are trying hard to make the Palestine real<br />
          estate platform an open market for everyone by providing<br />
          a set of electronic services that help you to have a greater<br />
          understanding of the market, improve the quality of your<br />
          advertisement, and reach all those interested inside and<br />
          outside Palestine.
        </div>


      </div>







    </div>

    


  )
}

// const WarppedPlatform = withWarpper(Platform) ;
// export default WarppedPlatform

export default Platform ; 