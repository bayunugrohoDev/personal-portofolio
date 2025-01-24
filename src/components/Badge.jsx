import React from "react";

const Badge = ({ title, progress = 0, isShowEmot = false }) => {
  return (
    <div className="inline p-2 text-xs bg-gray-100 text-bodyText rounded-lg font-semibold m-1 dark:bg-eerieBlack dark:text-bodyTexter">
      {title} {progress > 90 && isShowEmot && "🔥"}
    </div>
  );
};

export default Badge;
