import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get('/livros', LivroController.listaLivros)
    .post('/livros', LivroController.cadastrarLivro)

export default router
