import React from "react";
import AboutBanner from "../components/AboutUs/AboutBanner";
import Team from "../components/AboutUs/Team";
import axios from "axios";
import About2nd from "../components/AboutUs/About2nd";
import About3rd from "../components/AboutUs/About3rd";

const AboutUs = () => {
  const [about2ndData, setAbout2ndData] = React.useState({});
  const [about3rdData, setAbout3rdData] = React.useState({});
  const [teamData, setTeamData] = React.useState({});

  React.useEffect(() => {
    axios.get("/api/aboutus/about2ndapi").then((res) => {
      setAbout2ndData(res.data);
    });
    axios.get("/api/about3rdapi").then((res) => {
      setAbout3rdData(res.data);
    });
    axios.get("/api/teamapi").then((res) => {
      setTeamData(res.data);
    });
  }, []);

  return (
    <div
      style={{
        color: "rgb(23, 52, 101)",
        fontFamily: "Poppins",
      }}
    >
      <AboutBanner></AboutBanner>
      <About2nd about2ndData={about2ndData} />
      <About3rd about3rdData={about3rdData} />
      <Team teamData={teamData} />
    </div>
  );
};

export default AboutUs;
