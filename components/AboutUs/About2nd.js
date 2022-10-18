import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import about2ndStyles from "./About2nd.module.css";

const Home2nd = ({ about2ndData }) => {
  console.log(about2ndData);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <div
        className="container-lg mx-auto"
        style={{
          fontFamily: "Poppins",
        }}
      >
        {about2ndData?.titleData?.map((data, index) => (
          <div key={data?.id}>
            <h1
              className="text-center fw-bold my-3"
              style={{ fontSize: "50px" }}
            >
              {data?.title}
            </h1>
            <p
              className={`${about2ndStyles.description} text-justify fs-6 mb-5`}
            >
              {data?.description}
            </p>
          </div>
        ))}
        <div>
          <h1 className="text-center fs-2 fw-bold p-5">
            {about2ndData?.subSection?.title}
          </h1>
          <div className="row row-cols-1 row-cols-md-4 g-2">
            {about2ndData?.subSection?.items?.map((data, index) => (
              <div key={data.id}>
                <div>
                  <Card
                    className=" card shadow-lg rounded border-0 "
                    style={{ height: "280px" }}
                  >
                    <div className="d-flex justify-content-center">
                      <FontAwesomeIcon
                        className="fw-semibold py-3 px-2  "
                        style={{
                          fontSize: "50px",
                        }}
                        icon={data?.icon}
                        color={data?.color}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-5 fw-bold text-center">
                        {data?.title}
                      </Card.Title>
                      <Card.Text
                        className="text-left"
                        style={{ fontSize: "15px" }}
                      >
                        {data?.description}
                      </Card.Text>
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

export default Home2nd;
