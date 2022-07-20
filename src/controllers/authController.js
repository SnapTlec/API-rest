import usuarios from '../models/Usuario.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import authConfig from '../config/auth.json' assert {type:"json"}

class AuthController{
    static geradorToken = (params={}) => {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 86400
        })
    }

    static autenticacoes = async (req, res)=>{
        const {email, senha} = req.body
        const usuario = await usuarios.findOne({email}).select('senha')

        if(!usuario){
            return res.status(400).send({error: 'Usuário não encontrado'})
        }

        if(! await bcrypt.compare(senha, usuario.senha)){
            return res.status(400).send({error: 'Credenciais inválida'})
        }
        
        usuario.senha = undefined

        res.send({
            usuario, 
            token: this.geradorToken({id : usuario.id})
        })


    }
}
export default AuthController
