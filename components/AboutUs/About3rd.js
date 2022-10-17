import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About3rd = ({ about3rdData }) => {
  return (
    <div
      style={{
        display: about3rdData.isShow ? "block" : "none",
        background: "rgb(226, 246, 254)",
        padding: "50px 0",
      }}
    >
      {about3rdData?.items?.map((data) => (
        <div
          key={data.id}
          className="d-flex flex-column flex-lg-row  align-items-center container-lg"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="p-3">
            <h1 className="fs-2 fw-bold">{data.title}</h1>
            <p
              className="fs-6 my-4"
              style={{
                color: "rgb(75, 101, 126)",
              }}
            >
              {data.titleDescription}
            </p>
            <h3 className="fs-5 fw-bold d-flex align-items-center">
              <span className="me-2">
                <FontAwesomeIcon
                  fontSize="xs"
                  icon={data.icon}
                  color="orange"
                />
              </span>
              <span className="">{data.subTitle1}</span>
            </h3>
            <p
              className="fs-6"
              style={{
                color: "rgb(75, 101, 126)",
              }}
            >
              {data.subTitleDescription1}
            </p>

            <h3 className="fs-5 fw-bold d-flex align-items-center">
              <span className="me-2">
                <FontAwesomeIcon
                  fontSize="xs"
                  icon={data.icon}
                  color="purple"
                />
              </span>
              <span>{data.subTitle2}</span>
            </h3>
            <p
              className="fs-6 "
              style={{
                color: "rgb(75, 101, 126)",
              }}
            >
              {data.subTitleDescription2}
            </p>
          </div>
          <div className="p-3 w-100">
            <Image
              className=" rounded-5"
              src={data.img}
              alt=" "
              width={400}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About3rd;
