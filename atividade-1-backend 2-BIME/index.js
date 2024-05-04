const express = require('express');
const app = express();
//middalware
app.use(express.json());

app.get('/i', (req, res) =>{
    res.json("a api esta rodando e funcionado. Isso é so um teste!!")
})
//
const pessoaK= require('./router/pessoa')
app.use(pessoaK)
//listen
app.listen(3400, () => {
    console.log("http://localhost:3400")
})