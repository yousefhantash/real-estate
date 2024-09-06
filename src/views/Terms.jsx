import React, { useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar'

function Terms() {

  useEffect(()=>{    localStorage.clear()
  },[])
  return (
    <div>
    <Navbar/>
    <div className=' bg-customprivacy small-bg-city'></div>
    <div className='bg-customprivacy p-24 flex flex-col '>
      <div className='bg-customprivacy px-24 py-10 flex flex-col'>
          
            <h1 className=" text-3xl font-bold mb-8 text-[#0056B3]">Terms and Use</h1>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Right to enter the site</h2>
            <p className="text-left text-[#6C757D] text-base">
            We have the absolute right to prevent or restrict anyone from entering our site at any time,
             or to prevent access to our site through any other website on the Internet through effective link points and without stating the reasons behind this.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Effective link points</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            This site may contain effective links that take you to other sites, whether they are governmental or non-governmental sites,
             whose systems for protecting information and ensuring privacy may differ from ours, so we are not responsible for the contents of those sites or for their privacy guarantee systems, but we recommend the necessity to Review their privacy guarantee regulations            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Compensation</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            Any losses resulting from the violation of the visitor, or any person on his behalf, of the terms and conditions of this website related to the use of this website, including sending or publishing the information on the site
            , shall be the responsibility of that visitor alone, so that the Palestine platform will not be responsible for Any compensation, fees, expenses or attorneys' fees, whatever their origin or source.
            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Applicable law</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            The provisions of the Palestinian law shall apply to every use of this website, including the terms and conditions contained therein. The Palestinian courts shall have the mandate to hear all disputes that may arise from this use            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Modification and change</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            This website, including its terms and conditions, is subject to modification and change from time to time. Therefore, you should follow these amendments as they govern your visit to this site. Where we have the full right to suspend or amend any information or feature at any time without the need for notice or notification,
             and in this case the Palestine Platform will not bear any responsibility or dependency, whatever its origin or source.            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Irregularities</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            It is forbidden, under penalty of criminal prosecution, to engage in fraudulent actions that would lead to unlawful entry to the site or use of the site’s
             system for purposes other than those for which it was designated, or to engage in actions that would prevent the legitimate entry of site visitors or destroy or tamper with the information on the site.            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Cultural property</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            Palestine platform is the sole owner of all copyrights and other cultural rights (trademarks, patents, etc. ...)
             of any elements on the site. Every element of the site is protected by copyright law, unless clearly expressed. No copy of any element on the site can be copied or distributed for any purpose without clear authorization from the Palestine Platform.            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Outward force</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            Palestine Platform will not be responsible for any deficiency in its services, especially private property rights,
            or this disclaimer, when any matter outside of its control is involved. But without being limited to wars or terrorist acts, weather conditions or any position by any government or on any other telecommunications operator or any other party outside the scope of the responsibility of the Palestine Platform.   </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">The information</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            The Palestine Platform provides information on its website with the aim of reviewing it and knowing "unless that information is specific". This information contains details of the Palestine Platform services, press releases, news clippings contained in local newspapers, as well as services and promotional offers ... etc. The Palestine Platform will try hard to provide all this information to you in a timely manner, without delay, and as accurately as possible.
            Some errors may appear and this may happen by mistake, despite the platform's best efforts to publish information correctly and accurately, and the platform will correct these errors as soon as it is discovered. Therefore, the platform will not be held responsible for its commitment to compensate for any damages or losses arising directly or indirectly due to any information on the site, even if that information was wrong or inadvertently lost. All information on this website is of a general nature and is not intended to address the circumstances or special affairs of any specific individual or entity
            This information does not necessarily have to be comprehensive, accurate, complete and contains the latest developments and variables, and sometimes it may be linked to external sites outside the control of the Palestine Platform on it, and therefore the Palestine Platform does not bear any responsibility or obligation in this regard. This information on the site, and the related services and offers, may change from time to time without prior notice            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">User Generated Content</h2>
            <p className="mb-4 text-left text-[#6C757D] text-base">
            The user bears sole responsibility for all the information, data and texts that you publish (the transmitted content). The user is also fully responsible for all the provided content that he uploads, publishes, sends by e-mail, transmits or provides it in any other way.
             The Palestine platform does not bear any responsibility for the provided content and you alone are responsible for any obligation arising from the publication of the submitted content or what is related to it in any way through the site. Moreover, Palestine Platform does not control the content and does not guarantee the nature, accuracy, completeness, or quality of the content or that you will not be exposed to any content in an annoying, inappropriate or unwanted manner. The Palestine Platform reserves the right to delete the contents at any time, including but not limited to any content that the Palestine Platform decides that, even if the reservation is on its part only, is offensive, rude or unacceptable.            </p>
            
            <h2 className="text-xl font-bold mt-6 mb-2 text-left">Ownership of the submitted content</h2>
            <p className='mb-4 text-left text-[#6C757D] text-base'>
            By posting the submitted content, you grant Palestine Platform a global, non-exclusive license that can be customized, prepaid, not subject to a royalty fee, and a permanent and irrevocable license.
             In order to publicly use and copy the submitted content, display, publish and modify it. This license includes the right to produce other works derived from the submitted content or to include this content presented in other works or to license it to others.            </p>
          </div>
      

  </div>
    <Footer/>
</div>
  
  )
}

export default Terms
