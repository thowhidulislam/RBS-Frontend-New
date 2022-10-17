import React from 'react';
import ProductBanner from '../components/Products/ProductBanner';
import NavBar from './Home/Navbar/NavBar';
import Products1 from '../components/Products/Products1';
import Products2 from '../components/Products/Products2';
import ProductSlider from '../components/Products/ProductSlider';
import FooterCommon from '../components/FooterCommon/FooterCommon';
import axios from 'axios';

const products = ({ productBannerData,product1Data,product2ndData,productSliderData }) => {
    return (
        <div style={{
            color: "rgb(23, 52, 101)",
            fontFamily: 'Poppins'
        }}>
            
            <ProductBanner productBannerData={productBannerData} />
            <Products1 product1Data={product1Data} />
            <Products2 product2ndData={product2ndData} />
            <ProductSlider productSliderData={productSliderData} />
          
        </div>
    );
};
export default products;

export async function getServerSideProps() {
    const productBannerData = await axios.get('http://localhost:3000/api/products/productbannerapi')
    const product1Data = await axios.get('http://localhost:3000/api/products/product1api')
    const product2ndData = await axios.get('http://localhost:3000/api/products/product2ndapi')
    const productSliderInfos = await axios.get('http://localhost:3000/api/products/productSliderapi')
    
    return {
        props: {
            productBannerData: productBannerData.data,   
            product1Data: product1Data.data,   
            product2ndData: product2ndData.data,   
            productSliderData: productSliderInfos.data,   
        }
    }

}
