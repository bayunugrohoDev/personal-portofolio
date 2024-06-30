import { getTechImages } from "@/utils/getImages";
import React from "react";
import SwiperContent from "./Swiper";

const TechList = () => {
  const techImages = getTechImages();
  return <SwiperContent data={techImages} />;
};

export default TechList;
