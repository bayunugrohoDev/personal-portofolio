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

const Blog = () => {
  const t = useTranslations("menu");

  const [outputArray, setOutputArray] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setShowSlider(true);

    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        console.log('data',data)
      if(data.error){
        throw new Error('Error!');
      }
        setOutputArray(chunkArray(data, 4));
        setIsError(false)
      } catch (error) {
        console.error("Failed to fetch posts", error);
        setIsError(true)
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <MainTitle title={t("blog.title")} />
      {
        isError && <p className="text-danger">Error failed fetch medium blog api, please check console</p>
      }
      <div>
        {isLoading ? (
          <div className="p-5 text-center italic">
            please wait, fetching data from medium api...
          </div>
        ) : (
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
                    <Link
                      className="dark:bg-black odd:bg-lightPrimary even:bg-lightSecondary p-4 dark:border dark:border-bodyText rounded-lg"
                      href={`/blog/${elm2.title
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                      key={i2}
                    >
                      <BlogCard
                        img={
                          elm2["content:encoded"].match(
                            /<img[^>]+src="([^">]+)/,
                          )?.[1] || "default-image-url"
                        }
                        title={elm2.title}
                        tag={
                          elm2.categories
                            ? elm2?.categories?.join(", ")
                            : "No Category"
                        }
                        description={elm2["content:encodedSnippet"]}
                      />
                    </Link>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
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
