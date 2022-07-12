import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leoBrito:1234@cluster0.derm3.mongodb.net/alura-node")

let db = mongoose.connection

export default db