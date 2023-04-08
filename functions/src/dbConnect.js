import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { secrets } from "../secrets.js";

//below connects to Firebase project (firestore-api-deployed)
initializeApp({
    credential:cert(secrets)
});
//below connects to firestore db
export const db = getFirestore();
