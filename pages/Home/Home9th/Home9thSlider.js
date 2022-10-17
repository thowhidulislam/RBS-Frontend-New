import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Home9thSlider = ({ sliderData }) => {
  return (
    <>
      <div className="w-100 rounded-5 overflow-hidden ">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          observer={true}
          observerParents={true}
          className="mySwiper"
        >
          {sliderData?.map((data) => (
            <SwiperSlide key={data.id}>
              <Image
                key={data.id}
                src={data.img}
                width={640}
                height={510}
                layout="responsive"
                objectFit="cover"
                alt="image"
                className="rounded-5"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home9thSlider;
