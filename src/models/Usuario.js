import mongoose from "mongoose"

const {Schema} = mongoose

const usuarioSchema = new Schema({
    id: {type : String},
    email: {type : String, required : true},
    senha: {type: String, required: true}
})

const usuarios = mongoose.model('usuarios', usuarioSchema)

export default usuarios