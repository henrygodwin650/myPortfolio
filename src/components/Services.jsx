import React from 'react';
import { ServicesBox } from "./ServicesBox";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 px-5 bg-blue-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Here are the services I offer
          </p>
        </div>

        <ServicesBox />
      </div>
    </section>
  );
}