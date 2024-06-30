import React from "react";
import Badge from "./Badge";

const SkillProgress = ({ title, progress = 0, progressClass, type }) => {
  if (type === "badge") {
    return (
      <Badge title={title} progress={progress} isShowEmot />
    );
  }

  return (
    <div className="flex w-full flex-col">
      <div className="mb-1 flex justify-between text-base  dark:text-white">
        <div className="font-medium">{title}</div>
        <div className="font-light">{progress}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className={`h-2.5 rounded-full`}
          style={{ width: progress + "%", backgroundColor: progressClass }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
