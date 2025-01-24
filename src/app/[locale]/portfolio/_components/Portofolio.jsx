"use client";

import React, { useEffect, useState } from "react";
import PortofolioCard from "./PortofolioCard";
import { filterButtons, portfolioData } from "@/data/portfolioData";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import MainTitle from "@/components/MainTitle";

const Portofolio = () => {
  const t = useTranslations("menu");
  const tPortfolioData = useTranslations("portfolioData");

  const [activeTab, setActiveTab] = useState("All");
  const [filteredPortofolio, setFilteredPortofolio] = useState([]);

  useEffect(() => {
    const filtered = activeTab === "All"
      ? portfolioData
      : portfolioData.filter((elm) => elm.category.includes(activeTab));

    const left = filtered.filter((_, idx) => idx % 2 === 0); // Left column: video first
    const right = filtered.filter((_, idx) => idx % 2 !== 0); // Right column: square first

    setFilteredPortofolio([left, right]); 
  }, [activeTab]);

  return (
    <>
      <MainTitle title={t("portofolio.title")} />
      <div className="flex justify-end mb-4">
        <div className="flex gap-5">
          {filterButtons.map((elm, i) => (
            <button
              key={`${elm.text}-${i}`}
              onClick={() => setActiveTab(elm.text)}
              className={`text-base ${activeTab === elm.text ? "text-blue-500" : ""}`}
            >
              {elm.text}
            </button>
          ))}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        <AnimatePresence>
          {filteredPortofolio.map((column, idx) => (
            <div key={`column-${idx}`} className="flex flex-col gap-4 w-full lg:w-1/2">
              {column.map((elm, index) => {
                const aspectClass = idx === 0
                  ? index % 2 === 0
                    ? "aspect-video" 
                    : "aspect-square"
                  : index % 2 === 0
                  ? "aspect-square" 
                  : "aspect-video";

                const bgClass = idx === 0
                  ? index % 2 === 0
                    ? "bg-lightSecondary" 
                    : "bg-lightPrimary"
                  : index % 2 === 0
                  ? "bg-lightPrimary"
                  : "bg-lightSecondary";

                return (
                  <PortofolioCard
                    key={`${elm.id}-${index}`}
                    index={index}
                    img={elm.imgSrc}
                    link={elm.previewLink}
                    title={tPortfolioData(`${elm.id}.title`)}
                    description={tPortfolioData(`${elm.id}.subtitle`)}
                    aspectClass={aspectClass} // Pass the aspect class to control the ratio
                    bgClass={bgClass} // Pass the bg class to control the background color
                  />
                );
              })}
            </div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portofolio;
