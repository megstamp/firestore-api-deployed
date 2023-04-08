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
