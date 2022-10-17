import { Card } from "react-bootstrap";
import style from "./Home2nd.module.css";
import React from "react";
import { useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import axios from "axios";

const Home2nd = ({ home2ndData }) => {
  const [isSSR, setIsSSR] = React.useState(true);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  // const home2ndData = axios.get("./api/home2ndapi.js").then((res) => {
  //   console.log(res.data);
  // });

  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <div
        className="container  mx-auto"
        style={{
          fontFamily: "Poppins",
          display: home2ndData?.isShow ? "block" : "none",
        }}
      >
        {" "}
        <div
          style={{
            display: home2ndData?.titleData?.isShow ? "block" : "none",
          }}
          className={`${style.description}`}
        >
          {home2ndData?.titleData?.titleItems?.map((data) => (
            <div key={data.id}>
              <h1 className="fs-2 text-center fw-bold ">{data.title} </h1>
              <p className="text-center fs-6 mb-5">{data.titleDescription} </p>
            </div>
          ))}
        </div>
        <div className="row row-cols-2 row-cols-md-5 g-4 justify-content-center text-center">
          {home2ndData?.cardItem?.items.map((card) => (
            <div key={card.id} className="">
              <Card
                className=" card shadow-lg rounded"
                style={{
                  backgroundImage: `url(${card?.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  backgroundBlendMode: "multiply",
                  height: "80px",
                  color: "white",
                  fontSize: "15px",
                }}
              >
                <div className=" m-auto">
                  <h1 className="p-3 fs-6 ">{card?.title}</h1>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2nd;
