import React from "react";
import MainTitle from "@/components/MainTitle";
import { portfolioData } from "@/data/portfolioData";
import Portofolio from "./_components/Portofolio";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Portofolio - M Bayu Dwi Nugroho ",
  description:
    "Explore the portfolio of M Bayu Dwi Nugroho, a Frontend Developer.",
};

export default function Page() {
  // Split the data into two arrays, one for left and one for right
  const leftPortofolio = [];
  const rightPortofolio = [];

  portfolioData.forEach((item, idx) => {
    if (idx % 2 === 0) {
      leftPortofolio.push(item);
    } else {
      rightPortofolio.push(item);
    }
  });

  return (
    <>
      <Portofolio />
    </>
  );
}
