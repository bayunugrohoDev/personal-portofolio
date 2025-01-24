"use client";

import { useTranslations } from "next-intl";
import TechList from "@/components/TechList";
import AboutCard from "./AboutCard";
import { jobFeatures } from "@/data/jobFeatures";
import MainTitle from "@/components/MainTitle";

const About = () => {
  const t = useTranslations("menu");
  const tbioData = useTranslations("bioData");
  const tClients = useTranslations("clients");
  const tabout = useTranslations("bioData");
  const tjobFeatures = useTranslations("jobFeatures");

  return (
    <>
      <MainTitle title={t("about.title")} />

      <p className="text-bodyText text-md dark:text-bodyTexter">
        {tbioData("descOne")}
      </p>
      <p className="text-bodyText text-md dark:text-bodyTexter">
        {tbioData("descTwo")}
      </p>
      <h2 className="font-semibold text-xl lg:text-2xl">{tabout("title")}</h2>
      <div className="gap-8 grid grid-cols-2">
        {jobFeatures.map((feature) => (
          <AboutCard
            key={feature.id}
            icon={feature.icon}
            title={tjobFeatures(`${feature.id}.title`)}
            desc={tjobFeatures(`${feature.id}.description`)}
            bgColor={feature.bg}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8 bg-[#f8fbfb] dark:bg-black p-4 lg:p-[60px]">
        <div className="font-semibold text-center text-xl lg:text-2xl">
          {tClients("title")}
        </div>
        <div className="w-full">{<TechList />}</div>
      </div>
    </>
  );
};

export default About;
