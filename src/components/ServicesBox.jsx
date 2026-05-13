import React from 'react';
import WebImage1 from "../assets/IMG-20250914-WA0002.jpg"
import WebImage2 from "../assets/IMG-20250914-WA0003.jpg"
import WebImage3 from "../assets/IMG-20250917-WA0002.jpg"
import WebImage4 from "../assets/IMG-20250914-WA0004.jpg"
import {
  AiFillLayout,
  AiFillCalculator,
  AiFillChrome,
  AiFillPlaySquare
} from "react-icons/ai"

const Services = [
  {
    name: "Simple Games",
    description: "I create responsive and user-friendly games using HTML, CSS and JavaScript. I specialize in crafting visually appealing and functional web games that counts and save scores.",
    image: WebImage1,
    icon: <AiFillPlaySquare className='text-4xl' />,
    bgColor: "bg-pink-500/40",
  }, {
    name: "Simple Websites",
    description: "I create responsive and user-friendly websites using HTML, CSS,Bootstrap 5,Tailwindcss and JavaScript. I specialize in crafting visually appealing and functional web applications that leave a lasting impression.",
    image: WebImage2,
    icon: <AiFillChrome className='text-4xl' />,
    bgColor: "bg-blue-500/30",
  }, {
    name: "Simple Calculators",
    description: "I create responsive and user-friendly calculators using HTML, CSS and JavaScript. I specialize in crafting visually appealing and functional web applications that leave a lasting impression.",
    image: WebImage3,
    icon: <AiFillCalculator className='text-4xl' />,
    bgColor: "bg-green-500/30",
  }, {
    name: "Netflix and Youtube clone",
    description: "I create responsive and user-friendly web clones using HTML, CSS and JavaScript. I specialize in crafting visually appealing and functional web applications that leave a lasting impression.",
    image: WebImage4,
    icon: <AiFillLayout className='text-4xl' />,
    bgColor: "bg-orange-500/30",
  },]

export const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            style={{ backgroundImage: `url(${image})` }}
            className={`${bgColor} rounded-xl text-white bg-cover bg-no-repeat bg-center bg-blend-overlay hover:scale-105 hover:border-2 border-${bgColor}`}
          >
            {/* Content (NOT blurred) */}
            <div className="p-3 md:p-10 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-white/90">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section >
  )
}
