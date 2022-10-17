import { home10thJson } from "../../public/JSON/home10thJson";

export default function handler(req, res) {
    res.status(200).json(home10thJson)
}