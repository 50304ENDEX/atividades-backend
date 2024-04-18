const express = require('express')
const app = express()

//middleware
app.use(express.json())

//
app.get('/',(req, res) => {
    res.json("Está funcionado a api na porta 4500")
})

//rotiador
const PessoasRouter = require('./router/pessoas')

app.use(PessoasRouter)

//
app.listen(4500, () =>{
    console.log("Api está na porta http://localhost:4500")
})