"use client";

import React from "react";
import SwiperContent from "./Swiper";
import { clientLogos } from "@/data/clientLogos";

const TechList = () => {
  return <SwiperContent data={clientLogos} />;
};

export default TechList;
