import React from 'react'

export default function SkillLevel({ skillName, percentage }) {
  return (
    <>
      <div>
        <div className="flex justify-between items-end">
          <p className="font-bold text-xl">{skillName}</p>
          <p className="text-sm">{percentage}%</p>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full">
          <div className="w-full bg-orange-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    </>
  )
}