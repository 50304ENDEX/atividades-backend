const express = require('express')
const router = express.Router()

//Banco de dados local
const ListaTarefas = ["estudar", "jogar", "limpar a louça"]

//- Recuperar todas as tarefas.
router.get('/task', (req, res) =>{
    res.json(ListaTarefas)
})

//- Recuperar uma tarefa específica por meio de seu identificador.
router.get('/task/:id', (req, res) =>{
    const id = req.params.id
    res.json(ListaTarefas[id])
})

//- Adicionar uma nova tarefa.
router.post('/tarefaNova', (req, res) =>{
    const tarefaNova = req.body
    ListaTarefas.push(tarefaNova.Nova)

    res.json({mensagem:"Uma nova tarefa foi adicionada"})
})


//- Atualizar uma tarefa existente com base em seu identificador.
router.put('/atualização/:id', (req, res) =>{
    const id = req.params.id
    const NovasTarefas = req.body
    ListaTarefas[id] = NovasTarefas.Novo
    res.json({mensagem:`A tarefa do id ${id} foi substituida`})
})

//- Remover uma tarefa da lista com base em seu identificador.
router.delete('/delete/:id', (req, res) =>{
    const id = req.params.id
    ListaTarefas.slice(id, 1)
    res.json({mensagem: "excluido com sucesso!"})
})


module.exports = router
