import NavBar from "../../pages/Home/Navbar/NavBar";
import bannerCommon from "../../public/BannerCommon.png";
import styles from "./Pricing.module.css";

const PricingBanner = () => {
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
      <div className="text-white text-center py-5 ">
        <h1 className={`${styles.bannerText} bannerText`}>Pricing</h1>
      </div>
    </div>
  );
};

export default PricingBanner;
