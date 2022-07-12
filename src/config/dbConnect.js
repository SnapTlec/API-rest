import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leoBrito:1234@cluster0.derm3.mongodb.net/?retryWrites=true&w=majority")

let db = mongoose.connection

export default db