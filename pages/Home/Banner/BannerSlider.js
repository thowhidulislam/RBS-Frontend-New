import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";
import style from "../../../styles/Banner.module.css";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Slider({ bannerImagesData }) {
  console.log(bannerImagesData);
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsSSR(false);
  }, []);
  return (
    <>
      {!isSSR && (
        <div>
          <>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {bannerImagesData?.images?.map((image, index) => (
                <>
                  <SwiperSlide
                    key={image.id}
                    className={`${style.slideImg} slideImg`}
                  >
                    <Image
                      src={image.img}
                      alt="banner image"
                      height="400px"
                      width="600px"
                      style={{ objectFit: "cover" }}
                    />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </>
        </div>
      )}
    </>
  );
}
