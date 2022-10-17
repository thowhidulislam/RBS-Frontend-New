import { purchaseCardDemoData } from "../../public/JSON/PurchaseCard/purchaseCard";

export default function handler(req,res){
    res.status(200).json(purchaseCardDemoData)
}