import mongoose from "mongoose"

const {Schema} = mongoose

const livroSchema = new Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeroPagina: {type: Number}
})

const livros = mongoose.model('livros', livroSchema)

export default livros