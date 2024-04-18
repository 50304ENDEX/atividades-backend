const express = require('express')
const router = express.Router()

const ListaPessoas = [
    {
        id:1,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    },
    {
        id:2,
        "nome": "Pedro",
        "ideade": 18,
        "email": "pedro@email.com",
        "telefone": "61988884545"
    }
]

//- Recuperar todas as pessoas.
router.get('/listaPessoas', (req, res) =>{
    res.json(ListaPessoas);
})

//- Recuperar uma pessoa específica por meio de seu identificador.
router.get('/pessoasSelect/:id', (req, res) =>{
    const id = req.params.id
    const pessoa = ListaPessoas.find(pessoa => pessoa.id == id)
    res.json(pessoa)

})

//- Adicionar uma nova pessoa.
router.post('/adicionar', (req, res) => {
    const DadosNovaPessoa = req.body

    const NOVApessoa = {
        id: ListaPessoas.length + 1,
        nome: DadosNovaPessoa.nome,
        idade: DadosNovaPessoa.idade,
        email: DadosNovaPessoa.email ,
        telefone: DadosNovaPessoa.telefone
    }

    ListaPessoas.push(NOVApessoa)

    res.json({
        mesnsagem: "Uma nova pessoa foi adicionada!!"
    })

})

//- Atualizar uma pessoa existente com base em seu identificador.
router.put('/pessoasAtualizado/:id', (req, res) =>{
    const id = req.params.id
    const Dados = req.body

    const index = ListaPessoas.findIndex(pessoa => pessoa.id == id)

    const PessoaAtualizada = {
        id: Number(id),
        nome: Dados.nome,
        idade: Dados.idade,
        email: Dados.email,
        telefone: Dados.telefone
    }

    ListaPessoas[index] = PessoaAtualizada

    res.json({
        mesnsagem: `A pessoa atualizada com sucesso!`
    })

})
//- Remover uma tarefa da lista com base em seu identificador.
router.delete('/deletarPessoa/:id', (req, res) =>{
    const id = req.params.id
    const index = ListaPessoas.findIndex(pessoa => pessoa.id == id)
    ListaPessoas.splice(index, 1)
    res.json({
        mesnsagem:"Uma pessoa foi deletada"
    })
})


module.exports = router