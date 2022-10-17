import React from "react";
import gradientImage from "../../../public/gradient-image-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import home8thStyles from "./Home8th.module.css";
import Image from "next/image";

const Home8th = ({ home8thData }) => {
  return (
    <section
      className={`${home8thStyles.sectionStyles}`}
      style={{
        backgroundImage: `url(${gradientImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: home8thData?.isShow ? "block" : "none",
        padding: "50px 0",
        backgroundColor: "rgb(226, 246, 254)",
      }}
    >
      <div className="py-5 container">
        {home8thData?.items.map((data, index) => (
          <div key={index} className="row row-cols-1 row-cols-md-2 ">
            <div className="position-relative mb-lg-0  d-lg-block d-none">
              <div
                className={`${home8thStyles.dotImage} position-absolute w-100 `}
              >
                <Image
                  src={data.image5}
                  alt=""
                  height={200}
                  width={200}
                  objectFit="cover"
                  layout="responsive"
                  className=" img-fluid"
                />
              </div>
              <div
                className={`${home8thStyles.middleImage} position-absolute w-100 `}
              >
                <Image
                  src={data.image1}
                  alt=""
                  height={300}
                  width={300}
                  objectFit="cover"
                  layout="responsive"
                  className=" img-fluid"
                />
              </div>
              <div
                className={`${home8thStyles.bottomImage} position-absolute w-100 `}
              >
                <Image
                  src={data.image2}
                  alt=""
                  height={300}
                  width={300}
                  objectFit="cover"
                  layout="responsive"
                  className=" img-fluid"
                />
              </div>
              <div
                className={`${home8thStyles.topImage} position-absolute w-100 `}
              >
                <Image
                  src={data.image3}
                  alt=""
                  height={300}
                  width={300}
                  objectFit="cover"
                  layout="responsive"
                  className=" img-fluid"
                />
              </div>
              <div
                className={`${home8thStyles.checkImage} position-absolute w-100`}
              >
                <Image
                  src={data.image4}
                  alt=""
                  height={50}
                  width={50}
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
            <div>
              <h1 className="fs-2 fw-bold">{data.title}</h1>
              <p className="fs-6">{data.titleDescription}</p>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#00D2D2" />
                  </span>
                  {data.subTitle1}
                </h1>
                <p className="fs-6">{data.subTitleDescription1}</p>
              </div>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#FF9900" />
                  </span>
                  {data.subTitle2}
                </h1>
                <p className="fs-6">{data.subTitleDescription2}</p>
              </div>
              <div>
                <h1 className="fs-5 fw-bold d-flex align-items-center">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faCircleCheck} color="#FF7575" />
                  </span>
                  {data.subTitle3}
                </h1>
                <p className="fs-6">{data.subTitleDescription3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home8th;
