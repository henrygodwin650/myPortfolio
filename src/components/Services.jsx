import React from 'react';
import {ServicesBox} from "./ServicesBox.jsx";

export const Services = () => {
  return (
    <>
     <section className='bg-blue-300 px-2  dark:bg-gray-900 dark:text-white py-10'>
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-orange-500 pb-1">Services</h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">Here are the services I offer.</p>
      </div>
      {/* Service Items */}
      <div>
        <ServicesBox />
      </div>
     </section>
    </>
  )
}
