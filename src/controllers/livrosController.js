import livros from '../models/Livro.js'

class LivroController{
    static listaLivros = (req, res)=>{
        livros.find()
            .populate()
            .exec((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static listaLivrosPorId = (req, res) => {
        let id = req.params.id

        livros.findById(id)
            .populate()
            .exec((err, livros) => {
            if(err){
                res.status(400).send({message : `${err.message} - Id do livro não encontrado`})
            }else{
                res.status(200).send(livros)
            }
        })
    }

    static listaLivroPorEditora = (req, res) => {
        let editora = req.query.editora

        livros.find({'editora' : editora}, {}, (err, livros)=> {
            if(err){
                res.status(400).send({message : `${err.message} - Editora não encontrada`})
            }else{
                res.status(200).send(livros)
            }
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

    static removerLivro = (req, res) => {
        let id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send('Livro excluído com sucesso.')
            }
        })
    }
}

export default LivroController