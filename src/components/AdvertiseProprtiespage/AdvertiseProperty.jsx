import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import cityImage from "./../../assets/city-images2.svg";
import Navbar from "./../Navbar";
import { NavLink } from "react-router-dom";
import { propertiesType } from "../Proprties comp/ProprtiesType";
import { Cities } from "../Proprties comp/Cities";
import "./AdvertiseProperty.css";
import Post from "../../API/Post";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  advertiserName: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  address: Yup.string().required("Address is required"),
  propertyType: Yup.string().required("Property type is required"),
  offerType: Yup.string().required("Offer type is required"),
  space: Yup.number().required("Space is required").positive("Must be a positive number"),
  measurementUnit: Yup.string().required("Measurement unit is required"),
  price: Yup.number().required("Price is required").positive("Must be a positive number"),
  services: Yup.array().of(Yup.string()),
  agree: Yup.bool().oneOf([true], "You must agree to the terms"),
  description: Yup.string(), 

});

const AdvertiseProperty = () => {

  const SubmitData = async (data) => {
    console.log('Data inside SubmitData:', data);
    try {
      const response = await Post("/api/Property/SubmitAdvertiseRequest", data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />

      <img src={cityImage} alt="City" className="w-full" />
      <div className="container mx-auto px-5 shadow-2xl">
        <h1 className="form-title text-center text-2xl my-[40px] text-[#1a3462]">
          Advertise a Property
        </h1>
        <div className="advertise-property flex justify-center text-[#6c757d]">
          <Formik
            initialValues={{
              email: "",
              advertiserName: "",
              phone: "",
              city: "",
              address: "",
              propertyType: "",
              offerType: "Sale",
              space: "",
              measurementUnit: "sqm",
              price: "",
              description: "",
              services: "",
              agree: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              SubmitData(values);
              console.log(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form className="">
                {/* Advertiser Details Section */}
                <div className="section">
                  <h3 className="text-xl mb-[20px]">Advertiser Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage name="email" component="div" className="error  text-red-600" />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <Field
                        type="text"
                        name="advertiserName"
                        placeholder="Name"
                      />
                      <ErrorMessage name="advertiserName" component="div" className="error  text-red-600" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone</label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                      />
                      <ErrorMessage name="phone" component="div" className="error  text-red-600" />
                    </div>
                  </div>
                </div>

                {/* Property Details Section */}
                <div className="section">
                  <h3>Property Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Offer Type</label>
                      <Field as="select" name="offerType">
                        <option value="Sale">For Sale</option>
                        <option value="Rent">For Rent</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <label>Property Type</label>
                      <Field as="select" name="propertyType">
                        <option value="" hidden>Choose</option>
                        {propertiesType.map((item, index) => (
                          <option key={index} value={item.Type}>
                            {item.Type}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="propertyType" component="div" className="error  text-red-600" />
                    </div>
                    <div className="form-group">
                      <label>Space</label>
                      <Field
                        type="number"
                        name="space"
                        placeholder="Space"
                      />
                      <ErrorMessage name="space" component="div" className="error  text-red-600" />
                    </div>
                    <div className="form-group">
                      <label>Measurement Unit</label>
                      <Field as="select" name="measurementUnit">
                        <option value="sqm">Square meter</option>
                      </Field>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Price</label>
                      <Field
                        type="number"
                        name="price"
                        placeholder="Expected Price"
                      />
                      <ErrorMessage name="price" component="div" className="error  text-red-600" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <Field as="select" name="city">
                        <option hidden value="">City</option>
                        {Cities.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Street Name / Town"
                    />
                    <ErrorMessage name="address" component="div" className="error  text-red-600" />
                  </div>
        
                  <div className="form-group">
                    <label>Additional Description (Optional)</label>
                    <Field
                      as="textarea"
                      name="description"
                      placeholder="Additional Description"
                    />
                  </div>
                </div>

                {/* Services Section */}
                <div className="section">
                  <h3>Services (Optional)</h3>
                  <div className="checkbox-group">
                    {[
                      "Water",
                      "Electricity",
                      "Internet",
                      "Heating",
                      "Air-conditioning",
                      "Tabo",
                      "Arnona",
                      "Main Road",
                      "Minor Road",
                      "Elevator",
                      "Parking",
                      "Garage",
                      "Swimming Pool",
                      "Fence",
                      "Fruitful trees",
                      "Installment",
                      "Balcony",
                      "Garden",
                      "Furnished",
                      "Unfurnished",
                      "Skeleton",
                      "Ceiling Storage",
                    ].map((service, index) => (
                      <label key={index}>
                        <Field type="checkbox" name="services" value={service} />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="agree">
                    <Field type="checkbox" name="agree" />
                    I have read and agreed with the{" "}
                    <NavLink to="/policy" className="text-[#007bff]">
                      Privacy Policy
                    </NavLink>{" "}
                    and{" "}
                    <NavLink className="text-[#007bff]" to="/terms">
                      Terms of Use
                    </NavLink>
                  </label>
                  <ErrorMessage name="agree" component="div" className="error  text-red-600" />
                </div>

                <div className="form-group">
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>

                <footer>
                  <p>&copy; 2024 Palestine. All rights reserved.</p>
                </footer>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AdvertiseProperty;
