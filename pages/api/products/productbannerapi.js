import { productBannerJson } from "../../../public/JSON/products/productsBannerJson";

export default function handler(req, res) {
    res.status(200).json(productBannerJson)
}