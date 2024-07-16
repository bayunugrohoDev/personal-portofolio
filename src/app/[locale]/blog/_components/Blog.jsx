"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { chunkArray } from "@/utils/formater";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Modal from "./Modal";
import { Link } from "../../../../../navigation";
import { useTranslations } from "next-intl";
import MainTitle from "@/components/MainTitle";
import { blogData } from "@/data/blogs";

const Blog = () => {
  const t = useTranslations("menu");

  const [outputArray, setOutputArray] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
    setOutputArray(chunkArray(blogData, 4)); // Gunakan mocked data
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      <MainTitle title={t("blog.title")} />
      <div>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{
            el: ".blog-progation-one",
            clickable: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
        >
          {outputArray.map((elm, i) => (
            <SwiperSlide key={i}>
              <div className="gap-4 grid grid-cols-1 lg:grid-cols-1">
                {elm.map((elm2, i2) => (
                  <div
                    key={i2}
                    onClick={() => openModal(elm2)} // Set modal content on click
                    className="dark:bg-black odd:bg-lightPrimary even:bg-lightSecondary p-4 dark:border dark:border-bodyText rounded-lg cursor-pointer"
                  >
                    <BlogCard
                      img={elm2.imgSrc}
                      title={elm2.title}
                      tag={elm2.category}
                      description={elm2.desc[0]} // Display the first paragraph as a snippet
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center blog-progation blog-progation-one"></div>
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalContent={modalContent}
        />
      </div>
    </>
  );
};

export default Blog;
