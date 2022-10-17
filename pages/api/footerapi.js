import { footerDemoData } from "../../public/JSON/Footer/footer";

export default function handler(req,res){
    res.status(200).json(footerDemoData)
}