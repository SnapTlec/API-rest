import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'


db.on('erro', console.log.bind(console, 'Error de conexão'))
db.once("open", () =>{
    console.log('conexão com o banco feita com sucesso!!')
})

const app = express()

app.use(express.json())

// const livros = [
//     {id: 1, 'titulo': 'Senhor dos Aneis'},
//     {id: 2, 'titulo': 'O Hobiit'}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})


app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livros cadastrado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app