import React from "react";
import ResumeCard from "./ResumeCard";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import Badge from "@/components/Badge";
import TechList from "@/components/TechList";
import { skillData } from "@/data/skills";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import SkillProgress from "@/components/SkillProgress";
import { knowledges } from "@/data/knowledges";

const Resume = () => {
    return (
      <div className="gap-6 grid grid-cols-2 w-full">
        {/* Education */}
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <FaGraduationCap size={24} color="blue" /> Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <ResumeCard
                key={edu.id}
                date={edu.session}
                title={edu.cardTitle}
                description={edu.cardSubtitleSecondary}
                bgColor={edu.bgClass}
              />
            ))}
          </div>
        </div>
  
        {/* Work */}
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-xl">
            <MdWork size={24} color="blue" /> Work
          </div>
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <ResumeCard
                key={exp.id}
                date={exp.session}
                title={exp.role}
                description={exp.company}
                bgColor={exp.bgClass}
              />
            ))}
          </div>
        </div>
  
        {/* Working Skills */}
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-xl">
            Working Skills
          </div>
          <div className="flex flex-wrap">
            {skillData.map((skill) => (
              <SkillProgress
                key={skill.id}
                title={skill.title}
                progress={skill.progress}
                progressClass={skill.progressColor}
              />
            ))}
          </div>
        </div>
  
        {/* Knowledge */}
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 font-semibold text-xl">
            Knowledge
          </div>
          <div className="flex flex-wrap w-full">
            {knowledges.map((know, index) => (
              <Badge key={index} title={know} />
            ))}
          </div>
        </div>
  
        <div className="flex flex-col gap-8 col-span-2 bg-[#f8fbfb] dark:bg-black p-[60px]">
          <div className="font-semibold text-center text-xl lg:text-2xl">
            My Tech Stack
          </div>
          <div className="w-full">
            <TechList />
          </div>
        </div>
      </div>
    );
  };

export default Resume;
