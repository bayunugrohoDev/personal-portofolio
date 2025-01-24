import Image from "next/image";
import React from "react";

const BlogCard = ({ img, title, description, onClick }) => {
  return (
    <div className={`flex justify-between   `}>
      <div className="w-8/12">
        <a href="#">
          <h5 className="mt-2 mb-2 font-semibold text-gray-600 text-sm md:text-2xl dark:text-white tracking-tight">
            {title}
          </h5>
        </a>
        <p className="mb-3 line-clamp-2 font-normal text-gray-700 text-xs md:text-sm dark:text-bodyTexter">
          {description}
        </p>
      </div>
      <div
        onClick={onClick}
        className={`flex  w-4/12 relative  overflow-hidden  justify-end`}
      >
        {img ? (
          <Image
            width={100}
            height={300}
            className="rounded-lg max-w-[100px] transition duration-500 cursor-pointer glass-effect object-contain hover:scale-110"
            src={img}
            alt=""
          />
        ) : (
          <div>No thumbnail</div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
