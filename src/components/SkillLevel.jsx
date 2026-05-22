import React from "react";

export default function SkillLevel({
  skillName,
  percentage,
  color = "from-orange-500 to-orange-400",
}) {
  return (
    <div
      className="
        group
        p-5 rounded-2xl
        bg-white/60 dark:bg-slate-800/60
        backdrop-blur-lg
        border border-gray-200 dark:border-slate-700
        hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >

      {/* Top */}
      <div className="flex justify-between items-center mb-3">
        <h3
          className="
            text-lg font-semibold
            text-slate-800 dark:text-white
          "
        >
          {skillName}
        </h3>

        <span
          className="
            text-sm font-bold
            text-orange-500
          "
        >
          {percentage}%
        </span>
      </div>

      {/* Progress */}
      <div
        className="
          w-full h-3
          bg-slate-200 dark:bg-slate-700
          rounded-full overflow-hidden
        "
      >
        <div
          className={`
            h-full rounded-full
            bg-gradient-to-r ${color}
            transition-all duration-1000 ease-out
            group-hover:animate-pulse
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}