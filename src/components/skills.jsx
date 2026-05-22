import React from "react";
import SkillLevel from "./SkillLevel";

export default function Skills() {

  const skills = [
    {
      skillName: "HTML",
      percentage: 90,
      color: "from-orange-500 to-yellow-400",
    },
    {
      skillName: "CSS",
      percentage: 95,
      color: "from-blue-500 to-cyan-400",
    },
    {
      skillName: "Tailwind CSS",
      percentage: 90,
      color: "from-cyan-500 to-sky-400",
    },
    {
      skillName: "Bootstrap",
      percentage: 85,
      color: "from-purple-500 to-pink-500",
    },
    {
      skillName: "JavaScript",
      percentage: 85,
      color: "from-yellow-400 to-orange-500",
    },
    {
      skillName: "React JS",
      percentage: 80,
      color: "from-sky-400 to-blue-500",
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative overflow-hidden
        py-20 px-5
        bg-gradient-to-b
        from-slate-100 via-white to-slate-200
        dark:from-slate-950 dark:via-slate-900 dark:to-black
      "
    >

      {/* Background Blur */}
      <div
        className="
          absolute top-10 left-10
          w-72 h-72
          bg-orange-400/20
          rounded-full blur-3xl
        "
      />

      <div
        className="
          absolute bottom-10 right-10
          w-72 h-72
          bg-blue-400/20
          rounded-full blur-3xl
        "
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="
              uppercase tracking-[0.3em]
              text-orange-500
              font-semibold text-sm
            "
          >
            Expertise
          </p>

          <h2
            className="
              mt-4
              text-4xl md:text-5xl
              font-extrabold
              text-slate-900 dark:text-white
            "
          >
            My Skills
          </h2>

          <p
            className="
              mt-5
              max-w-2xl mx-auto
              text-gray-600 dark:text-gray-400
              text-lg
            "
          >
            Technologies and tools I use to create
            responsive and modern web applications.
          </p>
        </div>

        {/* Content */}
        <div
          className="
            grid lg:grid-cols-2
            gap-16 items-center
          "
        >

          {/* Skills */}
          <div className="space-y-6">

            {skills.map((skill, index) => (
              <SkillLevel
                key={index}
                skillName={skill.skillName}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          {/* Right Side */}
          <div
            className="
              hidden lg:flex
              justify-center items-center
              relative
            "
          >

            {/* Decorative Circle */}
            <div
              className="
                absolute
                w-[420px] h-[420px]
                rounded-full
                border border-orange-500/20
              "
            />

            {/* Big Text */}
            <h1
              className="
                text-[150px]
                font-black
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-orange-500/20
                to-orange-500/5
                select-none
                tracking-tight
              "
            >
              SKILLS
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}