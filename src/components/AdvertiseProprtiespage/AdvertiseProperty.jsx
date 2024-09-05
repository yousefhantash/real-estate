import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import cityImage from "./../../assets/city-images2.svg";
import Navbar from "./../Navbar";
import { NavLink } from "react-router-dom";
import { propertiesType } from "../Proprties comp/ProprtiesType";
import { Cities } from "../Proprties comp/Cities";
import "./AdvertiseProperty.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  city: Yup.string().required("City is required"),
  offer: Yup.string().required("Offer is required"),
  propertyType: Yup.string().required("Property type is required"),
  space: Yup.string().required("Space is required"),
  agree: Yup.bool().oneOf([true], "You must agree to the terms"),
});

const AdvertiseProperty = () => {
  return (
    <>
      <Navbar />

      <img src={cityImage} alt="City" className="w-full" />
      <div className="container mx-auto  px-5 shadow-2xl  ">
        <h1 className="form-title text-center text-2xl	my-[40px]	text-[#1a3462]">
          Advertise a Property
        </h1>
        <div className="advertise-property flex justify-center	text-[#6c757d]">
          <Formik
            initialValues={{
              email: "",
              name: "",
              phone: "",
              city: "",
              offer: "For Sale",
              propertyType: "",
              space: "",
              measurementUnit: "Square meter",
              price: "",
              pricePer: "Square meter",
              currency: "JOD",
              address: "",
              description: "",
              agree: false,
              services: [],
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
            >
            {({ setFieldValue }) => (
              <Form className="">
                {/* Advertiser Details Section */}
                <div className="section ">
                  <h3 className="text-xl mb-[20px]">Advertiser Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        />
                      <ErrorMessage name="email" component="div" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        />
                      <ErrorMessage name="name" component="div" className="error" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <Field as="select" name="city" required>
                        <option value="">City</option>
                        {Cities.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="city" component="div" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                        />
                      <ErrorMessage name="phone" component="div" className="error" />
                    </div>
                  </div>
                </div>

                {/* Property Details Section */}
                <div className="section">
                  <h3>Property Details</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Offer</label>
                      <Field as="select" name="offer">
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <label>Property Type</label>
                      <Field as="select" name="propertyType">
                        <option value="">Choose</option>
                        {propertiesType.map((item, index) => (
                          <option key={index} value={item.Type}>
                            {item.Type}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="propertyType" component="div" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Space</label>
                      <Field
                        type="text"
                        name="space"
                        placeholder="Space"
                        />
                      <ErrorMessage name="space" component="div" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Measurement Unit</label>
                      <Field as="select" name="measurementUnit">
                        <option value="Square meter">Square meter</option>
                      </Field>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Range Rate</label>
                      <Field
                        type="text"
                        name="price"
                        placeholder="Expected Price"
                        />
                      <ErrorMessage name="price" component="div" className="error" />
                    </div>
                    <div className="form-group">
                      <label>Price Per</label>
                      <Field as="select" name="pricePer">
                        <option value="Square meter">Square meter</option>
                      </Field>
                    </div>
                    <div className="form-group">
                      <label>Currency</label>
                      <Field as="select" name="currency">
                        <option value="JOD">JOD</option>
                      </Field>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <Field as="select" name="city">
                        <option value="">City</option>
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
                  <ErrorMessage name="agree" component="div" className="error" />
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
