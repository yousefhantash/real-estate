import React from 'react';

function Platform() {
  return (
    <div className="bg-[#f5f9ff] grid grid-cols-1 lg:grid-cols-2 justify-items-center w-full px-4 md:px-10">
      
      <div className="flex items-start justify-center h-auto lg:h-[620px] w-full lg:w-[435px] my-10 lg:my-20 hidden lg:flex">
        <div className="relative w-[240px] md:w-[310px] h-[240px] md:h-[310px] border-4 border-[#5C94B4] rounded-tr-lg">
          <div className="absolute w-full h-full rounded-tr-lg" style={{ top: '20px', left: '40px' }}>
            <img src="./building.png" alt="Building" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3.5 self-center h-auto lg:h-[620px] w-full lg:w-[435px] my-10 lg:my-20">
        
        <div className="text-xl md:text-2xl font-semibold text-[#5C94B4]">
          Palestine Real Estate Platform
        </div>
        
        <div className="text-sm md:text-base text-[#455761]">
          The search for future investment is one of the difficult and <br className="hidden md:block"/>
          risky tasks for both the buyer and the seller, and this is <br className="hidden md:block"/>
          why the need for a platform that helps in searching and <br className="hidden md:block"/>
          knowing the market better and with greater impartiality <br className="hidden md:block"/>
          has emerged.
        </div>
        
        <div className="text-sm md:text-base text-[#455761]">
          The Palestine Real Estate Platform is a platform<br className="hidden md:block"/>
          specialized in real estate marketing for all types of assets<br className="hidden md:block"/>
          inside Palestine. It allows investors and interested parties<br className="hidden md:block"/>
          safe access and knowledge of the market in an impartial<br className="hidden md:block"/>
          manner. It also provides everyone with the opportunity to<br className="hidden md:block"/>
          advertise and market their real estate assets, follow-up<br className="hidden md:block"/>
          and organize them, and facilitate the search for them.
        </div>
        
        <div className="text-sm md:text-base text-[#455761]">
          The first task of the platform is to deliver your ad to the <br className="hidden md:block"/>
          largest number of views and give your ad enough time to <br className="hidden md:block"/>
          appear.
        </div>
        
        <div className="text-sm md:text-base text-[#455761]">
          Finally, we are trying hard to make the Palestine real<br className="hidden md:block"/>
          estate platform an open market for everyone by providing<br className="hidden md:block"/>
          a set of electronic services that help you to have a greater<br className="hidden md:block"/>
          understanding of the market, improve the quality of your<br className="hidden md:block"/>
          advertisement, and reach all those interested inside and<br className="hidden md:block"/>
          outside Palestine.
        </div>

      </div>
    </div>
  );
}

export default Platform;
