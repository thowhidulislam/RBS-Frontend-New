import { banner } from "../../public/JSON/banner";

export default function handler(req, res) {
    res.status(200).json(banner)
  }