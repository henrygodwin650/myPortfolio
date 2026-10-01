import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-20 px-5
        bg-gradient-to-b
        from-white via-slate-50 to-slate-100
        dark:from-slate-900 dark:via-slate-950 dark:to-black
      "
    >

      {/* Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="relative">

            {/* Big Background Text */}
            <h1
              className="
                text-[90px] sm:text-[120px] lg:text-[160px]
                font-black
                text-slate-200 dark:text-slate-800
                leading-none
                select-none
              "
            >
              ABOUT
            </h1>

            {/* Main Text */}
            <div className="absolute inset-0 flex items-center">
              <div>
                <p
                  className="
                    uppercase tracking-[0.3em]
                    text-orange-500
                    text-sm font-semibold
                    mb-4
                  "
                >
                  Who I Am
                </p>

                <h2
                  className="
                    text-4xl md:text-5xl
                    font-extrabold
                    text-slate-900 dark:text-white
                  "
                >
                  About Me
                </h2>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="
              p-8 rounded-3xl
              bg-white/60 dark:bg-slate-800/60
              backdrop-blur-lg
              border border-gray-200 dark:border-slate-700
              shadow-xl
            "
          >

            <div
              className="
                space-y-6
                text-[17px]
                leading-relaxed
                text-slate-600 dark:text-slate-300
              "
            >

              <p>
                I'm an aspiring{" "}
                <span className="font-semibold text-orange-500">
                  Front-end Developer
                </span>{" "}
                passionate about building modern, responsive,
                and user-friendly web experiences.
              </p>

              <p>
                I enjoy learning new technologies, improving my
                development skills, and collaborating on creative
                projects that solve real-world problems.
              </p>

              <p>
                My focus is creating clean UI designs using
                React.js, Tailwind CSS, JavaScript, and modern
                frontend development practices.
              </p>

              {/* Buttons */}
              <div className="pt-6 flex flex-wrap gap-4">

                <a
                  href="../../Henry_Godwin_CV.pdf"
                  download
                  className="
                    px-7 py-3
                    rounded-2xl
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    font-semibold
                    transition-all duration-300
                    hover:-translate-y-1
                    shadow-lg
                  "
                >
                  Download Resume
                </a>

                <a
                  href="tel:09074229485"
                  className="
                    px-7 py-3
                    rounded-2xl
                    border border-slate-300
                    dark:border-slate-600
                    hover:border-orange-500
                    text-slate-700 dark:text-white
                    hover:text-orange-500
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}