import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import purchaseStyles from "./PurchaseCard.module.css";
import hoverImage from "../../public/footer-image1.png";
import Link from "next/link";
import Aos from "aos";

const PurchaseCard = ({ purchaseCardData }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1400,
      easing: "ease-in-out-quart",
    });
  }, []);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <div style={{ display: purchaseCardData?.isShow ? "block" : "none" }}>
        {purchaseCardData?.items?.map((data, index) => (
          <Card
            className={`${purchaseStyles.gradientBackground}  container-lg px-5 py-5 overflow-hidden border-0`}
            key={data?.id}
            // data-aos="fade-down-left"
            data-aos="flip-up"
            // data-aos-duration="1000"
          >
            <div className="position-relative ">
              <div className="overflow-hidden">
                <div
                  className={`${purchaseStyles.imagePosition} position-absolute d-none d-lg-block`}
                >
                  <Image src={hoverImage} alt="" className="img-fluid"></Image>
                </div>
              </div>
              <p className="fs-3 fw-bold text-white">{data?.title}</p>
              <p className="fs-3 fw-bold text-white">{data?.subTitle}</p>
              <Link href="/pricing">
                <button
                  className={` ${purchaseStyles.footerButton} border-0 px-3 py-2 rounded-1`}
                >
                  To know more <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PurchaseCard;
