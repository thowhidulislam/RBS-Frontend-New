import { bannerImages } from "../../public/JSON/bannerImage";

export default function handler(req,res){
    res.status(200).json(bannerImages)
}