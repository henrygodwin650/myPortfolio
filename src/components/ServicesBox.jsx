import React from 'react';
import WebImage1 from "../assets/IMG-20250914-WA0002.jpg";
import WebImage2 from "../assets/IMG-20250914-WA0003.jpg";
import WebImage3 from "../assets/IMG-20250917-WA0002.jpg";
import WebImage4 from "../assets/IMG-20250914-WA0004.jpg";

import {
  AiFillPlaySquare,
  AiFillLayout,
  AiFillCalculator,
  AiFillChrome
} from "react-icons/ai";

const servicesData = [
  {
    name: "Ecommerce Website",
    description:
      "I create responsive and user-friendly e-commerce websites using React, Tailwind CSS and JavaScript.",
    image: WebImage4,
    icon: <AiFillPlaySquare className="text-4xl" />,
    link: "https://henrygodwin650.github.io/Ecommerce-website/#/",
  },
  {
    name: "Simple Websites",
    description:
      "I create responsive and user-friendly websites using React, Tailwind CSS and JavaScript.",
    image: WebImage3,
    icon: <AiFillLayout className="text-4xl" />,
    link: "https://henrygodwin650.github.io/SingleHub/",
  },
  {
    name: "Simple Game",
    description:
      "I create responsive and user-friendly calculators using React, TailwindCSS and Typescript.",
    image: WebImage1,
    icon: <AiFillCalculator className="text-4xl" />,
    link: "https://henrygodwin650.github.io/Hangman-webgame/",
  },
  {
    name: "YouTube Clones",
    description:
      "I create responsive and user-friendly web clones using React, Tailwind CSS and JavaScript.",
    image: WebImage2,
    icon: <AiFillChrome className="text-4xl" />,
    link: "https://henrygodwin650.github.io/youtube-clone-website/",
  },
];

export const ServicesBox = () => {
  return (
    <section className="px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map(
          ({ name, description, image, icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-amber-900  text-orange-400 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white text-black p-3 rounded-xl shadow-md">
                    {icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3">{name}</h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {description}
                  </p>

                  <button className="mt-5 px-4 py-2 rounded-lg text-orange-500 font-bold hover:text-white bg-white hover:bg-orange-600 transition-colors duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </section>
  );
};