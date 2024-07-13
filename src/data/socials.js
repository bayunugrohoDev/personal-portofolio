const {
  FaTiktok,
  FaLinkedinIn,
  FaSquareInstagram,
  FaSquareGithub,
  FaGithubAlt,
  FaInstagram,
} = require("react-icons/fa6");

export const socialMediaData = [
  {
    id: 1,
    className: "dark:text-white dark:fill-white",
    href: "https://www.tiktok.com/@bayunugroho.dev",
    color: "black",
    icon: <FaTiktok />,
  },
  {
    id: 2,
    className: "dark:text-white dark:fill-white",
    href: "https://github.com/bayunugrohoDev",
    color: "black",
    icon: <FaGithubAlt />,
  },
  {
    id: 3,
    className: "",
    href: "https://www.instagram.com/bayunugroho.dev",
    color: "#e12a72",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    className: "",
    href: "https://www.linkedin.com/in/m-bayu-dwi-nugroho-ab105013a/",
    color: "#144679",
    icon: <FaLinkedinIn />,
  },
];
