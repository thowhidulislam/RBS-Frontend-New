import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";
import rbsLogo from "../../public/RBS_logo.png";
import footerStyles from "./Footer.module.css";
import hoverImage from "../../public/footer-image1.png";
import footerBgImage from "../../public/footer-gradient-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const demoData = [
    {
      id: 1,
      title: "Help and Advice",
      lists: [
        {
          url: "/",
          item: "How it Work",
        },
        {
          url: "/",
          item: "24/7 Customer Support",
        },
        {
          url: "/",
          item: "Term and Condition",
        },
        {
          url: "/",
          item: "Privacy Policy",
        },
      ],
    },
    {
      id: 2,
      title: "Our Features",
      lists: [
        {
          url: "/",
          item: "Open Source",
        },
        {
          url: "/",
          item: "Faster Performance",
        },
        {
          url: "/",
          item: "Term and Condition",
        },
        {
          url: "/",
          item: "Privacy Policy",
        },
        {
          url: "/",
          item: "Customer Spotlight",
        },
        {
          url: "/",
          item: "Reseller Program",
        },
        {
          url: "/",
          item: "Careers",
        },
        {
          url: "/",
          item: "Terms of Service",
        },
      ],
    },
    {
      id: 3,
      title: "Our Features",
      lists: [
        {
          url: "/",
          item: "Email: demo@example.com",
        },
        {
          url: "/",
          item: "Phone: 94273492324",
        },
        {
          url: "/",
          item: "Address: Collins street, West Victoria, Australia ",
        },
      ],
    },
  ];
  return (
    <section
      className="container-fluid pt-5"
      style={{
        backgroundImage: `url(${footerBgImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "Poppins",
      }}
    >
      <div className="py-5">
        <Card
          className={`${footerStyles.gradientFooter}  container-lg px-5 py-5 overflow-hidden border-0`}
        >
          <div className="position-relative ">
            <div className="overflow-hidden">
              <div
                className={`${footerStyles.footerHoverImage} position-absolute d-none d-lg-block`}
              >
                <Image src={hoverImage} alt=""></Image>
              </div>
            </div>
            <p className="fs-3 fw-bold text-white">Ready To Start Work?</p>
            <p className="fs-3 fw-bold text-white">Purchase Now!</p>
            <button
              className={` ${footerStyles.footerButton} border-0 px-3 py-2 rounded-1`}
            >
              More Features <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </Card>
      </div>
      <div className="d-flex flex-column justify-content-center container-lg mt-5">
        <div className="footer-top-part row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {demoData.map((data, index) => (
            <div key={index} className="">
              <h1 className="fs-4 fw-bold">{data.title}</h1>
              <ul className="ms-0 ps-0">
                {data.lists.map((itemData, index) => (
                  <Link href={itemData?.url} key={index}>
                    <li
                      className="fs-6"
                      style={{ listStyle: "none", cursor: "pointer" }}
                    >
                      {itemData.item}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom-part d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="">
            {" "}
            <Image
              src={rbsLogo}
              width="200px"
              height="150px"
              layout="fixed"
              alt=""
              className="img-fluid"
            ></Image>
          </div>
          <div>
            <p className="fs-6">
              Copyright &copy; {new Date().getFullYear()} RBS Tech, All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
