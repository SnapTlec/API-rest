import express from 'express'
import livros from '../routes/livroRoutes.js'
import autores from '../routes/autorRoutes.js'
import usuarios from '../routes/usuarioRoutes.js'
import login from './loginRoute.js'
import AuthMiddleware from '../middleware/auth.js'


const routes = (app) => {
    
    app.route('/').get((req, res) =>{
        res.render('index.hbs')
    })
    //Acessível sem token
    app.use(
        usuarios,
        login
    )
    //Acessível com token
    app.use(
        AuthMiddleware.isValid,
        livros,
        autores,
    )
}

export default routes