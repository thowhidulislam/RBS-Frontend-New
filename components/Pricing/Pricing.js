import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import pricingStyles from "./Pricing.module.css";

const Pricing = ({ pricingData }) => {
  console.log(pricingData);
  return (
    <section
      style={{
        display: pricingData?.isShow ? "block" : "none",
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <Card className={`${pricingStyles.priceCard} mx-auto  p-3 border-0`}>
        <Card.Body>
          <Card.Title className="fs-2 fw-bold pt-3">
            {pricingData?.title}
          </Card.Title>
          <Card.Subtitle className="fw-normal my-3">
            {pricingData?.description}
          </Card.Subtitle>
          <div>
            <Row className="g-4">
              {pricingData?.items?.map((data, index) => (
                <Col key={index} sm={1} md={3}>
                  <Card
                    className={`${pricingStyles.singlePriceCard} my-2 my-lg-5 py-2 border-0`}
                    style={{
                      backgroundColor: data?.status === "active" && "#353B80",
                      color: data?.status === "active" && "#FFF",
                      display: data?.isShow ? "block" : "none",
                    }}
                    // #8f5df4
                  >
                    <Card.Body>
                      <h1 className="fs-4 fw-bold py-3">{data?.title}</h1>
                      <h1 className="">
                        <span className="fs-1 fw-bold">${data?.price}</span>
                        <span className="fs-6 fw-normal">/month</span>
                      </h1>
                      <p className="fs-6 py-3 fw-normal">{data?.description}</p>
                      <ul className="list-unstyled">
                        {data?.features?.map((item, index) => (
                          <li key={index}>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              color={
                                data?.status === "active" ? "#FFF" : "#353B80"
                              }
                              className="me-1"
                            />
                            {item?.name}
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`${pricingStyles.buttonGradientOutline} my-3`}
                        style={{
                          backgroundColor: data?.status === "active" && "#FFF",
                        }}
                      >
                        <span className="fw-bold">Choose plan</span>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Pricing;
