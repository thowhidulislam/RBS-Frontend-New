import Image from "next/image";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Home9thSlider = ({ home9thData }) => {
  console.log(home9thData);
  return (
    <div className="w-100 rounded-5 overflow-hidden">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {home9thData?.pics?.map((data) => (
          <SwiperSlide key={data.id}>
            <Image
              key={data.id}
              src={data?.img}
              width={640}
              height={510}
              layout="responsive"
              objectFit="contain"
              alt="image"
              className="rounded-5"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home9thSlider;
