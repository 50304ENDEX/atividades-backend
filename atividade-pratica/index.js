const express = require('express')
const app = express()

//middleware
app.use(express.json())

//rotas
app.get('/', (req, res) =>{
    res.json("Api está rodando")
})

//rotas importadas
const nomesRouter = require('./router/tarefas')

app.use(nomesRouter)

//start
app.listen(4000, () =>{
    console.log("Aplicação rodando em http://localhost:4000")
})