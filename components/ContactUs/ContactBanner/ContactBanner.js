import NavBar from "../../../pages/Home/Navbar/NavBar";
import bannerCommon from "../../../public/bannerCommon.png";
import styles from "./contactBanner.module.css";

const ContactBanner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bannerCommon.src})`,
        height: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        fontFamily: "Poppins",
      }}
    >
      <NavBar />
      <div className="text-white text-center">
        <h1 className={`${styles.bannerText} bannerText`}>Contact Us</h1>
      </div>
    </div>
  );
};

export default ContactBanner;
