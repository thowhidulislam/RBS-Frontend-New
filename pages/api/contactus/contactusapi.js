import { contactUsDemo } from "../../../public/JSON/contactus/contactus";

export default function handler (req,res) {
    res.status(200).json(contactUsDemo)
}