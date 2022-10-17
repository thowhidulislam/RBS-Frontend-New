import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Home4th = ({ home4thData }) => {
  return (
    <div
      className=""
      style={{
        display: home4thData?.isShow ? "block" : "none",
        backgroundImage:
          "linear-gradient(120deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        padding: "50px 0",
      }}
    >
      <div className="d-flex flex-column flex-lg-row align-items-center container-lg">
        <div
          className="p-3 w-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {home4thData?.items?.map((data, index) => (
            <Image
              key={data?.id}
              src={data?.img}
              alt=" "
              objectFit="cover"
              width={500}
              height={400}
              layout="responsive"
              className="rounded-5 p-2"
            />
          ))}
        </div>
        <div
          className="p-3 w-50"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {home4thData?.items?.map((data, index) => (
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
                {data?.subTitleDescription1}
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
                {data?.subTitleDescription2}
              </p>
              <h3 className="fs-5 fw-bold d-flex align-items-center">
                <span className="me-2">
                  <FontAwesomeIcon icon={faCheckCircle} color="#FF7575" />
                </span>
                {data?.subTitle3}
              </h3>
              <p
                className="fs-6"
                style={{
                  color: "rgb(75, 101, 126)",
                }}
              >
                {data?.subTitleDescription3}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home4th;
