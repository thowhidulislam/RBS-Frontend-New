import { policyDemoData } from "../../../public/JSON/Pricing/policy";

export default function handler (req,res){
    res.status(200).json(policyDemoData)
}