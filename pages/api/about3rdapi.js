
import { about3rdJson } from "../../public/JSON/about3rdJson";

export default function handler(req, res) {
    res.status(200).json(about3rdJson)
}