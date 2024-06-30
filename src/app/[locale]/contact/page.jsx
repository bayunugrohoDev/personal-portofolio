import React from "react";
import MainTitle from "@/components/MainTitle";
import Contact from "./_components/Contact";

export const metadata = {
  title: "Contact - M Bayu Dwi Nugroho ",
  description: "Get in touch with M Bayu Dwi Nugroho, a Frontend Developer.",
};

export default function Page() {
  return (
    <>
      <MainTitle title={"Contact"} />
      <Contact />
    </>
  );
}
