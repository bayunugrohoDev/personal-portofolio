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

  const [filteredItem, setFilteredItem] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [leftPortofolio, setLeftPortofolio] = useState([]);
  const [rightPortofolio, setRightPortofolio] = useState([]);

  useEffect(() => {
    setLeftPortofolio([]);
    setRightPortofolio([]);

    if (activeTab == "All") {
      portfolioData.forEach((item, idx) => {
        if (idx % 2 === 0) {
          setLeftPortofolio((state) => [...state, item]);
        } else {
          setRightPortofolio((state) => [...state, item]);
        }
      });
    } else {
      const filtered = portfolioData.filter((elm) =>
        elm.category.includes(activeTab),
      );
      filtered.forEach((item, idx) => {
        if (idx % 2 === 0) {
          setLeftPortofolio((state) => [...state, item]);
        } else {
          setRightPortofolio((state) => [...state, item]);
        }
      });
    }
  }, [activeTab]);

  return (
    <>
      <MainTitle title={t("portofolio.title")} />
      <div className="flex justify-end">
        <div className="flex gap-5">
          {filterButtons.map((elm, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(elm.text)}
              className={`text-base ${
                activeTab == elm.text ? "text-blue-500" : ""
              } `}
            >
              {elm.text}
            </button>
          ))}
          {/* <div className="font-semibold text-lg">Mockup</div> */}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        <AnimatePresence>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            {leftPortofolio.map((elm, idx) => (
              <PortofolioCard
                key={idx}
                index={idx}
                img={elm.imgSrc}
                link={elm.previewLink}
                title={tPortfolioData(`${elm.id}.title`)}
                description={tPortfolioData(`${elm.id}.subtitle`)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            {rightPortofolio.map((elm, idx) => (
              <PortofolioCard
                key={idx}
                index={idx + 1}
                img={elm.imgSrc}
                link={elm.previewLink}
                title={tPortfolioData(`${elm.id}.title`)}
                description={tPortfolioData(`${elm.id}.subtitle`)}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portofolio;
