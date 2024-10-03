import Wrapper from '@/components/Wrapper';
import React from 'react';
import { FaHome, FaBuilding, FaUtensils, FaTheaterMasks } from 'react-icons/fa'; // Importing icons

const servicesData = [
  {
    heading: 'Residential Electrical Services',
    icon: <FaHome className="w-8 h-8 text-red-500" />, // Residential icon
    subheadings: [
      'New Home Wiring',
      'Electrical Upgrades',
      'Lighting Installation',
      'Electrical Repairs',
      'Home Automation',
    ],
  },
  {
    heading: 'Commercial Electrical Services',
    icon: <FaBuilding className="w-8 h-8 text-red-500" />, // Commercial icon
    subheadings: [
      'Office Wiring',
      'Commercial Lighting Solutions',
      'Electrical Maintenance',
      'Rewiring',
    ],
  },
  {
    heading: 'Restaurants and Lodges',
    icon: <FaUtensils className="w-8 h-8 text-red-500" />, // Restaurant icon
    subheadings: [
      'Dining Area Lighting',
      'Kitchen Equipment Wiring',
      'Fire Alarm Systems',
    ],
  },
  {
    heading: 'Theatres',
    icon: <FaTheaterMasks className="w-8 h-8 text-red-500" />, // Theatre icon
    subheadings: [
      'Stage Lighting and Sound Systems',
      'Projection Equipment Wiring',
      'Emergency Lighting',
      'Concession Area Wiring',
      'Theatrical Effects Installation',
    ],
  },
];

const Services = () => {
  return (
    <Wrapper className="flex flex-col justify-center">
      <div className="bg-[#fbe2e3] absolute top-[-1rem] -z-10 right-[11rem] h-[31.25rem] w-[45.25rem] rounded-full blur-[10rem] sm:w-[75.75rem]"></div>

      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-lg border rounded-lg p-6 flex flex-col justify-between shadow-md transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <h2 className="text-xl font-semibold text-center">{service.heading}</h2>
              </div>
              <ul className="list-disc pl-5 flex-1">
                {service.subheadings.map((subheading, subIndex) => (
                  <li key={subIndex} className="text-black mb-1">
                    {subheading}
                  </li>
                ))}
              </ul>
              <div className='bg-[#fbe2e3] p-3 rounded-full flex items-center justify-center'>
                {service.icon} {/* Render the icon */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
