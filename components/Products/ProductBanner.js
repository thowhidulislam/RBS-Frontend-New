import Image from "next/image";
import NavBar from "../../pages/Home/Navbar/NavBar";
import style from "../Products/ProductBanner.module.css";

const ProductBanner = ({ productBannerData }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(226, 246, 254)",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div
        className=" "
        style={{ display: productBannerData.isShow ? "block" : "none" }}
      >
        <div className=" border border-0">
          {productBannerData?.items?.map((data) => (
            <div
              key={data.id}
              className=" d-flex flex-column flex-lg-row align-items-center container-lg"
              style={{ fontFamily: "Poppins" }}
            >
              <div className="">
                <h1 className={`${style.bannerText}  fw-bold  ps-5`}>
                  {data.title}
                </h1>
              </div>
              <div className=" w-100 ">
                <Image
                  className="rounded-5"
                  src={data.img}
                  alt=" "
                  height={300}
                  width={700}
                  objectFit="contain"
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
