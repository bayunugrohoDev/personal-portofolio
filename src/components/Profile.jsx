"use client";

import Image from "next/image";
import React from "react";
import SocialMedia from "./SocialMedia";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import { contactData } from "@/data/contactData";
import { useTranslations } from "next-intl";

const Profile = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const tProfileInfo = useTranslations("profileInfo");
  const tContactData = useTranslations("contactData");
  const tButton = useTranslations("button");

  return (
    <div className="flex flex-col items-center gap-4 bg-white dark:bg-black shadow-sm px-8 py-10 border dark:border-black rounded-xl w-full h-auto">
      <Image
        src={
          theme !== "dark" ? profileInfo.imageSrcExample : profileInfo.imageSrcExample
        }
        width={235}
        height={235}
        alt="saya"
        className="-mt-44 rounded-lg glass-effect"
      />
      <h2 className="font-bold text-xl">{tProfileInfo("name")}</h2>
      <div className="bg-lightWhite dark:bg-gray-900 px-4 py-1 rounded font-normal text-sm">
        {tProfileInfo("title")}
      </div>
      <div className="flex gap-3">
        {socialMediaData.map((media) => (
          <SocialMedia
            key={media.id}
            icon={React.cloneElement(media.icon, {
              color: media.color,
              className: media.className,
              fontSize: 22,
            })}
            link={media.href}
          />
        ))}
      </div>
      <div className="flex flex-col bg-lightWhite dark:bg-gray-900 px-6 py-5 rounded-lg w-full">
        {contactData.map((contact) => (
          <div
            key={contact.id}
            className="flex gap-3 dark:border-gray-600 py-2 border-b"
          >
            <div className="flex justify-center items-center bg-white dark:bg-black shadow-sm rounded-md w-10">
              {contact.icon}
            </div>
            <div className="flex flex-col">
              <div className="text-bodyText text-xs dark:text-bodyTexter">
                {tContactData(`${contact.id}.label`)}
              </div>
              <div className="text-sm">
                {" "}
                {tContactData(`${contact.id}.value`)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-900 hover:from-yellow-500 to-blue-700 hover:to-yellow-300 px-5 py-3 rounded-md font-semibold text-white glass-effect"
        onClick={() => router.push("/contact")}
      >
        {tButton('title')}
      </button>
    </div>
  );
};

export default Profile;
