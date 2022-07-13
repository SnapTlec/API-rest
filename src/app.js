import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'


db.on('erro', console.log.bind(console, 'Error de conexão'))
db.once("open", () =>{
    console.log('conexão com o banco feita com sucesso!!')
})

const app = express()

app.use(express.json())

routes(app)
// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id)
//     livros[index].titulo = req.body.titulo
//     res.json(livros)
// })

// function buscaLivro(id){
//     return livros.findIndex(livro => livro.id == id)
// }

export default app