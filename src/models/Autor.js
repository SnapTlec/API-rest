import {mongoose, Schema} from "mongoose"

const autorSchema = new Schema({
    id: {type : String, required},
    nome : {type : String, required},
    nacionalidade: {type: String}
})

const autores = mongoose.model("autores", autorSchema)

export default autores
