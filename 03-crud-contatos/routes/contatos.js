//
const express = require('express')
//rotiador e middleware
const router = express.Router()


//variavel / "banco de dados local" lista mackada
const ListaContatos = ["joão", "Pedro", "Rafael"]
console.log(ListaContatos[0])

//Read -> Buscar todos os conatos



//rotear rotas rotas
router.get('/contatos', (req, res) =>{
    res.json(ListaContatos)
})


//Read --> buscar todos os contatos por id
router.get('/contatos/:id', (req, res) =>{
    const id = req.params.id
    res.json(ListaContatos[id])
})

//Creat -> criar um contato e add na lista
router.post('/contatos', (req, res) => {
    const contato = req.body
    ListaContatos.push(contato)
    res.json({mensagem: "Criada com sucesso"})
})

module.exports = router