import { home2ndJson } from "../../public/JSON/home2ndJson";

export default function handler(req, res) {
  res.status(200).json(home2ndJson);
}
