import express from 'express'
import livros from '../routes/livroRoutes.js'
import autores from '../routes/autorRoutes.js'
import usuarios from '../routes/usuarioRoutes.js'
import login from './loginRoute.js'

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send('Curso de Node')
    })

    app.use(
        express.json(),
        livros,
        autores,
        usuarios,
        login
    )
}

export default routes