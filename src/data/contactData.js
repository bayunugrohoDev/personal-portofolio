import { FaCalendarDays, FaMapPin } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const contactData = [
  {
    id: 1,
    icon: <IoPhonePortraitOutline size={21} color="#e12a72" />,
    text: {
      label: "Phone",
      value: "+6288215018259",
    },
  },
  {
    id: 2,
    icon: <MdOutlineEmail size={21} color="#6AB5B9" />,
    text: {
      label: "Email",
      value: "bayunugroho963@gmail.com",
    },
  },
  {
    id: 3,
    icon: <FaMapPin size={21} color="#FD7590" />,
    text: {
      label: "Location",
      value: "Gresik, East Java, Indonesia",
    },
  },
  {
    id: 4,
    icon: <FaCalendarDays size={21} color="#C17CEB" />,
    text: {
      label: "Birthday",
      value: "28/08/1996",
    },
  },
];
