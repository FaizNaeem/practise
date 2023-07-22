import {db } from "./app.mjs";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 
document.getElementById("btn").addEventListener("click",async()=>{
var text =document.getElementById("text").value
    try {
      const docRef = await addDoc(collection(db, "faiz"), {
    text:text,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
})