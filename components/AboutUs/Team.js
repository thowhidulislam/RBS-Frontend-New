import Image from "next/image";
import { Card } from "react-bootstrap";

const Team = ({ teamData }) => {
  console.log(teamData);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(249, 236, 248) 15%, rgb(226, 246, 254) 100%)",
        padding: "50px 0 ",
      }}
    >
      <div
        className="container-lg mx-auto"
        style={{
          fontFamily: "Poppins",
          display: teamData.isShow ? "block" : "none",
        }}
      >
        {teamData?.titleData?.titleItems?.map((textData) => (
          <div key={textData.id}>
            <h1 className="fs-2 text-center fw-bold ">{textData.title}</h1>
            <p className="text-center fs-6 mb-5">{textData.titleDescription}</p>
          </div>
        ))}

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {teamData?.cardItem?.items?.slice(0, 3).map((card) => (
            <div key={card.id}>
              <div>
                <Card className=" card shadow-lg rounded w-sm-50">
                  <Image
                    className="img-fluid rounded-top"
                    src={card.img}
                    alt=""
                    width="120px"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title className="fs-5 fw-bold">
                      {card.name}
                    </Card.Title>
                    <Card.Text className="fs-6">{card.designation}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
