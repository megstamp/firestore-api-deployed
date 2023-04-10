import { db } from "./dbConnect.js";

export async function createNewBeverage (req, res) {
    const newBeverage = req.body;
    await db.collection("beverages").add(newBeverage);
    res.status(201).send({message: "beverage added"});
}

export async function getAllBeverages (req, res) {
    const allBeverages = await db.collection("beverages").get();
    const redoBeverages = allBeverages.docs.map(doc => ({...doc.data(), id:doc.id}));
    res.send(redoBeverages);
}

export async function updateBeverages (req,res) {
    const {beverageid} = req.params;
    const newBeverageData = req.body;
    await db.collection("beverages").doc(beverageid).update(newBeverageData);
    res.status(202).send({message:"beverage updated"});
}


export async function deleteBeverage (req,res) {
    const {beverageid} = req.params;
    await db.collection("beverages").doc(beverageid).delete();
    res.status(202).send({message:"beverage.deleted"});
}
