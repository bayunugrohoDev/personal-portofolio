import Badge from "@/components/Badge";
import MainTitle from "@/components/MainTitle";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import ResumeCard from "./_components/ResumeCard";
import TechList from "@/components/TechList";
import Resume from "./_components/Resume";

export const metadata = {
  title: "Resume - M Bayu Dwi Nugroho ",
  description: "This is my resume page :) ",
};


export default function Page() {
  return (
    <>
      <MainTitle title={"Resume"} />
      <Resume/>
    </>
  );
}
