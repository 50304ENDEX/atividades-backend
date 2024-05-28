const Cargo = require('../models/Cargo')

async function buscarTodos(req, res){
    res.json(await Cargo.find())
}

async function buscarId(req, res){
    const cargo = await Cargo.findById(req.params.id)
        if(cargo){
            res.json(cargo)
        }
        else{
            res.status(404).json({mensagem: "Cargo não encontrado!"})
        }
}

async function criar(req, res){
    const cargo = new Cargo(req.body)
    const cargoCriado = await cargo.save()
    res.status(201).json(cargoCriado)
}

async function atualizar(req, res){
    const cargoAtualizado = await Cargo.findByIdAndUpdate(req.params.id, req.body, { new: true})
    if(cargoAtualizado){
        res.json(
            {
                mensagem: "Cargo atualizado com sucesso!",
                cargoAtualizado
            }
        )
    }
    else{
        req.status(404).json({mensagem: "cargo não encontrado!"})
    }
}

async function excluir(req, res){
    const cargoExculir = await Cargo.findByIdAndDelete(req.params.id)
    if(cargoExculir){
        res.json(
            {
                mensagem:"cargo excluido com sucesso!",
                cargoExculir
            }
        )
    }
    else{
        res.json({mensagem:"cargo não encontrado!"})
    }
}

module.exports = {
    buscarTodos,
    buscarId,
    criar,
    atualizar,
    excluir
}