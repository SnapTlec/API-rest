import express from "express"
import AutorController from "../controllers/autoresController.js"

const router = express.Router()

router
    .get('/autores', AutorController.listaAutores)
    .get('/autores/:id', AutorController.listaAutoresPorId)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.removerAutor)

export default router
