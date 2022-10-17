import { home5thDemoData } from "../../public/JSON/Home5th/Home5th";

export default function handler(req,res){
    res.status(200).json(home5thDemoData)
}
