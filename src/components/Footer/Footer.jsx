import { NavLink } from "react-router-dom";

export default function Footer(){

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
      <li><NavLink to="/land" className="text-gray-600 hover:underline py-[4px]">Land</NavLink></li>
      <li><NavLink to="/house" className="text-gray-600 hover:underline py-[4px]">House</NavLink></li>
      <li><NavLink to="/apartment" className="text-gray-600 hover:underline py-[4px]">Apartment</NavLink></li>
      <li><NavLink to="/villa" className="text-gray-600 hover:underline py-[4px]">Villa</NavLink></li>
      <li><NavLink to="/office" className="text-gray-600 hover:underline py-[4px]">Office</NavLink></li>
      <li><NavLink to="/shop" className="text-gray-600 hover:underline py-[4px]">Shop</NavLink></li>
      <li><NavLink to="/building" className="text-gray-600 hover:underline py-[4px]">Building</NavLink></li>
    </ul>
  </nav>
</div>
        <div className='mx-[37px] px-[15px]'>
  <h2 className="text-[24px] text-customDarkGray mb-[8px]">Website</h2>
  <nav>
    <ul className="space-y-2">
      <li><NavLink to="/about" className="text-gray-600 hover:underline py-[4px]">About</NavLink></li>
      <li><NavLink to="/policy" className="text-gray-600 hover:underline py-[4px]">Privacy Policy</NavLink></li>
      <li><NavLink to="/terms" className="text-gray-600 hover:underline py-[4px]">Terms and Use</NavLink></li>
      <li><NavLink to="/contact" className="text-gray-600 hover:underline py-[4px]">Contact Us</NavLink></li>
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
    