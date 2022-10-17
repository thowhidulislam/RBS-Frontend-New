// import React from "react";
// import ProductBanner from "../components/Products/ProductBanner";
// import Products1 from "../components/Products/Products1";
// import Products2 from "../components/Products/Products2";
// import ProductSlider from "../components/Products/ProductSlider";
// import axios from "axios";

// const Products = () => {
//   const [productBannerData, setProductBannerData] = React.useState({});
//   const [product1Data, setProduct1Data] = React.useState({});
//   const [product2ndData, setProduct2ndData] = React.useState({});
//   const [productSliderData, setProductSliderData] = React.useState({});

//   React.useEffect(() => {
//     axios.get("/api/products/productbannerapi").then((res) => {
//       setProductBannerData(res.data);
//     });
//     axios.get("/api/products/product1api").then((res) => {
//       setProduct1Data(res.data);
//     });
//     axios.get("/api/products/product2ndapi").then((res) => {
//       setProduct2ndData(res.data);
//     });
//     axios.get("/api/products/productSliderapi").then((res) => {
//       setProductSliderData(res.data);
//     });
//   }, []);

//   return (
//     <div
//       style={{
//         color: "rgb(23, 52, 101)",
//         fontFamily: "Poppins",
//       }}
//     >
//       <ProductBanner productBannerData={productBannerData} />
//       <Products1 product1Data={product1Data} />
//       <Products2 product2ndData={product2ndData} />
//       <ProductSlider productSliderData={productSliderData} />
//     </div>
//   );
// };
// export default Products;
