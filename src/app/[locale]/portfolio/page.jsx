import React from "react";
import { portfolioData } from "@/data/portfolioData";
import Portofolio from "./_components/Portofolio";

export const metadata = {
  title: "Portofolio - Jhon Doe ",
  description: "Explore the portfolio of Jhon Doe, a Web Developer.",
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
