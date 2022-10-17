import {product2ndJson} from '../../../public/JSON/products/product2ndJson'

export default function handler(req, res) {
    res.status(200).json(product2ndJson)
}