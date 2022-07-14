import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router
    .get('/livros', LivroController.listaLivros)
    .get('/livros/:id', LivroController.listaLivrosPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.removerLivro)

export default router
