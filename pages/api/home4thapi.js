import { home4thJson } from "../../public/JSON/home4thJson";

export default function handler(req, res) {
    res.status(200).json(home4thJson)
}