import { BsBrowserChrome } from "react-icons/bs";
import { FaCode } from "react-icons/fa6";
import { IoSpeedometer } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

export const jobFeatures = [
  {
    id: 1,
    icon: <BsBrowserChrome fontSize={30} color="#118a8a" />, // Teal
    bg: "bg-lightSecondary",
  },
  {
    id: 2,
    icon: <FaCode fontSize={30} color="#ff6347" />, // Tomato
    bg: "bg-lightPrimary",
  },
  {
    id: 3,
    icon: <MdOutlineDesignServices fontSize={30} color="#4169e1" />, // RoyalBlue
    bg: "bg-lightPrimary",
  },
  {
    id: 4,
    icon: <IoSpeedometer fontSize={30} color="#32cd32" />, // LimeGreen
    bg: "bg-lightSecondary",
  },
];
