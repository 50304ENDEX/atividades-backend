const express = require('express')
const app = express()
//middlewares
app.use(express.json())

//rota
app.get('/', (req, res) =>{
    res.json("OK")
})

//exportar a requisição do rotiador contatos
const contatosRouter = require('./routes/contatos')
app.use(contatosRouter)

// start
app.listen(3016, () => {
    console.log("Aplicação rodando em http://localhost:3016")
})