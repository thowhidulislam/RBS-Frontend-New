import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home7th = ({ home7thData }) => {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(226, 246, 254) 30%, rgb(249, 236, 248) 100% )",
        padding: "50px 0",
      }}
    >
      <div
        className=" container-lg mx-auto"
        style={{
          fontFamily: "Poppins",
          display: home7thData?.isShow ? "block" : "none",
        }}
      >
        {home7thData?.titleData?.map((data, index) => (
          <div key={data?.id}>
            <h1 className="fs-2 text-center fw-bold my-3">{data?.title}</h1>
            <p className="text-center mb-5 " style={{ fontSize: "20px" }}>
              {data?.description}
            </p>
          </div>
        ))}
        <div className="row row-cols-2 row-cols-md-4 g-4 justify-content-center text-center">
          {home7thData?.items?.map((data, index) => (
            <div key={data?.id} className="">
              <Card
                className=" card rounded shadow-lg border-0"
                style={{
                  height: "150px",
                }}
              >
                <div className="m-auto">
                  <div className="d-flex justify-content-center mt-1">
                    <FontAwesomeIcon
                      className=" p-3 rounded-2 fs-3"
                      style={{
                        color: data?.color,
                      }}
                      icon={data?.icon}
                    />{" "}
                  </div>
                  <div>
                    <h1 className="fs-6 fw-bold p-3 ">{data?.title}</h1>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home7th;
