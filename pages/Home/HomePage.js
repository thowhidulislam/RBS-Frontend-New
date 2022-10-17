import Banner from "./Banner/Banner";

// import Home3rd from "./Home3rd";
import Home2nd from "./Home2nd/Home2nd";
import Home4th from "./Home4th";
import Home6th from "./Home6th/Home6th";
import Home7th from "./Home7th/Home7th";
import Home3rd from "./Home3rd/Home3rd";
import Home10th from "./Home10th/Home10th";
import Home9th from "./Home9th/Home9th";
import Home8th from "./Home8th/Home8th";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import Home5th from "./Home5th/Home5th";

const HomePage = ({
  bannerData,
  bannerImagesData,
  home2ndData,
  home3rdData,
  home5thData,
  home4thData,
  home7thData,
  home6thData,
  home8thData,
  home9thData,
  home10thData,
  purchaseCardData,
}) => {
  return (
    <div>
      <div>
        <Banner bannerData={bannerData} bannerImagesData={bannerImagesData} />

        <Home2nd home2ndData={home2ndData} />
        <Home3rd home3rdData={home3rdData} />
        <Home4th home4thData={home4thData} />
        <Home5th home5thData={home5thData} />
        <Home6th home6thData={home6thData} />
        <Home7th home7thData={home7thData} />
        <Home8th home8thData={home8thData} />
        <Home9th home9thData={home9thData} />
        <PurchaseCard purchaseCardData={purchaseCardData} />
      </div>
    </div>
  );
};

export default HomePage;
