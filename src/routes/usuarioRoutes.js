import express from "express"
import UsuarioController from "../controllers/usuariosController.js"

const router = express.Router()

router
    .get('/usuarios', UsuarioController.listaUsuarios)
    .get('/usuarios:id', UsuarioController.listaUsuarioPorId)
    .post('/usuarios', UsuarioController.cadastrarUsuario)
    .put('/usuario/:id', UsuarioController.atualizarUsuario)
    .delete('/usuarios/:id', UsuarioController.removerUsuario)

export default router
