import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { LandContext } from '../views/PassDataRoute';
import { useNavigate } from 'react-router-dom';


function FindP() {
  const data = useContext(LandContext);
const navigate=useNavigate()
  const onSubmit = (values) => {
    const searchedData = data.filter((item) => {
      return (
        (values.city === "" || item.city === values.city) &&
        (values.property === "" || item.propertyType === values.property) &&
        (values.offerType === "" || item.offerType === values.offerType)
      );
      
    }
  );

  navigate(`/property/${values.city}&${values.property}&${values.offerType}`, 
  {state:searchedData})
  window.scrollTo(0, 0)
    console.log(searchedData); 
  };



  return (
    <div className="flex items-center justify-center bg-[#DEEFF9] small-bg-city bg-no-repeat bg-bottom h-[280px]  w-[full] ">

        <div className="min-h-[77px]  flex flex-col items-start gap-4 ">

            <p className=" text-[#646D7C] text-2xl ">
            Find a property...
            </p>
          
    <Formik
      initialValues={{
        city: '',
        property: '',
        offerType: '',
      }}
      onSubmit={(values) => {
onSubmit(values)      }}
    >
      {() => (
        <Form className="grid grid-cols-2 lg:flex lg:justify-center gap-8 rounded px-3.5 py-4 border bg-white">
          <Field
            as="select"
            id="CityField"
            name="city"
            className="w-40 h-9 rounded border text-[#6C757D]"
          >
            <option value="">All Cities</option>
            <option value="Southern Triangle">  Southern Triangle  </option>
            <option value="Northern Triangle">  Northern Triangle  </option>
            <option value="Haifa and Carmel region">  Haifa and Carmel region  </option>
            <option value="Northern District ">  Northern District  </option>
            <option value="Golan Heights">  Golan Heights  </option>
            <option value="Jericho">  Jericho  </option>
            <option value="Hebron">  Hebron  </option>
            <option value="Jerusalem">  Jerusalem  </option>
            <option value="Bethlehem">  Bethlehem  </option>
            <option value="Jenin">  Jenin  </option>
            <option value="Ramallah">  Ramallah  </option>
            <option value="Salfit">  Salfit  </option>
            <option value="Tubas">  Tubas  </option>
            <option value="Gaza Strip">  Gaza Strip  </option>
            <option value="Qalqilya">  Qalqilya  </option>
            <option value="Nablus">  Nablus  </option>
            <option value="halhul"> halhul </option>

          </Field>

          <Field
            as="select"
            id="ProparitesField"
            name="property"
            className="min-w-40 h-9 rounded border text-[#6C757D]"
          >
            <option value="">All Properties</option>
            <option value="Building"> Building </option>
            <option value="Apartment">Apartment</option>
            <option value="Villa"> Villa </option>
            <option value="Land"> Land </option>
            <option value="Shop"> Shop </option>
            <option value="Office"> Office </option>
            <option value="House"> House </option>
          </Field>

          <Field
            as="select"
            id="OfferTypeField"
            name="offerType"
            className="min-w-40 h-9 rounded border text-[#6C757D]"
          >
            <option value="">All Offers</option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </Field>

          <button
            type="submit"
            className="min-w-40 h-9 rounded bg-[#0E88E2] hover:bg-[#40aeff] duration-150 text-white"
          >
            Search
          </button>
        </Form>
      )}
    </Formik>

        </div>


    </div>
     
  )
}


export default FindP ;