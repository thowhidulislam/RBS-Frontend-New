import { home6thJson } from "../../public/JSON/home6thJson";

export default function handler(req, res) {
    res.status(200).json(home6thJson)
}