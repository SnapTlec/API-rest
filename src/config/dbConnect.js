import mongoose from "mongoose";
import 'dotenv/config'

mongoose.connect(process.env.BD_STRING_CONNECTION)

let db = mongoose.connection

export default db