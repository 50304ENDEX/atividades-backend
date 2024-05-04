const express = require("express")

const router = express.Router();

const lista_pessoa = [
    {
        id:1,
        "nome": "João",
        "idade": 20,
        "email": "joão@email.com",
        "telefone": "61900010002"
    }
];

function validade(req, res, next){
    const id = req.params.id;
    const pessoa = lista_pessoa.find(pessoa => pessoa.id == id)
    const index = lista_pessoa.findIndex(pessoa => pessoa.id == id)
        if(pessoa){
            res.pessoa = pessoa;
            res.index = index;
            return next()
        }
    return res.status(404).json({mensagem: "pessoa não achada!!!"})
}

function atributos(req, res, next){
    const dados = req.body;
    if(!dados.nome || !dados.idade || !dados.email || !dados.telefone){
        return res.status(400).json({mensagem:"id, nome, idade, email, telefone, são obrigatorios!!"})
    }
    return next()
}

//get --> recupera as pessoas:
router.get("/pessoas", (req, res) =>{
    res.json(lista_pessoa);
})

//get --> recuperar por id:
router.get("/pessoas/:id", validade,(req, res) =>{
    res.json(res.pessoa);
})

//post --> adicionar pessoa
router.post("/addpessoa", atributos, (req, res) =>{
    const dados = req.body

    console.log(dados);

    const pessoa = {
        id: lista_pessoa.length + 1,
        nome: dados.nome,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone
    };

    lista_pessoa.push(pessoa)

    res.json({
        mensagem:"Pessoa cadastrada com sucesso!!!",
        pessoa: pessoa
    })
})

//put --> mudar o dado
router.put('/modificar/:id', atributos, validade, (req, res) =>{
    const dados = req.body

    console.log(dados)
    const Novo = {
        id: req.params.id,
        nome: dados.nome,
        idade: dados.idade,
        email: dados.email,
        telefone: dados.telefone
    }
    
    lista_pessoa[res.index] = Novo

    res.json({mensagem:"dados alterados"})
})
//delete --> deletar uma pessoa
router.delete('/delete/:id', validade ,(req, res) =>{
    lista_pessoa.splice(res.index, 1)
    res.json({mensagem:"Pessoa excluida",
    })
})
module.exports = router