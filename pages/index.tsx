import Wrapper from '@/components/Wrapper';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Head>
        <title>V.R.S Electrical Works</title>
        <style>{`
          @keyframes shine {
            0% {
              left: -100px;
            }
            60% {
              left: 100%;
            }
            to {
              left: 100%;
            }
          }
          .shine {
            content: '';
            position: absolute;
            width: 100px;
            height: 100%;
            background-image: linear-gradient(
              120deg,
              rgba(255, 255, 255, 0) 30%,
              rgba(255, 255, 255, 0.8),
              rgba(255, 255, 255, 0) 70%
            );
            top: 0;
            left: -100px;
            opacity: 0.6;
          }
          button .shine {
            animation: shine 1.5s ease-out infinite;
          }
        `}</style>
      </Head>
      <Wrapper className='text-center flex flex-col justify-center'>
        {/* Background effect */}
        <div className='bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[45.25rem] rounded-full blur-[10rem] sm:w-[75.75rem]'></div>
        <div className='h-full w-full'>
          <div>
            {/* Animate the h1 and p elements */}
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Licensed Electrical Wiring {' '}
              <span className="text-Red">
                Contractor.
              </span>
            </motion.h1>
            <motion.p
              className='text-Black mx-auto flex justify-center z-10 text-xl'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Adding a slight delay for the paragraph
            >
              At V.R.S Electrical Works, we are a trusted name in providing top-notch electrical solutions in Tirunelveli. With years of experience as a licensed electrical wiring contractor, our commitment to quality and safety makes us the preferred choice for both residential and commercial electrical services.
            </motion.p>
            <div className='mt-8 flex gap-x-4 justify-center'>
              <motion.button
                className="relative px-5 py-2 text-white font-bold bg-red-500 border-3 border-white/30 rounded-full flex items-center justify-center gap-2 shadow-lg hover:scale-105 hover:border-white/90 transition-all duration-300 ease-in-out overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }} // Adding a slight delay for the button
              >
                <Link href="/contact">
                  <div className="flex items-center justify-center gap-2">
                    Contact Us
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 transition-transform duration-300 ease-in-out">
                      <path
                        clipRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <div className="shine"></div>
                  </div>
                </Link>
              </motion.button>
              {/* <motion.button
                className='flex-none relative rounded-full bg-red-500 px-6 py-2.5 text-sm font-normal hover:bg-black transition-all duration-300 text-white'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }} // Adding a slight delay for the button
              >
                View Details
                <div className="shine"></div>
              </motion.button>
              <motion.button
                className='flex-none relative rounded-full bg-red-500 px-6 py-2.5 text-sm font-normal hover:bg-black transition-all duration-300 text-white'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }} // Adding a slight delay for the button
              >
                Contact Us
                <div className="shine"></div>
              </motion.button> */}
            </div>
            {/* Uncomment if needed */}
            {/* <div className='w-full h-full flex justify-center'>
              <Electric/>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Index;
