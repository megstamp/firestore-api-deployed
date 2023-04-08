import functions from "firebase-functions";
import express from "express";
import cors from "cors"

const app = express ()
app.use(cors())
app.use(express.json())

app.get("/beverages", getAllBeverages)
app.post("/beverages", createNewBeverage)


export const api = functions.https.onRequest(app)
