import Image from "next/image";
import bannerImage4 from "../../../public/bannerImage4.jpg";
import NavBar from "../Navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import bannerStyles from "../../../styles/Banner.module.css";
import { Col, Row } from "react-bootstrap";
import Aos from "aos";
import React from "react";

const Banner = ({ bannerData, bannerImagesData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-quart",
    });
  }, []);

  //get banner detail api
  const marqueeTextDemo = [
    {
      id: 1,
      text: "It's not a project management tool, It's completely  a project management software",
    },
  ];

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
      }}
    >
      <div
        className={`${bannerStyles.bannerWidth}  `}
        style={{
          backgroundImage: `url(${bannerImage4.src})`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 81% 90%, 0 100%, 0% 50%)",
        }}
      >
        <NavBar></NavBar>
        {/* marquee text */}
        <div
          style={{
            backgroundColor: "#F3F3F3",
            color: "#000",
          }}
          className="shadow-lg"
        >
          <p
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {marqueeTextDemo?.map((data) => (
              <>
                <FontAwesomeIcon icon={faCircle} size="2xs" color="red" />{" "}
                <small className="ms-2"> {data.text}</small>
              </>
            ))}
          </p>
        </div>
        <div
          className={` ${bannerStyles.bannerContent} container mx-auto  pt-5`}
        >
          <Row className="d-flex ">
            <Col md={5}>
              {bannerData?.isShow && (
                <div>
                  {bannerData?.items?.map((item, index) => (
                    <div
                      key={item?.id}
                      style={{ display: item?.isShow ? "block" : "none" }}
                    >
                      <h1
                        className="fw-bold "
                        style={{ fontSize: "45px" }}
                        data-aos="fade-down"
                        // data-aos="fade-right"
                        data-aos-offset="300"
                      >
                        {item?.title}
                      </h1>
                      <div style={{ fontSize: "18px" }}>
                        <p className=" " data-aos="fade-left">
                          <small>{item?.primaryDescription}</small>
                        </p>
                        <p className="" data-aos="fade-right">
                          <small>{item?.secondaryDescription}</small>
                        </p>
                        <p className="" data-aos="fade-up">
                          <small>{item?.tertiaryDescription}</small>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Col>
            <Col md={7}>
              {bannerImagesData?.images?.map((data, index) => (
                <Image
                  key={data.id}
                  src={data.img}
                  width={700}
                  height={500}
                  alt="project manager"
                  layout="responsive"
                  data-aos="fade-up-left"
                />
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Banner;
