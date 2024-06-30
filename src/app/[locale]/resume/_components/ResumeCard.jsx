import React from "react";

const ResumeCard = ({ date, title, description, bgColor }) => {
  return (
    <div
      className={`flex gap-2 flex-col p-4 rounded-xl items-start dark:bg-black dark:border dark:border-bodyTexter ${bgColor}`}
    >
      <div className="text-bodyText text-sm dark:text-bodyTexter">{date}</div>
      <div className="font-normal">{title}</div>
      <div className="text-bodyText text-sm dark:text-bodyTexter">{description}</div>
    </div>
  );
};

export default ResumeCard;
