import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Aos from "aos";

const Home3rd = ({ home3rdData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <div
      style={{
        fontFamily: "Poppins",
        display: home3rdData?.isShow ? "block" : "none",
        background: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      <div className="d-flex flex-column flex-lg-row align-items-center container-lg">
        <div className="p-3 w-50" data-aos="zoom-in-down">
          {home3rdData?.items?.map((data, index) => (
            <div
              key={data?.id}
              style={{ display: data?.isShow ? "block" : "none" }}
            >
              <h1 className="fs-2 fw-bold">{data?.title}</h1>
              <p
                className="fs-6"
                style={{
                  color: "rgb(75, 101, 126)",
                }}
              >
                {data?.description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#00D2D2" />
                </span>
                {data?.subTitle1}
              </h3>
              <p
                className="fs-6"
                style={{
                  color: "rgb(75, 101, 126)",
                  textAlign: "justify",
                }}
              >
                {data?.subTitle1Description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#FF9900" />
                </span>
                {data?.subTitle2}
              </h3>
              <p
                className="fs-6"
                style={{
                  color: "rgb(75, 101, 126)",
                }}
              >
                {data?.subTitle2Description}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#FF7575" />
                </span>
                {data?.subTitle3}
              </h3>
              <p
                className="fs-6 my-4"
                style={{
                  color: "rgb(75, 101, 126)",
                }}
              >
                {data?.subTitle3Description}
              </p>
            </div>
          ))}
        </div>
        <div className="p-3 w-50" data-aos="zoom-in-down">
          {home3rdData?.items?.map((data, index) => (
            <Image
              key={data?.id}
              src={data?.image}
              alt=" "
              objectFit="cover"
              width={500}
              height={450}
              layout="responsive"
              className="rounded-5 p-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home3rd;
