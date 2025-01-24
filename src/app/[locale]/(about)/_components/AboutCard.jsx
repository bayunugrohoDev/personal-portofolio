import React from "react";

const AboutCard = ({ icon, title, desc, bgColor = "bg-lightPrimary" }) => {
  return (
    <div
      className={`${bgColor} flex flex-col lg:flex-row gap-4 col-span-2 lg:col-span-1 p-4 rounded-xl items-center lg:items-start dark:bg-black dark:border`}
    >
      <div className="w-8 h-8">{icon}</div>
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <div className="font-semibold">{title}</div>
        <div className="text-bodyText dark:text-bodyTexter">{desc}</div>
      </div>
    </div>
  );
};

export default AboutCard;
