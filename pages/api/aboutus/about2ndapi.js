import { about2ndDemoData } from "../../../public/JSON/Aboutus/about2nd";

export default function handler(req,res){
    res.status(200).json(about2ndDemoData)
}