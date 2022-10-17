import { home8thJson } from "../../public/JSON/home8thJson";

export default function handler(req, res) {
    res.status(200).json(home8thJson)
}