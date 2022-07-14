import livros from '../models/Livro.js'

class LivroController{
    static listaLivros = (req, res)=>{
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o livro.`})
            }else{
                res.status(200).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        let id = req.params.id

        livros.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao atualizar o livro.`})
            }else{
                res.status(200).send({message : 'Livro atualizado com sucesso.'})
            }
        })
    }
}

export default LivroController