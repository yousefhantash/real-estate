import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import { Cities } from '../components/Proprties comp/Cities';
import Post from '../API/Post';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone/Whatsapp is required'),
    city: Yup.string().required('City is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
    terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});



function Contactus() {
    const sendMessage = async (data) => {
        try {
            const resp = await Post("/api/Property/SubmitContactForm", data);
            window.location.reload();
            console.log(resp); 
        } catch (error) {
            console.error("Error submitting contact form:", error);
        }
    }

    const handleSubmit = (values, { setSubmitting }) => {
        sendMessage(values)
        setTimeout(() => {
            setSubmitting(false);
        }, 400);
    };

    return (
        <div>
            <Navbar />
            <div className='small-bg-city'></div>
            <div className='flex justify-center p-10 sm:p-4 bg-[#f5f9ff]'>
                <div className='border p-8 bg-white'>
                    <div className='mb-5'>
                        <p className='text-[#0056B3] text-3xl mb-3'>Contact Us</p>
                        <p className='text-[#6C757D] text-base'>
                            We are here to help and answer your questions, and we are always happy to hear from you.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phone: '',
                                city: '',
                                subject: '',
                                message: '',
                                terms: false,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form className='flex flex-col gap-4'>
                                    <div className='flex flex-col'>
                                        <label htmlFor="name" className='mb-2 text-[#6C757D]'>Name</label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder='Name'
                                            className='border p-2 rounded'
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="email" className='mb-2 text-[#6C757D]'>Email</label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder='Email'
                                            className='border p-2 rounded'
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="phone" className='mb-2 text-[#6C757D]'>Phone/Whatsapp</label>
                                        <Field
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder='Phone'
                                            className='border p-2 rounded'
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="city" className='mb-2 text-[#6C757D]'>City</label>
                                        <Field
                                            as="select"
                                            id="city"
                                            name="city"
                                            className="w-full h-9 rounded border text-[#6C757D] p-2"
                                        >
                                            <option value="">Select City</option>
                                            <option value="all">All Cities</option>
                                            {Cities.map((item,index)=>{                                           return <option value={item}>{item}</option>
})}
                                        </Field>
                                        <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="subject" className='mb-2 text-[#6C757D]'>Subject</label>
                                        <Field
                                            as="select"
                                            id="subject"
                                            name="subject"
                                            className="w-full h-9 rounded border text-[#6C757D] p-2"
                                        >
                                            <option value="">Select Subject</option>
                                            <option value="all">All subjects</option>
                                        </Field>
                                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor="message" className='mb-2 text-[#6C757D]'>Message</label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            placeholder="Your message"
                                            className='border p-2 rounded h-24'
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className='flex items-center gap-4 mt-4'>
                                        <button
                                            type="submit"
                                            className='bg-[#007BFF] text-white p-2 mt-4 rounded h-[38px] w-[98px]'
                                            disabled={isSubmitting}
                                        >
                                            Submit
                                        </button>
                                        <Field type="checkbox" id="terms" name="terms" className='mt-1' />
                                        <label htmlFor="terms" className='flex items-center'>
                                            <span className='ml-2'>I have read and agreed with the <NavLink to='/policy' className='text-blue-500'>Privacy Policy</NavLink> and <NavLink to='/terms' className='text-blue-500'>Terms of Use</NavLink>.</span>
                                        </label>
                                        <ErrorMessage name="terms" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contactus;
