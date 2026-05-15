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
    name: "Simple Games",
    description: "I create responsive and user-friendly games using HTML, CSS and JavaScript.",
    image: WebImage1,
    icon: <AiFillPlaySquare className="text-4xl" />,
    bgColor: "bg-pink-500/40",
  },
  {
    name: "Simple Websites",
    description: "I create responsive and user-friendly websites using HTML, CSS, Bootstrap 5, Tailwind CSS and JavaScript.",
    image: WebImage2,
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/30",
  },
  {
    name: "Simple Calculators",
    description: "I create responsive and user-friendly calculators using HTML, CSS and JavaScript.",
    image: WebImage3,
    icon: <AiFillCalculator className="text-4xl" />,
    bgColor: "bg-green-500/30",
  },
  {
    name: "Netflix & YouTube Clones",
    description: "I create responsive and user-friendly web clones using HTML, CSS and JavaScript.",
    image: WebImage4,
    icon: <AiFillChrome className="text-4xl" />,
    bgColor: "bg-orange-500/30",
  },
];

export const ServicesBox = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
      {servicesData.map(({ name, description, image, icon, bgColor }, index) => (
        <div
          key={index}
          className={`rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ${bgColor}`}
        >
          <div className="relative h-56">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            
            <div className="absolute top-4 right-4 bg-white/90 text-black p-3 rounded-xl shadow-md">
              {icon}
            </div>
          </div>

          <div className="p-5 text-white">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-sm opacity-90 leading-relaxed">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};