import { teamJson } from "../../public/JSON/teamJson";

export default function handler(req, res) {
    res.status(200).json(teamJson)
}