import axios from "axios";
import Policy from "../components/Pricing/Policy/Policy";
import Pricing from "../components/Pricing/Pricing"
import PricingBanner from "../components/Pricing/PricingBanner";

const pricing = ({pricingData,policyData }) => {
    return (
        <>
            <PricingBanner/>
            <Pricing pricingData={pricingData}/>
            <Policy policyData={policyData}/>
        </>
    );
};

export default pricing;

export async function getServerSideProps(){
    const pricingInfos= await axios.get('http://localhost:3000/api/pricing/pricingapi')
    const policyInfos= await axios.get('http://localhost:3000/api/pricing/policyapi')
    return {
        props:{
            pricingData: pricingInfos.data,
            policyData: policyInfos.data,
        }
    }
}