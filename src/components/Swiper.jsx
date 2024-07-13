"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperContent = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        // pagination={{
        //   el: ".blog-progation-one",
        //   clickable: true,
        // }}
        pagination={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            //   spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              width={145}
              height={96}
              alt={`Tech logo ${index + 1}`}
              className="w-[145px] md:w-16 h-[96px] md:h-16 object-contain"
              src={item.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="mt-10 text-center blog-progation blog-progation-one"></div> */}
    </>
  );
};

export default SwiperContent;
