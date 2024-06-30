import React from "react";

const MainTitle = ({ title }) => {
  return (
    <div className="text-2xl lg:text-4xl font-bold page-title ">
      <h2 className="main-title relative inline-block">{title}</h2>
    </div>
  );
};

export default MainTitle;
