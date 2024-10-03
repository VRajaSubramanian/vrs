import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Wrapper from '@/components/Wrapper';
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mgvewevz"); // Replace with your form ID
  
  // State to manage form fields
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Use useEffect to reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormValues({ name: '', email: '', message: '' }); // Reset the form fields
    }
  }, [state.succeeded]); // Run this effect when state.succeeded changes

  return (
    <>
      <Head>
        <title>Contact Us | V.R.S Electrical Works</title>
      </Head>
      <Wrapper className="text-center flex flex-col justify-center">
        <div className='bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[45.25rem] rounded-full blur-[10rem] sm:w-[75.75rem]'></div>

        <motion.h1
          className="text-2xl lg:text-3xl font-bold text-center pb-10 pt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Map */}
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <motion.iframe
              className="w-full h-full rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.7863518309189!2d77.709673938493!3d8.732060597829483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04118f886cb8e1%3A0xd7570e4e970c88a1!2sV.R.S%20ELECTRICAL%20WORKS!5e0!3m2!1sen!2sin!4v1727949117322!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.iframe>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 p-6 rounded-lg flex flex-col">
            <motion.form
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit} // Handle Formspree submission
            >
              <label className="mb-2 font-semibold text-left" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name} // Bind the input value
                onChange={handleChange} // Update the state on input change
                className="input mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />

              <label className="mb-2 font-semibold text-left" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email} // Bind the input value
                onChange={handleChange} // Update the state on input change
                className="input mb-4 p-2 border border-gray-300 rounded"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />

              <label className="mb-2 font-semibold text-left" htmlFor="message">
                Query
              </label>
              <textarea
                id="message"
                name="message"
                value={formValues.message} // Bind the input value
                onChange={handleChange} // Update the state on input change
                rows={3}
                className="textarea mb-4 p-2 border border-gray-300 rounded"
                required
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                className="bg-Red text-white p-2 rounded hover:bg-Red transition"
                disabled={state.submitting} // Disable button while submitting
              >
                {state.submitting ? 'Submitting...' : 'Send Message'}
              </button>

              {state.succeeded && (
                <p className="text-green-500 mt-4">Thanks for contacting us! We'll get back to you soon.</p>
              )}
            </motion.form>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Contact;
