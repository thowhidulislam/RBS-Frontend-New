import { pricingDemoData } from "../../../public/JSON/Pricing/pricing";

export default function handler (req,res){
    res.status(200).json(pricingDemoData)
}