import { home7thDemoData } from "../../public/JSON/Home7th/Home7th";

export default function handler(req,res){
    res.status(200).json(home7thDemoData)
}