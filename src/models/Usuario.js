import mongoose from "mongoose"

const {Schema} = mongoose

const usuarioSchema = new Schema({
    id: {
        type : String
    },
    email: {
        type : String,
        unique: true, 
        required : true,
        lowercase: true
    },
    senha: {
        type: String, 
        required: true,
        select: false
    },
    criadoEm:{
        type: Date,
        default: Date.now
    },
    
})

const usuarios = mongoose.model('usuarios', usuarioSchema)

export default usuarios