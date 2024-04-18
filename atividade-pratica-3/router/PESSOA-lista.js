const express = require('express')
const router = express.Router()

const pessoasListen = [
    {
        id: 1,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    }
]

//- Recuperar todas as pessoas.
router.get('/pessoas', (req, res) =>{
    res.json(pessoasListen)
})

//- Recuperar uma pessoa específica por meio de seu identificador.
router.get('/pessoa/:id', (req, res) =>{
    const id = req.params.id
    const pessoa =  pessoasListen.find(pessoa => pessoa.id == id)

    if(pessoa){
        return res.json(pessoa)
    }
    else{
        return res.status(404).json({mensagem: "nenhuma pessoa encontrada" })
    }
})

//- Adicionar uma nova pessoa.
router.post('/adicionandopessoa', (req, res) =>{
    const NovosDados = req.body

    if(!NovosDados.nome || !NovosDados.idade || !NovosDados.email || !NovosDados.telefone){
        return res.status(404).json({mensagem: "o nome, a idade, o email e o telefone são obrigatorios"})
    }

    const Pesssoamais = {
        id: Math.round(Math.random() * 1000),
        nome: NovosDados.nome,
        idade: NovosDados.idade,
        email: NovosDados.email,
        telefone: NovosDados.telefone
    }

        pessoasListen.push(Pesssoamais)
    
        res.json({
            mensagem:"Uma nova pessoa foi adicionada",
            pessoa: Pesssoamais
        })
})

//- Atualizar uma pessoa existente com base em seu identificador.
router.put('/atualizar/:id', (req, res) =>{
    const id = req.params.id
    const NovosDados = req.body

    if(!NovosDados.nome || !NovosDados.idade || !NovosDados.email || !NovosDados.telefone){
        return res.status(404).json({mensagem: "o nome, a idade, o email e o telefone são obrigatorios"})
    }

    const index = pessoasListen.findIndex(pessoa => pessoa.id == id)

    if(index == -1){
        return res.status(404).json({mensagem: "essa pessoa não existe"})
    }

    const NovaPessoa =     {
        id: Number(id),
        "nome": NovosDados.nome,
        "idade": NovosDados.idade,
        "email": NovosDados.email,
        "telefone": NovosDados.telefone
    }

    pessoasListen[index] = NovaPessoa
    res.json({mensagem: "dados atualizados com sucesso"})
})

//- Remover uma tarefa da lista com base em seu identificador.
router.delete('/delete/:id', (req, res) =>{
    const id = req.params.id
    const index = pessoasListen.findIndex(pessoa => pessoa.id == id)
    if(index == -1){
        return res.status(404).json({mensagem:"produto não encontrado"})
    }
    pessoasListen.splice(index, 1)
    res.json({
        mensagem: "indice excluido com sucesso"
    })
})



module.exports = router
