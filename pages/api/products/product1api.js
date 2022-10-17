import { product1stJson} from '../../../public/JSON/products/product1Json';

export default function handler(req, res) {
    res.status(200).json(product1stJson)
}