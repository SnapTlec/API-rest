import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import 'dotenv/config'

const {Schema} = mongoose

const usuarioSchema = new Schema({
    id: {
        type : String,
        select:true
    },
    email: {
        type : String,
        unique: true, 
        required : true,
        lowercase: true,
        select: true
    },
    senha: {
        type: String, 
        required: true,
        select: false
    },
    criadoEm:{
        type: Date,
        default: Date.now,
        select: true
    },
    
})

usuarioSchema.pre('save', async function(next){
    const senhaCrypt = await bcrypt.hash(this.senha, 12)
    this.senha = senhaCrypt

    next()
})

const usuarios = mongoose.model('usuarios', usuarioSchema)

export default usuarios