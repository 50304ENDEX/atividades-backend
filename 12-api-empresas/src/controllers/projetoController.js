const Projeto = require('../models/projeto')

async function create(req, res){
    const projeto = new Projeto(req.body)
    const projetoCriar = await projeto.save()
    res.status(404).json(projetoCriar)
}

async function getAll(req, res){
    res.json(await Projeto.find())
}

async function getById(req, res){
    const projeto = await Projeto.findById(req.params.id)
    if(projeto){
        res.json(projeto)
    }
    else{
        res.status(404).json({mensagem:"Projeto não encontrado"})
    }
}

async function update(req, res){
    const projetoAtualizado = await Projeto.findByIdAndUpdate(req.params.id, {new: true})
    if(projetoAtualizado){
        res.json(projetoAtualizado)
    }
    else{
        res.status(404).json({mensagem:"Projeto não encontrado"})
    }
}

async function remove(req, res){
    const projetoExcluido = await Projeto.findByIdAndDelete(req.params.id)
    if(projetoExcluido){
        res.json({
            mensagem:"Projeto excluido com sucesso!",
            projetoExcluido
        })
    }
    else{
        res.json({mensagem:"Projeto não encontrado!"})
    }
}

module.exports = {
    create,
    update,
    getAll,
    getById,
    remove
}