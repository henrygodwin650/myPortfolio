import React from 'react';

export default function SkillLevel({ skillName, percentage }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg text-gray-800 dark:text-white">
          {skillName}
        </p>
        <p className="font-medium text-orange-600 dark:text-orange-500">
          {percentage}%
        </p>
      </div>

      <div className="w-full bg-slate-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}