import React from 'react';
import SkillLevel from "./SkillLevel";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 px-5 bg-gray-100 dark:bg-slate-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Skills List */}
          <div>
            <div className="text-center md:text-left mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">My Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
                Technologies I work with
              </p>
            </div>

            <div className="space-y-8 max-w-lg mx-auto md:mx-0">
              <SkillLevel skillName="HTML" percentage={90} />
              <SkillLevel skillName="CSS" percentage={95} />
              <SkillLevel skillName="Tailwind CSS" percentage={90} />
              <SkillLevel skillName="Bootstrap" percentage={85} />
              <SkillLevel skillName="JavaScript" percentage={85} />
              <SkillLevel skillName="React JS" percentage={80} />
            </div>
          </div>

          {/* Decorative Big Text */}
          <div className="hidden md:flex justify-center items-center">
            <div className="text-[120px] md:text-[160px] lg:text-[200px] font-black text-gray-200 dark:text-slate-800 tracking-tighter select-none">
              SKILLS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}