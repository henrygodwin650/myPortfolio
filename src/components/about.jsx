import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 px-5 bg-white dark:bg-slate-800 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="relative text-center md:text-left">
            <div className="text-6xl md:text-7xl lg:text-8xl font-black text-black/5 dark:text-white/5">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 text-4xl md:text-5xl font-bold">
              About Me
            </h1>
          </div>

          <div className="space-y-6 text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              I'm an aspiring <span className="font-semibold text-orange-500">Front-end Developer</span> 
              with a passion for building beautiful and functional websites.
            </p>
            <p>
              As a beginner, I'm eager to learn, grow, and collaborate on exciting projects. 
              I love creating responsive and user-friendly web applications.
            </p>

            <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="../../Henry_Godwin_CV.pdf" download className="primary-btn px-7 py-3">
                Download Resume
              </a>
              <a href="tel:09074229485" className="outline-btn px-7 py-3">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}