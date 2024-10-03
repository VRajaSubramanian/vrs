import Wrapper from '@/components/Wrapper';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion

// Define the props type for the Counter component
interface CounterProps {
  end: number; // Specify that 'end' is a number
  duration: number; // Specify that 'duration' is a number
}

const Counter: React.FC<CounterProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = end / (duration * 60); // Increment per frame (~60 fps)

    const updateCounter = () => {
      setCount(prevCount => (prevCount + increment > end ? end : prevCount + increment));
    };

    const intervalId = setInterval(updateCounter, 1000 / 60); // Update 60 times per second

    return () => clearInterval(intervalId);
  }, [end, duration]);

  return <motion.h2 className="text-3xl font-bold">{Math.round(count)}+</motion.h2>;
};

const About = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

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
      <Wrapper className="text-center flex flex-col justify-center">
        {/* Background effect */}
        <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[45.25rem] rounded-full blur-[10rem] sm:w-[75.75rem]"></div>
        <div className="h-full w-full">
          <div>
            {/* Animate the h1 and p elements */}
            <motion.h1
              className="h1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Trusted Electrical Solutions in{' '}
              <span className="text-Red">Tirunelveli.</span>
            </motion.h1>
            <motion.p
              className="text-Black mx-auto flex justify-center z-10 text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Adding a slight delay for the paragraph
            >
              With a team of highly skilled, licensed electricians, we take pride in offering a wide range of electrical services designed to meet the unique needs of each client. Our expertise spans residential, commercial, and industrial sectors, ensuring that no matter the project size or complexity, we can deliver efficient, cost-effective solutions tailored to your specific requirements.
            </motion.p>
            <div className="mt-8 flex gap-x-4 justify-center">
            </div>

            {/* Counters */}
            <div className="mt-12 flex flex-row items-center justify-center gap-y-6 gap-x-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-center flex-col"
              >
                <Counter end={32} duration={2} />
                <p className="text-Black mx-auto flex justify-center z-10 text-xl">Years in Business</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-center"
              >
                <Counter end={150} duration={2} />
                <p className="text-Black mx-auto flex justify-center z-10 text-xl">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-center"
              >
                <Counter end={40} duration={2} />
                <p className="text-Black mx-auto flex justify-center z-10 text-xl">Employees</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
