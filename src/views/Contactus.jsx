import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import { NavLink } from 'react-router-dom'

function Contactus() {
  return (
<div>
<Navbar/>
    
      <div className='small-bg-city'></div>
      

      <div className='flex justify-center p-10 sm:p-4 bg-[#f5f9ff]'>
        <div className='border  p-8 bg-white'>
           <div className='mb-5'>
            <p className='text-[#0056B3] text-3xl mb-3 '>Contact Us</p>
            <p className='text-[#6C757D] text-base '> We are here to help and answer your questions, and we are always happy to hear from you.</p>
            </div>
       

        <div className='flex flex-col gap-4 w-full'>
            <form action="" className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='mb-2 text-[#6C757D]'>Name</label>
                    <input type="text" id="name" placeholder='Name' className='border  p-2 rounded' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='mb-2 text-[#6C757D]'>Email</label>
                    <input type="email" id="email" placeholder='Email' className='border  p-2 rounded' required/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='mb-2 text-[#6C757D]'>Phone/Whatsapp</label>
                    <input type="tel" id="phone" placeholder='Phone' className='border  p-2 rounded' required/>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="city" className='mb-2 text-[#6C757D]'>City</label>
                    <select id="city" className="w-full h-9 rounded border text-[#6C757D] p-2" required>
                        <option value="all">All Cities</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="subject" className='mb-2 text-[#6C757D]'>Subject</label>
                    <select id="subject" className="w-full h-9 rounded border text-[#6C757D] p-2" required>
                        <option value="all">All subjects</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="message" className='mb-2 text-[#6C757D]'>Message</label>
                    <textarea id="message" placeholder="Your message" className='border  p-2 rounded h-24' required></textarea>
                </div>

                <div className='flex items-center gap-4 mt-4'>
                    <button type="submit" className='bg-[#007BFF] text-white p-2 mt-4 rounded h-[38px] w-[98px]'>Submit</button>
                    <input type="checkbox" id="terms" className='mt-1' required/>
                    <label htmlFor="terms">
                        I have read and agreed with the <NavLink to='/policy' className='text-blue-500 '>Privacy Policy</NavLink> and <NavLink to='/terms' className='text-blue-500 '>Terms of Use</NavLink>.
                    </label>
                </div>
               
            </form>
        </div>
    </div>
</div>
<Footer/>

</div>
  )
}

export default Contactus
