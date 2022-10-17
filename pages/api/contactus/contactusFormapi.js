import { contactFormData } from "../../../public/JSON/contactus/contactForm";

export default function handler (req,res) {
    res.status(200).json(contactFormData)
}