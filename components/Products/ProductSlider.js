import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Card } from "react-bootstrap";
import Image from "next/image";

const ProductSlider = ({ productSliderData }) => {
  console.log(productSliderData);
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <section
      style={{
        display: productSliderData?.isShow ? "block" : "none",
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      {!isSSR && (
        <div className="container-lg">
          <h1 className="text-center text-decoration-underline pb-5">
            {productSliderData?.title}
          </h1>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {productSliderData?.items?.map((data, index) => (
              <>
                {data?.isShow && (
                  <SwiperSlide key={data?.id}>
                    <Card className="border-0 overflow-hidden">
                      <div className="w-100 ">
                        <Image
                          src={data?.image}
                          alt=" "
                          variant="top"
                          layout="responsive"
                          width={300}
                          height={150}
                          objectFit="cover"
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>{data?.title}</Card.Title>
                        <Card.Text>{data?.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                )}
              </>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default ProductSlider;
