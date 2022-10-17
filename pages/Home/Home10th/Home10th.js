import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import home10thStyles from "./Home10th.module.css";
import Link from "next/link";

const Home10th = ({ home10thData }) => {
  return (
    <section
      style={{
        backgroundColor: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      <div
        className="container-lg"
        style={{
          fontFamily: "Poppins",
          display: home10thData?.isShow ? "block" : "none",
        }}
      >
        <div>
          {home10thData?.titleData?.titleItems?.map((data) => (
            <div key={data.id}>
              <h1 className="fs-2 text-center fw-bold my-3">{data.title} </h1>
              <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
            </div>
          ))}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {home10thData?.cardItem?.items?.slice(0, 3).map((card) => (
              <div key={card.id}>
                <div>
                  <Card className=" card shadow-lg rounded">
                    <div className="w-100">
                      <Image
                        className="img-fluid rounded-top"
                        src={card?.img}
                        width={500}
                        height={500}
                        objectFit="content"
                        layout="responsive"
                        alt=""
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-5 fw-bold">
                        {card.title}
                      </Card.Title>
                      <Card.Text className="fs-6">{card.description}</Card.Text>
                      <Link href="/" style={{ textDecoration: "none" }}>
                        <button
                          className={`${home10thStyles.btnColor} border-0 btn-color`}
                        >
                          Read more <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home10th;
