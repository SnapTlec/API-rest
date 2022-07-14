import autores from '../models/Autor.js'

class AutorController{
    static listaautores = (req, res)=>{
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listaautoresPorId = (req, res) => {
        let id = req.params.id

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(400).send({message : `${err.message} - Id do Autor não encontrado`})
            }else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let Autor = new autores(req.body)

        Autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o Autor.`})
            }else{
                res.status(200).send(Autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        let id = req.params.id

        autores.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if(err){
                res.status(500).send({message : `${err.message} - falha ao atualizar o Autor.`})
            }else{
                res.status(200).send({message : 'Autor atualizado com sucesso.'})
            }
        })
    }

    static removerAutor = (req, res) => {
        let id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(200).send('Autor excluído com sucesso.')
            }
        })
    }
}

export default AutorController