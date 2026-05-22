import React from "react";
import UserImage from "../assets/c8faa621-9e24-400b-afd9-cf5e46354090.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-slate-100 via-white to-slate-200
        dark:from-slate-950 dark:via-slate-900 dark:to-black
        py-16 md:py-24 px-5
      "
    >

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* Left Content */}
        <div className="text-center md:text-left">

          {/* Small Intro */}
          <p
            className="
              uppercase tracking-[0.3em]
              text-orange-500
              font-semibold
              text-sm md:text-base
              mb-4
            "
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="
              text-5xl sm:text-6xl lg:text-7xl
              font-extrabold
              leading-tight
              text-slate-900 dark:text-white
            "
          >
            Henry <span className="text-orange-500">Godwin</span>
          </h1>

          {/* Role */}
          <h2
            className="
              mt-5
              text-2xl md:text-3xl
              font-medium
              text-slate-700 dark:text-slate-300
            "
          >
            Front-End Developer
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              text-base md:text-lg
              leading-relaxed
              text-gray-600 dark:text-gray-400
              max-w-xl
              mx-auto md:mx-0
            "
          >
            I build modern, responsive, and user-friendly web
            applications using React.js, Tailwind CSS, and
            JavaScript with clean UI/UX experiences.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-8
              flex flex-col sm:flex-row
              gap-4
              justify-center md:justify-start
            "
          >

            {/* Hire Me */}
            <a
              href="mailto:henrygodwin650@gmail.com"
              className="
                px-8 py-4
                rounded-2xl
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                shadow-lg hover:shadow-orange-500/30
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              Hire Me
            </a>

            {/* View Projects */}
            <a
              href="#services"
              className="
                px-8 py-4
                rounded-2xl
                border border-slate-300
                dark:border-slate-700
                hover:border-orange-500
                dark:hover:border-orange-500
                text-slate-700 dark:text-white
                font-semibold
                backdrop-blur-lg
                hover:bg-orange-500 hover:text-white
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              View Projects
            </a>
          </div>

          {/* Small Stats */}
          <div
            className="
              mt-10
              flex flex-wrap
              gap-6
              justify-center md:justify-start
            "
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                10+
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                100%
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Responsive
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">
                React
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Specialist
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <div
            className="
              relative
              group
            "
          >

            {/* Glow */}
            <div
              className="
                absolute inset-0
                bg-orange-500/20
                blur-3xl
                rounded-full
              "
            ></div>

            {/* Image */}
            <img
              src={UserImage}
              alt="Henry Godwin"
              className="
                relative z-10
                w-72 sm:w-80 md:w-96 lg:w-[430px]
                rounded-[2rem]
                object-cover
                border-4 border-white/20
                shadow-2xl
                transition-transform duration-500
                group-hover:scale-105
                group-hover:-translate-y-2
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}