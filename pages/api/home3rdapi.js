import { home3rdInfos } from "../../public/JSON/Home3rd/Home3rd"

export default function handler(req,res) {
    res.status(200).json(home3rdInfos)
}