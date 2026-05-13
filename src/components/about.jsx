import React from 'react'

export default function About() {
  return (
    <>
      <section id="about" className="bg-white dark:bg-slate-800 px-2 dark:text-white">
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="relative font-bold">
              <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-white/5'>
                ABOUT
              </div>
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>About me</h1>
            </div>
            <div className="text-slate-500">
              <p className="font-semibold">
                I'm an aspiring front-end developer with a passion for building beautiful and funtional websites.I'm excited to apply my skills to real-world projects.<br />Let's connect and explore how we can work together to create something amazing!!!
              </p>{/* */}
              <br />
              <p className='font-semibold'>
                As a beginner,l'm eager to learn and grow,and l'm always looking forward for opportiunities to improve my craft. l'm passionate about creating user-friendly and responsive web application and l'm excited to collaborate with others to bring new ideas to life.
              </p>
              <div>
                <a download href="../../Henry_Godwin_CV.pdf" className='primary-btn inline-block my-6 mr-6'>
                  {/* */}
                  Download Resume</a>
                <a href="tel:09074229485" className='outline-btn inline-block my-6 mr-6'>
                  {/* */}
                  Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
