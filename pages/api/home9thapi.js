import { home9thDemoData } from "../../public/JSON/home9th/home9th";

export default function handler(req,res) {
    res.status(200).json(home9thDemoData)
}