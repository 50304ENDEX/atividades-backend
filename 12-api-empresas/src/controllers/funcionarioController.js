const Funcionario = require('../models/funcionarioModels')

async function buscarTodos(req, res){
    res.json(await Funcionario.find().populate(['cargo', 'departamento']))
}

async function buscarId(req, res){
    const funcionario = await Funcionario.findById(req.params.id).populate(['cargo', 'departamento'])
    if(funcionario){
        res.json(funcionario)
    }
    else{
        res.status(404).json({mensagem:"funcionario não encontrado"})
    }
}

async function criar(req, res){
    const funcionario = new Funcionario(req.body)
    const funcionarioCriado = await funcionario.save()
    res.status(201).json(funcionarioCriado)
}

async function atualizar(req, res) {
    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (funcionarioAtualizado) {
        res.json(
            {
                mensagem: "Funcionario atualizado com sucesso!",
                funcionarioAtualizado
            }
        )
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrado!" })
    }
}

async function excluir(){
    const funcionarioExcluido = await Funcionario.findByIdAndDelete(req.params.id)
    if(funcionarioExcluido){
        res.json({mensagem:"Funcionario excluido!", funcionarioExcluido})
    }
    else{
    res.json({mensagem:"Funcionario não encontrado"})
    }
}

module.exports = {
        buscarTodos,
        buscarId,
        criar,
        atualizar,
        excluir
}