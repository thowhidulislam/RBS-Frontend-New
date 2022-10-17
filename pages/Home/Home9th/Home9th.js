import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Home9thSlider from "./Home9thSlider";

const Home9th = ({ home9thData }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-quart",
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
        }}
      >
        <div>
          <h1
            className="fs-2 text-center fw-bold  m-auto"
            style={{ width: "80%" }}
            data-aos="zoom-out"
          >
            {home9thData?.title}
          </h1>
          <div className="my-5 gap-5">
            <Row className="d-flex justify-content-md-between">
              <Col xs={12} md={5}>
                {home9thData?.items?.map((data, index) => (
                  <div key={data.id}>
                    <Col
                      className=" shadow-lg rounded-3 me-md-5 "
                      data-aos="zoom-in-up"
                    >
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
                      data-aos="zoom-in-up"
                    >
                      <FontAwesomeIcon
                        className="text-center pt-3 ps-3"
                        icon={faCheckCircle}
                        size="2x"
                        color="#FF9900"
                      />
                      <p className=" fs-6 p-3 text-white ">{data?.subTitle2}</p>{" "}
                    </Col>
                    <Col
                      className=" shadow-lg rounded-3 me-md-5"
                      data-aos="zoom-in-up"
                    >
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
              <Col xs={12} md={7}>
                <Home9thSlider sliderData={home9thData?.pics} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Home9th;
