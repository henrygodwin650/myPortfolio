import React from 'react';
import SkillLevel from "./SkillLevel.jsx"

export default function Skills() {
  return (
    <>
      <section id="about" className="bg-gray-300 dark:bg-slate-800 px-3 dark:text-white mx-auto">
        <div className="container md:w-[70%] sm:py-16 py-10">
          <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
            <div className="sm:order-2 relative font-bold">
              <div className='text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-white/5'>
                Skills
              </div>
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl'>Skills</h1>
            </div>
            <div className="sm:order-1 text-slate-500">
              <SkillLevel skillName="HTML" percentage={90} />
              <SkillLevel skillName="CSS" percentage={95} />
              <SkillLevel skillName="Tailwind" percentage={90} />
              <SkillLevel skillName="Bootstrap" percentage={90} />
              <SkillLevel skillName="ReactJs" percentage={90} />
              <SkillLevel skillName="JavaScript" percentage={80} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
