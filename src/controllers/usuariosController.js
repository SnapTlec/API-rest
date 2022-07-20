import usuarios from '../models/Usuario.js'
import AuthController from './authController.js'

class UsuarioController{
    static listaUsuarios = (req, res)=>{
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        })
    }

    static listaUsuarioPorId = (req, res) => {
        let id = req.params.id

        usuarios.findById(id, (err, usuarios) => {
            if(err){
                res.status(400).send({message : `${err.message} - Id do Usuario não encontrado`})
            }else{
                res.status(200).send(usuarios)
            }
        })
    }

    static cadastrarUsuario = (req, res) => {
        let Usuario = new usuarios(req.body)
        Usuario.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Usuario.`})
            }else{
                Usuario.senha = undefined
                res.status(200).send({
                    usuario: Usuario.toJSON(), 
                    token: AuthController.geradorToken(Usuario.id)
                })
            }
        })

    }

    static atualizarUsuario = (req, res) => {
        let id = req.params.id

        usuarios.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao atualizar o Usuario.`})
            }else{
                res.status(200).send({message : 'Usuario atualizado com sucesso.'})
            }
        })
    }

    static removerUsuario = (req, res) => {
        let id = req.params.id

        usuarios.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send('Usuario excluído com sucesso.')
            }
        })
    }
}

export default UsuarioController