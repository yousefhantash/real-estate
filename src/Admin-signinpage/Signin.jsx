import { Formik , Form, Field} from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
const navigate=useNavigate();

  const initialValue={email:"",
    password:""
  }
  
    return (
    <div>
   
      <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-start ml-1.5 xl   justify-center mt-[2em]">
    <h1 className="text-[#CF991E] sm:text-[20px] md:text-[30px] text-[40px] font-bold "> ME</h1>
    <h1 className="text-[#0056B3] sm:text-[20px] md:text-[30px] text-[40px] tracking-[4.00px] mt-1 font-bold _">Palestine</h1>
    </div>
       <Formik className=""
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className=''>
            <div className='text-center text-xl my-[20px] text-[#CF991E] text-[30px]  font-bold'> Login</div>

            <span>Email</span>
           <input  className={` border-black	my-[10px] w-full p-3 border rounded-lg shadow-sm     focus:outline-none focus:ring-2 focus:ring-blue-500 `}
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             />
           {errors.email && touched.email && errors.email}
           <span>Password</span>

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
         </form>
       )}
     </Formik>
       </div>


    </div>
  )
}

export default Signin