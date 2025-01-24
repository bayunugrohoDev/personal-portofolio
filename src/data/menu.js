import { FaBlogger, FaNewspaper, FaRegUser } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";

export const menuItems = [
  { id: "about", href: "/", icon: <FaRegUser size={24} />, text: "About" },
  {
    id: "resume",
    href: "/resume",
    icon: <FaNewspaper size={24} />,
    text: "Resume",
  },
  {
    id: "portofolio",
    href: "/portfolio",
    icon: <MdWork size={24} />,
    text: "Works",
  },
  { id: "blog", href: "/blog", icon: <FaBlogger size={24} />, text: "Blogs" },
  {
    id: "contact",
    href: "/contact",
    icon: <RiContactsBook2Fill size={24} />,
    text: "Contact",
  },
];
