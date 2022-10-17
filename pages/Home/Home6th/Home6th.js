import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./Home6th.module.css";
import Slider from "./slider";
import React from "react";
import Aos from "aos";

const Home6th = ({ home6thData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div
      className="mx-auto"
      style={{
        backgroundImage: `url(${home6thData?.backgroundImage})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
        padding: "50px 0",
        backgroundColor: "rgb(30, 35, 52)",
      }}
    >
      <div
        className=" container-lg mx-auto text-white row row-cols-1 row-cols-md-3 g-4"
        data-aos="zoom-in"
      >
        <div className="text-center">
          <h1 style={{ fontSize: "60px" }}>{home6thData?.column1Title}</h1>
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <FontAwesomeIcon className={`${style.icon}`} icon={faStar} />
          <h5>{home6thData?.column1SubTitle}</h5>

          <p>{home6thData?.column1Description}</p>
        </div>
        <div>
          <blockquote className={`${style.quote} quote`}>
            {home6thData?.column2Text}{" "}
          </blockquote>
          <p>{home6thData?.column2Name}</p>
        </div>
        <div>
          <h2>{home6thData?.column3Title}</h2>

          <div className="d-flex flex-column justify-content-center align-items-center justify-content-md-start   flex-md-row ">
            <div className="w-25">
              <Image
                src={home6thData?.img}
                alt=" "
                height={150}
                width={150}
                objectFit="cover"
                layout="responsive"
                className="rounded-2"
              />
            </div>
            <div className="ms-3">
              <h6>{home6thData?.name}</h6>
              <p>{home6thData?.designation}</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <Slider sliderData={home6thData?.slider}></Slider>
      </div>
    </div>
  );
};

export default Home6th;
