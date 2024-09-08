import { Formik , Form, Field} from 'formik'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Post from "./../API/Post"
import { ToastContainer, toast } from 'react-toastify';

function Signin() {
const navigate=useNavigate();
  const initialValue={email:"",
    password:""
  }
  const logInCheck = async (email, password) => {
    try {
      const status = await Post("api/Property/Admin/Login", { email, password });
      if (status === 200) {


        navigate("/admin/advertiesReq");
        localStorage.setItem("email", email);
        toast.success("Login successfully!"); 
      } else {
        toast.error("Invalid credentials. Please try again.");

      }
    } catch (error) {
      console.error("Login error:", error);

      navigate("/"); 
    }
  };
  useEffect(()=>{
    localStorage.clear()
  },[])


  
    return (
    <div>
   
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-start ml-1.5 xl   justify-center mt-[2em]  ">
    <h1 className="text-[#CF991E] sm:text-[20px] md:text-[30px] text-[40px] font-bold "> RE</h1>
    <h1 className="text-[#0056B3] sm:text-[20px] md:text-[30px] text-[40px] tracking-[4.00px] mt-1 font-bold ">Palestine</h1>

    </div>
    <NavLink to="/" className="text-[#0056B3]  tracking-[4.00px] mt-1 font-bold ">home</NavLink>

      <div className=' shadow-xl border p-20 rounded-md'>
      <div className='text-center  my-[20px] text-[#CF991E] text-[30px]  font-bold text-2xl'> Login</div>
       <Formik className=""
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email ) {
           errors.email = <p className='text-red-600 font-bold '>Required</p>;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if(!values.password){
            errors.password = <p className='text-red-600 font-bold '>Required</p>;
          }else if(values.password.length < 8){      errors.password = <p className='text-red-600 font-bold '>Password must be at least 8 characters long</p>;
        }
          return errors;
        }
        
      }
      onSubmit={async (values, { setSubmitting }) => {
        await logInCheck(values.email, values.password);
        setSubmitting(false);
      }
      }
      >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
        }) => (
          <Form  className=''>
   
{console.log(values)}
            <span className='font-bold'>Email</span>
           <input  className={` border-black	my-[10px] w-full p-3 border rounded-lg shadow-sm     focus:outline-none focus:ring-2 focus:ring-blue-500 `}
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             />
           {errors.email && touched.email && errors.email}
           <div className='mt-[10px]'><span className='font-bold'>Password</span>
           </div>
           <input className=' border-black	 block my-[10px] w-full p-3 border rounded-lg shadow-sm     focus:outline-none focus:ring-2 focus:ring-blue-500 `'
             type="password"
             name="password"
             
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             />
           {errors.password && touched.password && errors.password}
           <button type="submit"  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting} >
             sign in 
           </button>
         </Form>
       )}
     </Formik>

       </div>


       </div>
    </div>
  )
}

export default Signin