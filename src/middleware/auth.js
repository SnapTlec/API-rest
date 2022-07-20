import jwt, { decode } from 'jsonwebtoken'
import authConfig from '../config/auth.json' assert {type:'json'}

class AuthMiddleware{
    static isValid = (req, res, next) =>{
        const authHeader = req.headers.authorization


        if(!authHeader){
            return res.status(401).send({error : 'No token provided'})
        }

        const parts = authHeader.split(' ')

        if(!parts.length === 2){
            return res.status(401).send({error: 'token error'})
        }

        const [scheme, token] = parts

        if(!/^Bearer$/i.test(scheme)){
            return res.status(401).send({error : 'token malformatted'})
        }

        jwt.verify(token, authConfig.secret, (err, decode) =>{
            
            if(err){
                return res.status(401).send({error : 'Token invalid'})
            }

            req.usuarioId = decode.id

            return next()
        })
    }
}

export default AuthMiddleware