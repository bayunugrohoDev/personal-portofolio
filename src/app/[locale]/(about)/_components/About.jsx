"use client";

import { useTranslations } from 'next-intl';
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import TechList from "@/components/TechList";
import AboutCard from "./AboutCard";
import { bioData } from "@/data/bioData";
import { items } from "@/data/jobFeatures";

const About = () => {
  const t = useTranslations('About');

  return (
    <>
      <p className="text-bodyText text-md dark:text-bodyTexter">
        {t('descOne')}
      </p>
      <p className="text-bodyText text-md dark:text-bodyTexter">
        {t('descTwo')}
      </p>
      <h2 className="font-semibold text-xl lg:text-2xl">{t('title')}</h2>
      <div className="gap-8 grid grid-cols-2">
        {items.map((feature) => (
          <AboutCard
            key={feature.id}
            icon={feature.icon}
            title={t(`items.${feature.id}.title`)}
            desc={t(`items.${feature.id}.description`)}
            bgColor={feature.bg}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8 bg-[#f8fbfb] dark:bg-black p-4 lg:p-[60px]">
        <div className="font-semibold text-center text-xl lg:text-2xl">
          {t('techStackTitle')}
        </div>
        <div className="w-full">
          {/* <TechList /> */}
        </div>
      </div>
    </>
  );
};

export default About;
