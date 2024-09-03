import React, { useState } from "react";
import "./AdvertiseProperty.css";
import cityImage from "./../../assets/city-images2.svg";
import Navbar from "./../Navbar";
import { NavLink } from "react-router-dom";
import { propertiesType } from "../Proprties comp/ProprtiesType";
import { Cities } from "../Proprties comp/Cities";
const AdvertiseProperty = () => {
const [propReq,setPropReq]=useState({});





  return (
    <>
      <Navbar />
      <img src={cityImage} alt="City" className="w-full" />
      <div className="container mx-auto">
        <h1 className="form-title text-center text-2xl	my-[40px]	text-[#1a3462]">
          Advertise a Property
        </h1>
        <div className="advertise-property shadow-2xl flex justify-center	text-[#6c757d]">
          <form className=" ">
            {/* Advertiser Details Section */}
            <div className="section ">
              <h3 className="text-xl mb-[20px]">Advertiser Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <select>
                    <option>City</option>
                    {Cities.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
                    {/* Add more cities */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" placeholder="Phone" required />
                </div>
            
              </div>
            </div>

            {/* Property Details Section */}
            <div className="section">
              <h3>Property Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Offer</label>
                  <select>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Property Type</label>
                  <select>
                    <option>Choose</option>
                  {propertiesType.map((item,index)=>(<option key={index}>{item.Type}</option>))}

                    {/* Add property types */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Space</label>
                  <input type="text" placeholder="Space" />
                </div>
                <div className="form-group">
                  <label>Measurement Unit</label>
                  <select>
                    <option value="Square meter">Square meter</option>
                    {/* Add more units */}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Range Rate</label>
<input type="text" placeholder="Expected Price" />
                </div>
                <div className="form-group">
                  <label>Price Per</label>
                  <select>
                    <option>Square meter</option>
                    {/* Add more options */}
                  </select>
                </div>
                <div className="form-group">
                  <label>Currency</label>
                  <select>
                    <option>JOD</option>
                    {/* Add more currencies */}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <select>
                    <option>City</option>
                    {Cities.map((item,index)=>(<option value={item}>{item}</option>))}
                    {/* Add more cities */}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Street Name / Town" />
              </div>
              <div className="form-group">
                <label>Additional Description (Optional)</label>
                <textarea placeholder="Additional Description"></textarea>
              </div>
              <div className="form-group">
                <label>Images</label>
                <input type="file" multiple />
              </div>
            </div>

            {/* Services Section */}
            <div className="section">
              <h3>Services (Optional)</h3>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Water
                </label>
                <label>
                  <input type="checkbox" /> Electricity
                </label>
                <label>
                  <input type="checkbox" /> Internet
                </label>
                <label>
                  <input type="checkbox" /> Heating
                </label>
                <label>
                  <input type="checkbox" /> Air-conditioning
                </label>
                <label>
                  <input type="checkbox" /> Tabo
                </label>
                <label>
                  <input type="checkbox" /> Arnona
                </label>
                <label>
                  <input type="checkbox" /> Main Road
                </label>
                <label>
                  <input type="checkbox" /> Minor Road
                </label>
                <label>
                  <input type="checkbox" /> Elevator
                </label>
                <label>
                  <input type="checkbox" /> Parking
                </label>
                <label>
                  <input type="checkbox" /> Garage
                </label>
                <label>
                  <input type="checkbox" /> Swimming Pool
                </label>
                <label>
                  <input type="checkbox" /> Fence
                </label>
                <label>
                  <input type="checkbox" /> Fruitful trees
                </label>
                <label>
                  <input type="checkbox" /> Installment
                </label>
                <label>
                  <input type="checkbox" /> Balcony
                </label>
                <label>
                  <input type="checkbox" /> Garden
                </label>
                <label>
                  <input type="checkbox" /> Furnished
                </label>
                <label>
                  <input type="checkbox" /> Unfurnished
                </label>
                <label>
                  <input type="checkbox" /> Skeleton
                </label>
                <label>
                  <input type="checkbox" /> Ceiling Storage
                </label>
              </div>
            </div>

            {}
            <div className="form-group">
              <label htmlFor="agree">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <input type="checkbox" id="agree" required />I have read and
                agreed with the{" "}
                <NavLink to="/policy" className="text-[#007bff]">
                  Privacy Policy{" "}
                </NavLink>{" "}
                and{" "}
                <NavLink className="text-[#007bff]" to="/terms">
                  {" "}
                  Terms of Use{" "}
                </NavLink>
              </label>
            </div>
            <footer>
              <p>&copy; 2024 Palestine. All rights reserved.</p>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdvertiseProperty;
