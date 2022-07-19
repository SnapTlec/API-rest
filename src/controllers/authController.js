import usuarios from '../models/Usuario.js'
import bcrypt from 'bcrypt'
class AuthController{
    static autenticacoes = async (req, res)=>{
        const {email, senha} = req.body
        const usuario = await usuarios.findOne({email}).select('senha')

        if(!usuario){
            return res.status(400).send({error: 'Usuário não encontrado'})
        }

        if(! await bcrypt.compare(senha, usuario.senha)){
            return res.status(400).send({error: 'Credenciais inválida'})
        }

        res.send({usuario})


    }
}
export default AuthController
