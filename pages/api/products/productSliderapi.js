import { productSliderDemo } from "../../../public/JSON/products/productSlider";

export default function handler(req,res){
    res.status(200).json(productSliderDemo)
}