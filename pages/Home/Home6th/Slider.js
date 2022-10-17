import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import style from "./Home6th.module.css";
// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Slider({ sliderData }) {
  console.log(sliderData);
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      {!isSSR && (
        <div
          className={`${style.background} container-lg my-5 p-5 mx-auto rounded-5 text-white`}
        >
          <Swiper
            className={`${style.swiper} `}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            spaceBetween={30}
            centeredSlides={true}
            // scrollbar={{ draggable: true }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
          >
            {sliderData?.map((data) => (
              <>
                {data.isShow && (
                  <SwiperSlide key={data.id} className={`${style.SwiperSlide}`}>
                    <h1>{data.client}</h1>
                  </SwiperSlide>
                )}
              </>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
