import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import React from 'react';
import image2 from "../../../public/image2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Home9thSlider from "./Home9thSlider";

const Home9th = ({ home9thData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(45deg, rgb(249, 236, 248) 5%, rgb(226, 246, 254) 100%)",
        padding: "50px 0px",
      }}
    >
      <div
        className=" container"
        style={{
          fontFamily: "Poppins",
          display: home9thData?.isShow ? "block" : "none",
        }}
      >
        <div>
          <h1
            className="fs-2 text-center fw-bold  m-auto"
            style={{ width: "80%" }}
          >
            {home9thData?.title}
          </h1>
          <div className="my-5 gap-5">
            {/* <div className='row row-cols-1 row-cols-md-2'> */}
            <Row className="d-flex justify-content-md-between">
              <Col xs={12} md={5}>
                {home9thData?.items?.map((data, index) => (
                  <div key={data.id}>
                    <Col className=" shadow-lg rounded-3 me-md-5 ">
                      <FontAwesomeIcon
                        className="text-center pt-3 ps-3"
                        icon={faCheckCircle}
                        size="2x"
                        color="#00D2D2"
                      />
                      <p className=" fs-6 p-3 ">{data?.subTitle1}</p>{" "}
                    </Col>
                    <Col
                      className="shadow-lg rounded-3 mx-md-5"
                      style={{
                        backgroundColor: "#1D2333",
                      }}
                    >
                      <FontAwesomeIcon
                        className="text-center pt-3 ps-3"
                        icon={faCheckCircle}
                        size="2x"
                        color="#FF9900"
                      />
                      <p className=" fs-6 p-3 text-white ">{data?.subTitle2}</p>{" "}
                    </Col>
                    <Col className="bg-light shadow-lg rounded-3 me-md-5">
                      <FontAwesomeIcon
                        className="text-center pt-3 ps-3"
                        icon={faCheckCircle}
                        size="2x"
                        color="#FF7575"
                      />
                      <p className=" fs-6 p-3 ">{data?.subTitle3}</p>{" "}
                    </Col>
                  </div>
                ))}
              </Col>
              <Col xs={12} md={7} className="">
                <Home9thSlider home9thData={home9thData} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home9th;
