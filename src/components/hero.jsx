import React from "react";
import UserImage from "../assets/c8faa621-9e24-400b-afd9-cf5e46354090.png";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-200 dark:bg-gray-900 py-12 md:py-20 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        <div className="text-center md:text-left space-y-5">
          <p className="uppercase tracking-widest text-orange-600 font-medium text-sm md:text-base">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl dark:text-white font-bold leading-tight">
            Henry Godwin
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
            Front-End Developer
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0">
            Passionate about crafting beautiful, responsive, and user-friendly web experiences.
          </p>

          <div className="pt-4">
            <a
              href="mailto:henrygodwin650@gmail.com"
              className="primary-btn inline-block px-8 py-3.5 text-lg font-medium"
            >
              Hire Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={UserImage}
            alt="Henry Godwin"
            className="w-72 sm:w-80 md:w-96 lg:w-[420px] rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}